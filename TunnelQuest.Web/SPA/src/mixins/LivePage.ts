﻿import mixins from 'vue-typed-mixins';

import ChatLine from "../interfaces/ChatLine";
import Auction from "../interfaces/Auction";
import ChatLinePayload from "../interfaces/ChatLinePayload";

import TQGlobals from "../classes/TQGlobals";
import ConnectionWrapper from "../classes/ConnectionWrapper";

import TqPage from "../mixins/TqPage";


// LivePage provides functionality for page components that need to display an overall snapshot of the recent live data feed in real-time (i.e. ChatView and AuctionHouseView)

export default mixins(TqPage).extend({

    data: function () {
        return {
            isActive: true,
            transitionName: "slidedown",
            connection: new ConnectionWrapper(),
        };
    },

    beforeRouteEnter: function (to: any, from: any, next: any) {
        //stub
        //console.log("LivePage.beforeRouteEnter");
        //console.log(to);
        //console.log(from);

        localStorage.setItem("LastLivePage", JSON.stringify({
            fullPath: to.fullPath,
            name: to.name
        }));

        next();
    },

    activated: function () {
        this.isActive = true;

        // I don't think VueRouter provides an event hook for after it restores the saved scroll position,
        // so a hacky workaround seems to be adding a tiny delay after activated.  Otherwise, if we run
        // the below code directly inside activated, it will always reconnect because it will always be
        // scrolled to the top at this moment (before VueRouter restores the saved state)
        setTimeout(() => {
            if (this.isInitialized && this.isScrolledToTop() && !this.connection.isConnected())
                this.connection.connect();
        }, 10);
    },

    deactivated: function () {
        this.isActive = false;

        if (this.isInitialized && this.connection.isConnected())
            this.connection.disconnect();
    },

    beforeDestroy: function () {
        // unwire from global events
        TQGlobals.filterManager.offSelectedFilterChanged(this.onSelectedFilterChangedOrEdited);
        TQGlobals.filterManager.offSelectedFilterEdited(this.onSelectedFilterChangedOrEdited);

        // shut down the connection
        this.connection.off("NewContent", this.onNewLiveChat);
        this.connection.offConnected(this.onConnected);
        //this.connection.offDisconnected(this.onDisconnected);
        if (this.connection.isConnected())
            this.connection.disconnect();
        this.connection.destroy();
    },
    
    methods: {

        getHubUrl: function () {
            // STUB hard-coded
            return "/blue_chat_hub";
        },

        // inherited from TqPage
        onInitialized: function () {
            // wire up to global events
            TQGlobals.filterManager.onSelectedFilterChanged(this.onSelectedFilterChangedOrEdited);
            TQGlobals.filterManager.onSelectedFilterEdited(this.onSelectedFilterChangedOrEdited);

            // create connection
            this.connection.setHubUrl(this.getHubUrl());
            this.connection.on("NewContent", this.onNewLiveChat);
            this.connection.onConnected(this.onConnected);
            //this.connection.onDisconnected(this.onDisconnected);
            this.connection.connect();
        },

        onSelectedFilterChangedOrEdited: function () {
            // stub
            console.log("LivePage.onSelectedFilterChangedOrEdited");

            // clear out all previous chat lines
            this.clearChatLines();

            if (this.isActive)
                this.loadLatestFilteredChatLines();
        },

        onNewLiveChat: function (liveChatLines: ChatLinePayload) {
            this.filterAndAddLinesAsync(liveChatLines);
        },

        onConnected: function () {
            //stub
            console.log("LivePage.onConnected()");

            this.loadLatestFilteredChatLines();
        },

        //onDisconnected: function () {
        //},


        // inherited from TqPage
        onScrolled: function () {
            //console.log("stub LivePage.onScrolled");

            if (this.isInitialized == false || this.isActive == false)
                return;

            if (this.isScrolledToTop()) {
                this.transitionName = "slidedown";

                if (!this.connection.isConnected())
                    this.connection.connect();
            }
            else {
                this.transitionName = "none";

                if (this.connection.isConnected())
                    this.connection.disconnect();
            }
        },

        // inherited from TqPage
        getChatFilterSettings: function () {
            return TQGlobals.filterManager.selectedFilter.settings;
        },

        filterAndAddLinesAsync: function (liveChatLines: ChatLinePayload) {
            // fetch any missing item data that will be necessary to apply the filter logic
            this.fetchNecessaryItemsAsync(liveChatLines.lines, () => {
                // fetch any missing price history data that will be necessary to apply the filter logic
                this.fetchNecessaryPriceHistoryAsync(liveChatLines.lines, () => {
                    // now we've got all the data necessary to evaluate the filter loaded into the repos,
                    // and we can do the filtering logic

                    let filteredChatLines = new Array<ChatLine>();

                    for (let chatLine of liveChatLines.lines) {
                        // the chatLine passes the filter if any of its auctions pass the filter
                        let anyAuctionPassedFilter = false;
                        for (let auctionId in chatLine.auctions) {
                            let auction = chatLine.auctions[auctionId];
                            // Auctions coming in from the live hub feed will NOT already have their
                            // "passesFilter" property set by the server like the API query results do,
                            // so we need to evaluate all the filtering logic here in the client script
                            // to set auction.passesFilter for these auctions.
                            auction.passesFilter = this.doesAuctionPassFilter(auction);

                            anyAuctionPassedFilter = anyAuctionPassedFilter || auction.passesFilter;
                        }
                        if (anyAuctionPassedFilter)
                            filteredChatLines.push(chatLine);
                    }

                    this.addChatLines(filteredChatLines, true);
                });
            });
        },

        doesAuctionPassFilter(auction: Auction) {
            // default to true, and then check each filter setting one-by-one to see if the auction
            // fails any of them
            let passesFilter = true;

            let fs = TQGlobals.filterManager.selectedFilter.settings; // shortcut

            if (fs.items.queryType == "name") {
                // filter by names
                if (fs.items.names.length > 0 && fs.items.names.indexOf(auction.itemName) < 0)
                    passesFilter = false;
            }
            else {
                // filter by stats

                if (fs.items.stats.minStrength != null && (auction.item.strength == null || fs.items.stats.minStrength > auction.item.strength))
                    passesFilter = false;

                if (fs.items.stats.minStamina != null && (auction.item.stamina == null || fs.items.stats.minStamina > auction.item.stamina))
                    passesFilter = false;

                if (fs.items.stats.minAgility != null && (auction.item.agility == null || fs.items.stats.minAgility > auction.item.agility))
                    passesFilter = false;

                if (fs.items.stats.minDexterity != null && (auction.item.dexterity == null || fs.items.stats.minDexterity > auction.item.dexterity))
                    passesFilter = false;

                if (fs.items.stats.minWisdom != null && (auction.item.wisdom == null || fs.items.stats.minWisdom > auction.item.wisdom))
                    passesFilter = false;

                if (fs.items.stats.minIntelligence != null && (auction.item.intelligence == null || fs.items.stats.minIntelligence > auction.item.intelligence))
                    passesFilter = false;

                if (fs.items.stats.minCharisma != null && (auction.item.charisma == null || fs.items.stats.minCharisma > auction.item.charisma))
                    passesFilter = false;

                if (fs.items.stats.minHitPoints != null && (auction.item.hitPoints == null || fs.items.stats.minHitPoints > auction.item.hitPoints))
                    passesFilter = false;

                if (fs.items.stats.minMana != null && (auction.item.mana == null || fs.items.stats.minMana > auction.item.mana))
                    passesFilter = false;

                if (fs.items.stats.minArmorClass != null && (auction.item.armorClass == null || fs.items.stats.minArmorClass > auction.item.armorClass))
                    passesFilter = false;

                if (fs.items.stats.minMagicResist != null && (auction.item.magicResist == null || fs.items.stats.minMagicResist > auction.item.magicResist))
                    passesFilter = false;

                if (fs.items.stats.minPoisonResist != null && (auction.item.poisonResist == null || fs.items.stats.minPoisonResist > auction.item.poisonResist))
                    passesFilter = false;

                if (fs.items.stats.minDiseaseResist != null && (auction.item.diseaseResist == null || fs.items.stats.minDiseaseResist > auction.item.diseaseResist))
                    passesFilter = false;

                if (fs.items.stats.minFireResist != null && (auction.item.fireResist == null || fs.items.stats.minFireResist > auction.item.fireResist))
                    passesFilter = false;

                if (fs.items.stats.minColdResist != null && (auction.item.coldResist == null || fs.items.stats.minColdResist > auction.item.coldResist))
                    passesFilter = false;

                if (fs.items.stats.minHaste != null && (auction.item.haste == null || fs.items.stats.minHaste > auction.item.haste))
                    passesFilter = false;

                if (fs.items.stats.minSingingModifier != null && (auction.item.singingModifier == null || fs.items.stats.minSingingModifier > auction.item.singingModifier))
                    passesFilter = false;

                if (fs.items.stats.minPercussionModifier != null && (auction.item.percussionModifier == null || fs.items.stats.minPercussionModifier > auction.item.percussionModifier))
                    passesFilter = false;

                if (fs.items.stats.minStringedModifier != null && (auction.item.stringedModifier == null || fs.items.stats.minStringedModifier > auction.item.stringedModifier))
                    passesFilter = false;

                if (fs.items.stats.minBrassModifier != null && (auction.item.brassModifier == null || fs.items.stats.minBrassModifier > auction.item.brassModifier))
                    passesFilter = false;

                if (fs.items.stats.minWindModifier != null && (auction.item.windModifier == null || fs.items.stats.minWindModifier > auction.item.windModifier))
                    passesFilter = false;

                // STUB TODO more filter conditions
            }
                        
            return passesFilter;
        },

        fetchNecessaryItemsAsync: function (liveChatLines: Array<ChatLine>, callback: Function) {
            //STUB
            console.log("LivePage.fetchNecessaryItemsAsync()");
            console.log(liveChatLines);

            let fs = TQGlobals.filterManager.selectedFilter.settings; // shortcut

            if (fs.items.queryType == "stats") {
                for (let chatLine of liveChatLines) {
                    for (let auctionId in chatLine.auctions) {
                        let auction = chatLine.auctions[auctionId];
                        auction.item = TQGlobals.items.queue(auction.itemName);
                    }
                }

                TQGlobals.items.getQueuedItemsAsync(callback);
            }
            else {
                callback();
            }
        },

        fetchNecessaryPriceHistoryAsync: function (liveChatLines: Array<ChatLine>, callback: Function) {
            //STUB
            console.log("LivePage.fetchNecessaryPriceHistoryAsync()");
            console.log(liveChatLines);

            // STUB fetch logic goes here

            callback();
        }
    }
});
