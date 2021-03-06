﻿
interface Settings {
    chatToken: string,
    maxChatLines: number,
    minFilterItemNameLength: number,
    classes: { [classCode: string]: string },
    races: { [raceCode: string]: string },
    aliases: { [aliasText: string]: string },

    // set in client script
    aliasesByItemName: { [itemName: string]: Array<string> }
}

export default Settings;