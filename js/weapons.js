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

    constructor(id, name, type, depletion, speedPenalty, special, sub, damageValues) {

        this.id = id;
        this.name = name;
        this.type = type;
        this.depletion = depletion;
        this.speedPenalty = speedPenalty;
        this.special = Weapon.getEquippedItem(special, specials.selectableSpecials);
        this.sub = Weapon.getEquippedItem(sub, subweapons.selectableSubs);
        this.damageValues = damageValues;
    }

}

class WeaponSet {

    constructor(weaponList) {
        for (let weapon of weaponList) {
            this[utils.camelise(utils.rmChars(weapon.name))] = new Weapon(
                weapon.id,
                weapon.name,
                weapon.type,
                weapon.depletion,
                weapon.speedPenalty,
                weapon.special,
                weapon.sub,
                weapon.damageValues
            );
        }
    }

}

var selectableWeapons = new WeaponSet(data.weapons);

exports.selectableWeapons = selectableWeapons;