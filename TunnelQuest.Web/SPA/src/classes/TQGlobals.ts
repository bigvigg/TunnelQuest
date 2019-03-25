﻿import axios from "axios";

import Settings from "../interfaces/Settings";
import Filters from "../interfaces/Filters";

import ItemRepo from "../classes/ItemRepo";
import SpellRepo from "../classes/SpellRepo";
import PriceHistoryRepo from "../classes/PriceHistoryRepo";

class TQGlobals {

    private static isInitializing: boolean = false;
    private static initCallbacks: Array<Function> = new Array<Function>();

    static isInitialized: boolean = false;
    static settings: Settings;
    static filters: Filters;
    static items: ItemRepo;
    static spells: SpellRepo;
    static priceHistories: PriceHistoryRepo;


    static init(callback: Function) {

        if (this.settings)
            callback(); // already initialized; callback immediately
        else {
            this.initCallbacks.push(callback);

            if (!this.isInitializing) {
                this.isInitializing = true;

                //stub
                console.log("TQGlobals initializing, making ajax call to api/settings");

                axios.get('/api/settings')
                    .then(response => {
                        this.settings = response.data as Settings;
                        this.spells = new SpellRepo();
                        this.items = new ItemRepo(this.spells);
                        this.priceHistories = new PriceHistoryRepo();

                        // make sure all aliases are lowercase
                        let aliasesToFix = new Array<string>();
                        for (let aliasText in this.settings.aliases) {
                            let lowerAliasText = aliasText.toLowerCase();
                            if (aliasText != lowerAliasText) {
                                // it was not already lowercase
                                aliasesToFix.push(aliasText);
                            }
                        }
                        for (let aliasText of aliasesToFix) {
                            let lowerAliasText = aliasText.toLowerCase();
                            this.settings.aliases[lowerAliasText] = this.settings.aliases[aliasText];
                            delete this.settings.aliases[aliasText];
                        }

                        // build settings.aliasesByItemName
                        this.settings.aliasesByItemName = {};
                        for (let aliasText in this.settings.aliases) {
                            let itemName = this.settings.aliases[aliasText];
                            if (!this.settings.aliasesByItemName[itemName])
                                this.settings.aliasesByItemName[itemName] = new Array<string>();
                            this.settings.aliasesByItemName[itemName].push(aliasText);
                        }

                        // attempt to load previous filter settings from localstorage
                        let existingFiltersJson = localStorage.getItem("Filters");
                        if (existingFiltersJson == null) {
                            // no previously saved filter was found; use default filter values
                            this.filters = {} as Filters;
                            this.filters.matchAny = true;
                            this.filters.itemNames = [];
                        }
                        else {
                            this.filters = JSON.parse(existingFiltersJson);
                        }

                        this.isInitializing = false;
                        this.isInitialized = true;

                        for (let callback of this.initCallbacks) {
                            callback();
                        }
                    })
                    .catch(err => {
                        this.isInitializing = false;

                        // stub
                        console.log(err);
                    }); // end axios.get(settings)
            }
        }
    }


    static saveFilter() {
        if (this.isInitialized)
            localStorage.setItem("Filters", JSON.stringify(this.filters));
    }

    // utility / helper functions

    // if itemName is an alias such as "schw" or "fbss", return the actual itemName; otherwi
    static resolveItemAlias(itemName: string) {
        if (!itemName)
            return itemName;

        let realItemName = this.settings.aliases[itemName.toLowerCase()];

        if (realItemName)
            return realItemName;
        else
            return itemName;
    }

    // code lifted from this stackoverflow post: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    static formatNumber(numberToFormat: number, decimals: number, dec_point: string, thousands_sep: string) {
        var n = !isFinite(+numberToFormat) ? 0 : +numberToFormat,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
            toFixedFix = function (n: number, prec: number) {
                // Fix for IE parseFloat(0.55).toFixed(0) = 0;
                var k = Math.pow(10, prec);
                return Math.round(n * k) / k;
            },
            s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
    }

}

export default TQGlobals;