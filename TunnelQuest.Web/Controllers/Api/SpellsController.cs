﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using TunnelQuest.Core;
using TunnelQuest.Core.Models;
using TunnelQuest.Web.Hubs;
using TunnelQuest.Web.Models.Api;

namespace TunnelQuest.Web.Controllers.Api
{
    [Route("api/spells")]
    [ApiController]
    public class SpellsController : ControllerBase
    {
        private TunnelQuestContext context;

        public SpellsController(TunnelQuestContext _context)
        {
            this.context = _context;
        }

        [HttpPost]
        public ClientSpell[] Post([FromBody]SpellsQuery query)
        {
            var spellLogic = new SpellLogic(context);
            return ClientSpell.Create(spellLogic.GetSpells(query.SpellNames));
        }

    }
}
