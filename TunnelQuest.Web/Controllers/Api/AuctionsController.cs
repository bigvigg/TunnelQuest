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
    [Route("api/auctions")]
    [ApiController]
    public class AuctionsController : ControllerBase
    {
        private TunnelQuestContext context;

        public AuctionsController(TunnelQuestContext _context)
        {
            this.context = _context;
        }

        // GET api/auctions
        [HttpGet]
        public LinesAndAuctions Get([FromQuery]string serverCode = null, [FromQuery]string itemName = null, [FromQuery]DateTime? minUpdatedAt = null, [FromQuery]DateTime? maxUpdatedAt = null, [FromQuery]int? maxResults = null)
        {
            var logic = new AuctionLogic(context);

            if (maxResults == null)
                maxResults = AuctionLogic.MAX_AUCTIONS;

            return new LinesAndAuctions(logic.GetAuctions(serverCode, true, itemName, minUpdatedAt, maxUpdatedAt, maxResults));
        }

    }
}
