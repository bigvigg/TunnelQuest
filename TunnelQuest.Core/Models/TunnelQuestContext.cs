﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Text;
using Microsoft.Extensions.Configuration;
using System.IO;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;
using Microsoft.EntityFrameworkCore.Diagnostics;

namespace TunnelQuest.Core.Models
{
    public class TunnelQuestContext : DbContext
    {
        // stub remove this
        //private static readonly LoggerFactory consoleLoggerFactory = new LoggerFactory(new[] { new ConsoleLoggerProvider((_, __) => true, true) });

        public DbSet<Class> Classes { get; set; }
        public DbSet<Spell> Spells { get; set; }
        public DbSet<EffectType> EffectTypes { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<Race> Races { get; set; }
        public DbSet<Size> Sizes { get; set; }
        public DbSet<Slot> Slots { get; set; }
        public DbSet<WeaponSkill> WeaponSkills { get; set; }
        public DbSet<Deity> Deities { get; set; }
        public DbSet<Server> Servers { get; set; }
        public DbSet<ChatLine> ChatLines { get; set; }
        public DbSet<Auction> Auctions { get; set; }
        public DbSet<PriceHistory> PriceHistories { get; set; }
        public DbSet<AuthToken> AuthTokens { get; set; }
        public DbSet<AuthTokenStatus> AuthTokenStatuses { get; set; }
        public DbSet<Alias> Aliases { get; set; }
        public DbSet<UnknownItem> UnknownItems { get; set; }


        public TunnelQuestContext ()
            : base()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

            IConfigurationRoot configuration = builder.Build();

            optionsBuilder
                .UseMySql(configuration.GetConnectionString("TunnelQuest"))
                .ConfigureWarnings(warnings => warnings.Throw(RelationalEventId.QueryClientEvaluationWarning)); // do NOT ignore "LINQ expression could not be translated and will be evaluated locally" errors
                //.EnableSensitiveDataLogging(true);
                //.UseLoggerFactory(consoleLoggerFactory);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            // declare all the things like composite primary keys and indexes that we can't declare with model attributes


            // item
            modelBuilder.Entity<Item>().HasIndex(item => item.EffectSpellName);

            // item_class
            modelBuilder.Entity<ItemClass>().HasKey(ic => new { ic.ItemName, ic.ClassCode });
            modelBuilder.Entity<ItemClass>().HasIndex(ic => ic.ItemName);

            // item_race
            modelBuilder.Entity<ItemRace>().HasKey(ir => new { ir.ItemName, ir.RaceCode });
            modelBuilder.Entity<ItemRace>().HasIndex(ir => ir.ItemName);

            // item_slot
            modelBuilder.Entity<ItemSlot>().HasKey(slot => new { slot.ItemName, slot.SlotCode });
            modelBuilder.Entity<ItemSlot>().HasIndex(slot => slot.ItemName);

            // item_deity
            modelBuilder.Entity<ItemDeity>().HasKey(id => new { id.ItemName, id.DeityName });
            modelBuilder.Entity<ItemDeity>().HasIndex(id => id.ItemName);

            // item_info_line
            modelBuilder.Entity<ItemInfoLine>().HasIndex(ii => ii.ItemName);


            // spell_effect_detail
            modelBuilder.Entity<SpellEffectDetail>().HasIndex(sed => sed.SpellName);

            // spell_requirement
            modelBuilder.Entity<SpellRequirement>().HasKey(sr => new { sr.SpellName, sr.ClassCode });
            modelBuilder.Entity<SpellRequirement>().HasIndex(sr => sr.SpellName);

            // spell_source
            modelBuilder.Entity<SpellSource>().HasIndex(ss => ss.SpellName);


            // chat_line
            modelBuilder.Entity<ChatLine>().HasIndex(line => new { line.ServerCode, line.ChatLineId, line.PlayerName });

            // auction
            // used in AuctionLogic
            modelBuilder.Entity<Auction>().HasIndex(auction => new { auction.ServerCode, auction.ItemName, auction.PlayerName, auction.IsPermanent, auction.CreatedAt });
            // used in PriceHistoryService
            modelBuilder.Entity<Auction>().HasIndex(auction => new { auction.ServerCode, auction.IsPermanent, auction.IsBuying, auction.Price, auction.ItemName });
            modelBuilder.Entity<Auction>().HasIndex(auction => new { auction.ServerCode, auction.ItemName, auction.IsPermanent });
            // used in ChatLogic
            modelBuilder.Entity<Auction>().HasIndex(auction => new { auction.ServerCode, auction.ItemName, auction.IsBuying, auction.IsKnownItem, auction.PlayerName });
            modelBuilder.Entity<Auction>().HasIndex(auction => new { auction.ServerCode, auction.ChatLineId, auction.ItemName, auction.IsBuying, auction.IsKnownItem, auction.PlayerName });
            modelBuilder.Entity<Auction>().HasIndex(auction => new { auction.ServerCode, auction.ItemName, auction.IsPermanent }); // for ItemPage history query
            modelBuilder.Entity<Auction>().HasIndex(auction => new { auction.ServerCode, auction.ChatLineId, auction.ItemName, auction.IsPermanent }); // for ItemPage history query

            // price_history
            modelBuilder.Entity<PriceHistory>().HasIndex(priceHistory => new { priceHistory.ServerCode, priceHistory.ItemName });

            // alias
            modelBuilder.Entity<Alias>().HasIndex(alias => alias.ItemName);

            // unknown_item
            modelBuilder.Entity<UnknownItem>().HasKey(unknownItem => new { unknownItem.ServerCode, unknownItem.IsBuying, unknownItem.ItemName });
            modelBuilder.Entity<UnknownItem>().HasIndex(unknownItem => unknownItem.ServerCode);
            modelBuilder.Entity<UnknownItem>().HasIndex(unknownItem => new { unknownItem.ServerCode, unknownItem.IsBuying });
        }
    }
}
