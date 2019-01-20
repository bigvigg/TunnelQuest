﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using TunnelQuest.AppLogic;
using TunnelQuest.Data;
using TunnelQuest.Data.Models;
using TunnelQuest.Web.Hubs;
using TunnelQuest.Web.Models.Api;

namespace TunnelQuest.Web.Controllers.Api
{
    [Route("api/chat_lines")]
    [ApiController]
    public class ChatLinesController : ControllerBase
    {
        private IHubContext<BlueHub> blueHub;
        private IHubContext<RedHub> redHub;
        private TunnelQuestContext context;

        public ChatLinesController(TunnelQuestContext _context, IHubContext<BlueHub> _blueHub, IHubContext<RedHub> _redHub)
        {
            this.context = _context;
            this.blueHub = _blueHub;
            this.redHub = _redHub;
        }

        // GET api/chat_lines
        [HttpGet]
        public LinesAndAuctions Get([FromQuery]string serverCode, [FromQuery]long? minId = null, [FromQuery]long? maxId = null, [FromQuery]int? maxResults = null)
        {
            var chatLines = new ChatLogic(context).GetLines(serverCode, minId, maxId, maxResults);
            return new LinesAndAuctions(chatLines);
        }

        // POST api/chat_lines
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] TunnelWatcherLog payload)
        {
            if (!Request.Headers.ContainsKey("Authorization"))
                return Unauthorized();

            string authToken;
            try
            {
                authToken = Request.Headers["Authorization"][0].Substring(7);
            }
            catch (ArgumentOutOfRangeException)
            {
                return Unauthorized();
            }

            var errors = new List<string>();
            try
            {
                var chatLogic = new ChatLogic(context);
                var addedLines = new List<ChatLine>();
                foreach (string line in payload.Lines)
                {
                    try
                    {
                        var chatLine = chatLogic.ProcessLogLine(authToken, payload.ServerCode, line);

                        if (chatLine != null)
                            addedLines.Add(chatLine);
                    }
                    catch (InvalidAuthTokenException)
                    {
                        return Unauthorized();
                    }
                    catch (Exception ex)
                    {
                        errors.Add(ex.Message);
                    }
                }

                // send the new lines to every connected signalr client
                if (addedLines.Count > 0)
                {
                    var newClientLines = new LinesAndAuctions(addedLines.ToArray());
                    switch (payload.ServerCode)
                    {
                        case ServerCodes.Blue:
                            await blueHub.Clients.All.SendAsync("NewChatLines", newClientLines);
                            break;

                        case ServerCodes.Red:
                            await redHub.Clients.All.SendAsync("NewChatLines", newClientLines);
                            break;

                        default:
                            throw new Exception("Unrecognized serverCode '" + payload.ServerCode + "'");
                    }
                }
            }
            catch (Exception ex)
            {
                errors.Add(ex.Message);
            }

            return new JsonResult(new TunnelWatcherLogErrors(errors.ToArray()));
        }

    }
}
