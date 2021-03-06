﻿using System;
using System.Collections.Generic;
using System.Text;

namespace TunnelQuest.Core.ChatSegments
{
    internal class SeparatorSegment : TextSegment
    {
        // static

        public static SeparatorSegment TryParse(TextSegment textSegment)
        {
            if (textSegment.Text == "")
                return null;

            int normalCount = 0;
            int specialCount = 0;

            for (int i = 0; i < textSegment.Text.Length; i++)
            {
                if (Char.IsLetterOrDigit(textSegment.Text, i))
                    normalCount++;
                else
                    specialCount++;
            }

            if (specialCount >= normalCount)
                return new SeparatorSegment(textSegment.Text, textSegment.HasPrecedingSpace);
            else
                return null;
        }


        // non-static


        // protected constructor so that these segments can only be created by calling TryParse()
        protected SeparatorSegment(string text, bool hasPrecedingSpace)
            : base(text, hasPrecedingSpace)
        {
        }
    }
}
