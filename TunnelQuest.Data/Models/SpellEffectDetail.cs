﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace TunnelQuest.Data.Models
{
    [Table("spell_effect_detail")]
    public class SpellEffectDetail
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("spell_effect_detail_id")]
        public int SpellRequirementId { get; set; }

        [Required]
        [ForeignKey("Spell")]
        [Column("spell_name")]
        public string SpellName { get; set; }
        public Spell Spell { get; set; }

        [Required]
        [Column("text")]
        public string Text { get; set; }
    }
}
