let utils = require("./utils");
let data  = require("./data");
let itemBase = require("./itembase");

let specials = require("./specials.js");
let subweapons = require("./subweapons.js");

class Weapon extends itemBase.ItemBase {
    
    constructor(weaponObj) {

        super(weaponObj);

        this.special = itemBase.ItemBase.getEquippedItem(this.special, specials.selectableSpecials);
        this.sub = itemBase.ItemBase.getEquippedItem(this.sub, subweapons.selectableSubs);
    }

}

class WeaponSet {

    constructor(weaponList) {
        for (let weaponObj of weaponList) {
            this[utils.camelise(utils.rmChars(weaponObj.name))] = new Weapon(weaponObj);
        }
    }

}

var selectableWeapons = new WeaponSet(data.weapons);

exports.selectableWeapons = selectableWeapons;