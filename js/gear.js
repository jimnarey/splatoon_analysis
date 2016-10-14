var utils = require("./utils");
let data  = require("./data");
let itemBase = require("./itembase");
var abilities = require("./abilities");

class Gear extends itemBase.ItemBase {

    constructor(gearObj) {
        super(gearObj);

        this.ability = itemBase.ItemBase.getEquippedItem(this.ability, abilities.selectableAbilities);
        this.high = itemBase.ItemBase.getEquippedItem(this.high, abilities.selectableAbilities);
        this.low = itemBase.ItemBase.getEquippedItem(this.low, abilities.selectableAbilities);
    }
}

class GearSet {

    constructor(gearList) {

        for (let gearObj of gearList) {

            this[utils.camelise(utils.rmChars(gearObj.name))] = new Gear(gearObj);
        }
    }
}

var gear = new GearSet(data.gear);

exports.gear = gear;
