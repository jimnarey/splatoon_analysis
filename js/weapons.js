let utils = require("./utils");
let data  = require("./data");

class Weapon {

    constructor(id, name, type, depletion, speedPenalty, special, sub, damageValues) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.depletion = depletion;
        this.speedPenalty = speedPenalty;
        this.special = special;
        this.sub = sub;
        this.damageValues = damageValues;
    }

}

class Weapons {

    constructor(weaponList) {
        for (let weapon of weaponList) {
            // let fieldName = weapon.name.split(" ").join("_").toLowerCase();
            this[utils.safeString(weapon.name)] = new Weapon(
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

var weapons = new Weapons(data.weapons.weapons);

exports.weapons = weapons;