﻿using System;
using System.Collections.Generic;
using System.Linq;
using TunnelQuest.Core;
using TunnelQuest.Core.Models;
using System.Threading;
using TunnelQuest.Core.ChatSegments;
using System.Runtime.Caching;
using Microsoft.EntityFrameworkCore;

namespace TunnelQuest.Core
{
    public class SpellLogic
    {
        private TunnelQuestContext context;


        public SpellLogic(TunnelQuestContext _context)
        {
            if (_context == null)
                throw new Exception("_context cannot be null");

            this.context = _context;
        }


        public Spell[] GetSpells(string[] spellNames)
        {
            return context.Spells
                .Where(spell => spellNames.Contains(spell.SpellName))
                .OrderBy(spell => spell.SpellName)
                .Include(spell => spell.Requirements)
                .Include(spell => spell.EffectDetails)
                .Include(spell => spell.Sources)
                .ToArray();
        }

    }
}
