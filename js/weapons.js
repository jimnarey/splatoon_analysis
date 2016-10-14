let utils = require("./utils");
let data  = require("./data");

let specials = require("./specials.js");
let subweapons = require("./subweapons.js");

class Weapon {

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

        for (let prop in weaponObj) {
            if (weaponObj.hasOwnProperty(prop)) {
                if (prop != 'special' && prop != 'sub') {
                    this[utils.camelise(utils.rmChars(prop))] = weaponObj[prop];
                }
            }

        }
        this.special = Weapon.getEquippedItem(weaponObj.special, specials.selectableSpecials);
        this.sub = Weapon.getEquippedItem(weaponObj.sub, subweapons.selectableSubs);

        // this.id = id;
        // this.name = name;
        // this.type = type;
        // this.depletion = depletion;
        // this.speedPenalty = speedPenalty;
        //
        // this.damageValues = damageValues;
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