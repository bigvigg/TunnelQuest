﻿
interface Settings {
    auctionToken: string,
    maxChatLines: number,
    maxAuctions: number,
    classes: { [classCode: string]: string }
    races: { [raceCode: string]: string }
}

export default Settings;