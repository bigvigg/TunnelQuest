﻿<style>
    .tqFilterItemsSearchResultView {
        display: table-row;
    }

    .tqFilterItemsSearchResultView > span {
        display: table-cell;
    }

    .tqFilterItemsSearchResultView > span:nth-child(2) {
        text-align: center;
    }

</style>

<template>
    <div class="tqFilterItemsSearchResultView">
        <span>
            <item-link :itemName="result.itemName" :aliasText="result.aliasText" :isKnown="result.isKnownItem"></item-link>
        </span>
        <span>
            <span v-if="result.aliasText">
                (aka <item-link :itemName="result.itemName" :isKnown="result.isKnownItem"></item-link>)
            </span>
            <span>
                <input type="button" v-if="showAddButton" value="Add to Filter" @click="onAddClicked" />
                <input type="button" v-if="!showAddButton" value="Remove from Filter" @click="onRemoveClicked" />
            </span>
        </span>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    import Filter from "../../interfaces/Filter";
    import FilterItemSearchResult from "../../interfaces/FilterItemSearchResult";

    import TQGlobals from "../../classes/TQGlobals";

    import ItemLink from "../ItemLink.vue";

    export default Vue.extend({

        props: {
            filter: {
                type: Object as () => Filter,
                required: true
            },
            result: {
                type: Object as () => FilterItemSearchResult,
                required: true
            }
        },

        data: function () {
            return {
                showAddButton: true,
                filterItemNames: new Array<string>()
            }
        },

        watch: {
            filterItemNames: function (newValue, oldValue) {
                this.showAddButton = (this.filter.settings.items.names.indexOf(this.result.itemName) < 0);
            }
        },

        mounted: function () {
            this.filterItemNames = this.filter.settings.items.names;
        },

        methods: {
            onAddClicked: function () {
                if (this.filter.settings.items.names.indexOf(this.result.itemName) < 0) {
                    this.filter.settings.items.names.push(this.result.itemName);
                    this.filter.metaData.itemIsKnown[this.result.itemName] = this.result.isKnownItem;
                    TQGlobals.filterManager.saveUserFilters();
                    this.$emit("item-added-to-filter")
                }
            },

            onRemoveClicked: function () {
                let index = this.filter.settings.items.names.indexOf(this.result.itemName);
                if (index >= 0) {
                    this.filter.settings.items.names.splice(index, 1);
                    delete this.filter.metaData.itemIsKnown[this.result.itemName];
                    TQGlobals.filterManager.saveUserFilters();
                }
            },

        },

        components: {
            ItemLink
        }
    });
</script>
