let data  = require("./data");
let itemBase = require("./itembase");
var abilities = require("./abilities");
var set = require("./set");

class Gear extends itemBase.ItemBase {

    constructor(gearObj) {
        super(gearObj);

        this.ability = itemBase.ItemBase.getEquippedItem(this.ability, abilities.selectableAbilities);
        this.high = itemBase.ItemBase.getEquippedItem(this.high, abilities.selectableAbilities);
        this.low = itemBase.ItemBase.getEquippedItem(this.low, abilities.selectableAbilities);
    }
}

class GearSet extends set.Set {

    constructor(gearList) {

        super(gearList, Gear);
    }
}

var gear = new GearSet(data.gear);

exports.gear = gear;
