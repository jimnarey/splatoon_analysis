let utils = require("./utils");
let data  = require("./data");
let itemBase = require("./itembase");

let specials = require("./specials.js");
let subweapons = require("./subweapons.js");

class Weapon extends itemBase.ItemBase {

    static getEquippedItem(name, selectables) {
        for (let item in selectables) {
            if (selectables.hasOwnProperty(item)) {
                console.log(selectables[item].name);
                if (selectables[item].name === name) {
                    return selectables[item];
                }
            }
        }
    }

    constructor(weaponObj) {

        super(weaponObj);

        this.special = Weapon.getEquippedItem(this.special, specials.selectableSpecials);
        this.sub = Weapon.getEquippedItem(this.sub, subweapons.selectableSubs);
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