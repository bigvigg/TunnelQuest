﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using TunnelQuest.Core.Migrations.Data;
using TunnelQuest.Core.Models;

namespace TunnelQuest.Core.Migrations
{
    public partial class InsertStaticData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            using (var context = new TunnelQuestContext())
            {
                insertAliases(context);
                insertServers(context);
                insertAuthTokenStatuses(context);
                insertAuthTokens(context);
                insertClasses(context);
                insertRaces(context);
                insertSizes(context);
                insertSlots(context);
                insertEffectTypes(context);
                insertWeaponSkills(context);
                insertDeities(context);

                context.SaveChanges();
            }
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            using (var context = new TunnelQuestContext())
            {
                deleteAliases(context);
                deleteServers(context);
                deleteAuthTokens(context);
                deleteAuthTokenStatuses(context);
                deleteClasses(context);
                deleteRaces(context);
                deleteSizes(context);
                deleteSlots(context);
                deleteEffectTypes(context);
                deleteWeaponSkills(context);
                deleteDeities(context);

                context.SaveChanges();
            }
        }


        // private helpers

        #region aliases
        private void insertAliases(TunnelQuestContext context)
        {
            context.AddRange(getAliases());
        }

        private void deleteAliases(TunnelQuestContext context)
        {
            context.RemoveRange(getAliases());
        }

        private IEnumerable<Alias> getAliases()
        {
            return new Alias[] {
                new Alias() {
                    AliasText = "aon",
                    ItemName = "Amulet of Necropotence",
                    CreatedAt = DateTime.UtcNow
                },
                new Alias() {
                    AliasText = "schw",
                    ItemName = "Silver Chitin Hand Wraps",
                    CreatedAt = DateTime.UtcNow
                },
                new Alias() {
                    AliasText = "fbss",
                    ItemName = "Flowing Black Silk Sash",
                    CreatedAt = DateTime.UtcNow
                },
                new Alias() {
                    AliasText = "fungi",
                    ItemName = "Fungus Covered Scale Tunic",
                    CreatedAt = DateTime.UtcNow
                },
                new Alias() {
                    AliasText = "fungi tunic",
                    ItemName = "Fungus Covered Scale Tunic",
                    CreatedAt = DateTime.UtcNow
                },
                new Alias() {
                    AliasText = "jboot",
                    ItemName = "Journeyman's Boots",
                    CreatedAt = DateTime.UtcNow
                },
                new Alias() {
                    AliasText = "jboots",
                    ItemName = "Journeyman's Boots",
                    CreatedAt = DateTime.UtcNow
                },
                new Alias() {
                    AliasText = "ot hammer",
                    ItemName = "Worker Sledgemallet",
                    CreatedAt = DateTime.UtcNow
                },
            };
        }
        #endregion

        #region server
        private void insertServers(TunnelQuestContext context)
        {
            context.AddRange(getServers());
        }

        private void deleteServers(TunnelQuestContext context)
        {
            context.RemoveRange(getServers());
        }

        private IEnumerable<Server> getServers()
        {
            return new Server[] {
                new Server() {
                    ServerCode = ServerCodes.Blue,
                    ServerName = "Project 1999"
                },
                new Server() {
                    ServerCode = ServerCodes.Red,
                    ServerName = "Project 1999 (Red Server)"
                },
            };
        }
        #endregion

        #region auth_token
        private void insertAuthTokens(TunnelQuestContext context)
        {
            context.AddRange(getAuthTokens());
        }

        private void deleteAuthTokens(TunnelQuestContext context)
        {
            context.RemoveRange(getAuthTokens());
        }

        private IEnumerable<AuthToken> getAuthTokens()
        {
            return new AuthToken[] {
                new AuthToken() {
                    Name = "default",
                    AuthTokenStatusCode = AuthTokenStatusCodes.Approved,
                    Value = Guid.NewGuid().ToString()   // generate a different random token every time this is run
                }
            };
        }
        #endregion

        #region auth_token_status
        private void insertAuthTokenStatuses(TunnelQuestContext context)
        {
            context.AddRange(getAuthTokenStatuses());
        }

        private void deleteAuthTokenStatuses(TunnelQuestContext context)
        {
            context.RemoveRange(getAuthTokenStatuses());
        }

        private IEnumerable<AuthTokenStatus> getAuthTokenStatuses()
        {
            return new AuthTokenStatus[] {
                new AuthTokenStatus() {
                    AuthTokenStatusCode = AuthTokenStatusCodes.Pending
                },
                new AuthTokenStatus() {
                    AuthTokenStatusCode = AuthTokenStatusCodes.Approved
                },
                new AuthTokenStatus() {
                    AuthTokenStatusCode = AuthTokenStatusCodes.Declined
                }
            };
        }
        #endregion

        #region class
        private void insertClasses(TunnelQuestContext context)
        {
            context.AddRange(getClasses());
        }

        private void deleteClasses(TunnelQuestContext context)
        {
            context.RemoveRange(getClasses());
        }

        private IEnumerable<Class> getClasses()
        {
            return new Class[] {
                new Class() {
                    ClassCode = ClassCodes.Enchanter,
                    ClassName = ClassNames.Enchanter
                },
                new Class()
                {
                    ClassCode = ClassCodes.Magician,
                    ClassName = ClassNames.Magician
                },
                new Class()
                {
                    ClassCode = ClassCodes.Necromancer,
                    ClassName = ClassNames.Necromancer
                },
                new Class()
                {
                    ClassCode = ClassCodes.Wizard,
                    ClassName = ClassNames.Wizard
                },
                new Class()
                {
                    ClassCode = ClassCodes.Cleric,
                    ClassName = ClassNames.Cleric
                },
                new Class()
                {
                    ClassCode = ClassCodes.Druid,
                    ClassName = ClassNames.Druid
                },
                new Class()
                {
                    ClassCode = ClassCodes.Shaman,
                    ClassName = ClassNames.Shaman
                },
                new Class()
                {
                    ClassCode = ClassCodes.Bard,
                    ClassName = ClassNames.Bard
                },
                new Class()
                {
                    ClassCode = ClassCodes.Monk,
                    ClassName = ClassNames.Monk
                },
                new Class()
                {
                    ClassCode = ClassCodes.Ranger,
                    ClassName = ClassNames.Ranger
                },
                new Class()
                {
                    ClassCode = ClassCodes.Rogue,
                    ClassName = ClassNames.Rogue
                },
                new Class()
                {
                    ClassCode = ClassCodes.Paladin,
                    ClassName = ClassNames.Paladin
                },
                new Class()
                {
                    ClassCode = ClassCodes.ShadowKnight,
                    ClassName = ClassNames.ShadowKnight
                },
                new Class()
                {
                    ClassCode = ClassCodes.Warrior,
                    ClassName = ClassNames.Warrior
                }
            };
        }

        #endregion

        #region race
        private void insertRaces(TunnelQuestContext context)
        {
            context.AddRange(getRaces());
        }

        private void deleteRaces(TunnelQuestContext context)
        {
            context.RemoveRange(getRaces());
        }

        private IEnumerable<Race> getRaces()
        {
            return new Race[] {
                new Race() {
                    RaceCode = RaceCodes.Barbarian,
                    RaceName = RaceNames.Barbarian
                },
                new Race() {
                    RaceCode = RaceCodes.DarkElf,
                    RaceName = RaceNames.DarkElf
                },
                new Race() {
                    RaceCode = RaceCodes.Dwarf,
                    RaceName = RaceNames.Dwarf
                },
                new Race() {
                    RaceCode = RaceCodes.Erudite,
                    RaceName = RaceNames.Erudite
                },
                new Race() {
                    RaceCode = RaceCodes.Gnome,
                    RaceName = RaceNames.Gnome
                },
                new Race() {
                    RaceCode = RaceCodes.HalfElf,
                    RaceName = RaceNames.HalfElf
                },
                new Race() {
                    RaceCode = RaceCodes.Halfling,
                    RaceName = RaceNames.Halfling
                },
                new Race() {
                    RaceCode = RaceCodes.HighElf,
                    RaceName = RaceNames.HighElf
                },
                new Race() {
                    RaceCode = RaceCodes.Human,
                    RaceName = RaceNames.Human
                },
                new Race() {
                    RaceCode = RaceCodes.Iksar,
                    RaceName = RaceNames.Iksar
                },
                new Race() {
                    RaceCode = RaceCodes.Ogre,
                    RaceName = RaceNames.Ogre
                },
                new Race() {
                    RaceCode = RaceCodes.Troll,
                    RaceName = RaceNames.Troll
                },
                new Race() {
                    RaceCode = RaceCodes.WoodElf,
                    RaceName = RaceNames.WoodElf
                },
            };
        }

        #endregion

        #region size
        private void insertSizes(TunnelQuestContext context)
        {
            context.AddRange(getSizes());
        }

        private void deleteSizes(TunnelQuestContext context)
        {
            context.RemoveRange(getSizes());
        }

        private IEnumerable<Size> getSizes()
        {
            return new Size[] {
                new Size() {
                    SizeCode = SizeCodes.Tiny
                },
                new Size() {
                    SizeCode = SizeCodes.Small
                },
                new Size() {
                    SizeCode = SizeCodes.Medium
                },
                new Size() {
                    SizeCode = SizeCodes.Large
                },
                new Size() {
                    SizeCode = SizeCodes.Giant
                }
            };
        }
        #endregion

        #region slot
        private void insertSlots(TunnelQuestContext context)
        {
            context.AddRange(getSlots());
        }

        private void deleteSlots(TunnelQuestContext context)
        {
            context.RemoveRange(getSlots());
        }

        private IEnumerable<Slot> getSlots()
        {
            return new Slot[] {
                new Slot() {
                    SlotCode = SlotCodes.Arms
                },
                new Slot() {
                    SlotCode = SlotCodes.Back
                },
                new Slot() {
                    SlotCode = SlotCodes.Chest
                },
                new Slot() {
                    SlotCode = SlotCodes.Ear
                },
                new Slot() {
                    SlotCode = SlotCodes.Face
                },
                new Slot() {
                    SlotCode = SlotCodes.Feet
                },
                new Slot() {
                    SlotCode = SlotCodes.Finger
                },
                new Slot() {
                    SlotCode = SlotCodes.Hands
                },
                new Slot() {
                    SlotCode = SlotCodes.Head
                },
                new Slot() {
                    SlotCode = SlotCodes.Legs
                },
                new Slot() {
                    SlotCode = SlotCodes.Neck
                },
                new Slot() {
                    SlotCode = SlotCodes.Shoulders
                },
                new Slot() {
                    SlotCode = SlotCodes.Waist
                },
                new Slot() {
                    SlotCode = SlotCodes.Wrist
                },
                new Slot() {
                    SlotCode = SlotCodes.Primary
                },
                new Slot() {
                    SlotCode = SlotCodes.Secondary
                },
                new Slot() {
                    SlotCode = SlotCodes.Range
                },
                new Slot() {
                    SlotCode = SlotCodes.Ammo
                }
            };
        }
        #endregion

        #region effect_type
        private void insertEffectTypes(TunnelQuestContext context)
        {
            context.AddRange(getEffectTypes());
        }

        private void deleteEffectTypes(TunnelQuestContext context)
        {
            context.RemoveRange(getEffectTypes());
        }

        private IEnumerable<EffectType> getEffectTypes()
        {
            return new EffectType[] {
                new EffectType() {
                    EffectTypeCode = EffectTypeCodes.Combat
                },
                new EffectType() {
                    EffectTypeCode = EffectTypeCodes.Worn
                },
                new EffectType() {
                    EffectTypeCode = EffectTypeCodes.ClickAnySlot
                },
                new EffectType() {
                    EffectTypeCode = EffectTypeCodes.ClickEquipped
                },
                new EffectType() {
                    EffectTypeCode = EffectTypeCodes.LearnSpell
                }
            };
        }
        #endregion

        #region weapon_skill
        private void insertWeaponSkills(TunnelQuestContext context)
        {
            context.AddRange(getWeaponSkills());
        }

        private void deleteWeaponSkills(TunnelQuestContext context)
        {
            context.RemoveRange(getWeaponSkills());
        }

        private IEnumerable<WeaponSkill> getWeaponSkills()
        {
            return new WeaponSkill[] {
                new WeaponSkill() {
                    WeaponSkillCode = WeaponSkillCodes.OneHandBlunt
                },
                new WeaponSkill() {
                    WeaponSkillCode = WeaponSkillCodes.TwoHandBlunt
                },
                new WeaponSkill() {
                    WeaponSkillCode = WeaponSkillCodes.OneHandSlashing
                },
                new WeaponSkill() {
                    WeaponSkillCode = WeaponSkillCodes.TwoHandSlashing
                },
                new WeaponSkill() {
                    WeaponSkillCode = WeaponSkillCodes.OneHandPiercing
                },
                new WeaponSkill() {
                    WeaponSkillCode = WeaponSkillCodes.TwoHandPiercing
                },
                new WeaponSkill() {
                    WeaponSkillCode = WeaponSkillCodes.Archery
                },
                new WeaponSkill() {
                    WeaponSkillCode = WeaponSkillCodes.Throwing
                },
                new WeaponSkill() {
                    WeaponSkillCode = WeaponSkillCodes.HandToHand
                }
            };
        }
        #endregion

        #region deity
        private void insertDeities(TunnelQuestContext context)
        {
            context.AddRange(getDeities());
        }

        private void deleteDeities(TunnelQuestContext context)
        {
            context.RemoveRange(getDeities());
        }

        private IEnumerable<Deity> getDeities()
        {
            return new Deity[] {
                new Deity() {
                    DeityName = DeityNames.CazicThule
                },
                new Deity() {
                    DeityName = DeityNames.Tunare
                },
                new Deity() {
                    DeityName = DeityNames.Karana
                },
                new Deity() {
                    DeityName = DeityNames.BrellSerilis
                },
                new Deity() {
                    DeityName = DeityNames.Innoruuk
                },
                new Deity() {
                    DeityName = DeityNames.Quellious
                },
                new Deity() {
                    DeityName = DeityNames.Bertoxxulous
                },
                new Deity() {
                    DeityName = DeityNames.ErollisiMarr
                },
                new Deity() {
                    DeityName = DeityNames.Bristlebane
                },
                new Deity() {
                    DeityName = DeityNames.MithanielMarr
                },
                new Deity() {
                    DeityName = DeityNames.Prexus
                },
                new Deity() {
                    DeityName = DeityNames.RallosZek
                },
                new Deity() {
                    DeityName = DeityNames.RodcetNife
                },
                new Deity() {
                    DeityName = DeityNames.SolusekRo
                },
                new Deity() {
                    DeityName = DeityNames.TheTribunal
                }
            };
        }
        #endregion

    }
}


