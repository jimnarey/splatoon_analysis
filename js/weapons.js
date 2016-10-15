let data  = require("./data");
let splatoonObject = require("./splatoon_object");
var set = require("./set");

let specials = require("./specials.js");
let subweapons = require("./subweapons.js");

class Weapon extends splatoonObject.SplatoonObject {
    
    constructor(weaponObj) {

        super(weaponObj);

        this.special = splatoonObject.SplatoonObject.getEquippedItem(this.special, specials.selectableSpecials);
        this.sub = splatoonObject.SplatoonObject.getEquippedItem(this.sub, subweapons.selectableSubs);
    }

}

class WeaponSet extends set.Set {

    constructor(weaponList) {

        super(weaponList, Weapon);
    }
}

var selectableWeapons = new WeaponSet(data.weapons);

exports.selectableWeapons = selectableWeapons;