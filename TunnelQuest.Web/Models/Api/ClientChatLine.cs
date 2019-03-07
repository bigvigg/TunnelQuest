﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TunnelQuest.Data.Models;

namespace TunnelQuest.Web.Models.Api
{
    public class ClientChatLine
    {
        public long Id { get; set; }
        public string PlayerName { get; set; }
        public string Text { get; set; }
        public ClientChatLineToken[] Tokens { get; set; }
        public DateTime SentAtString { get; set; } // named String even though it's a DateTime in C# because it will be serialized as a string in javascript

        public ClientChatLine()
        {
        }

        public ClientChatLine (ChatLine line)
        {
            this.Id = line.ChatLineId;
            this.PlayerName = line.PlayerName;
            this.Text = line.Text;
            this.SentAtString = line.SentAt;

            this.Tokens = new ClientChatLineToken[line.Tokens.Count];
            int i = 0;
            foreach (var lineToken in line.Tokens)
            {
                this.Tokens[i] = new ClientChatLineToken(lineToken);
                i++;
            }
        }
    }
}
