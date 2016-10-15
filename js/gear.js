let data  = require("./data");
let splatoonObject = require("./splatoon_object");
var abilities = require("./abilities");
var set = require("./set");

class Gear extends splatoonObject.SplatoonObject {

    constructor(gearObj) {
        super(gearObj);

        this.ability = splatoonObject.SplatoonObject.getEquippedItem(this.ability, abilities.selectableAbilities);
        this.high = splatoonObject.SplatoonObject.getEquippedItem(this.high, abilities.selectableAbilities);
        this.low = splatoonObject.SplatoonObject.getEquippedItem(this.low, abilities.selectableAbilities);
    }
}

class GearSet extends set.Set {

    constructor(gearList) {

        super(gearList, Gear);
    }
}

var gear = new GearSet(data.gear);

exports.gear = gear;
