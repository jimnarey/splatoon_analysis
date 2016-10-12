let utils = require("./utils");
let data  = require("./data");

class Subweapon {

    constructor(name, ink, damageValues) {
        this.name = name;
        this.ink = ink;
        this.damageValues = damageValues;
    }

}

class SubweaponSet {

    constructor(subweaponList) {
        for (let subweapon of subweaponList) {
            this[utils.safeString(subweapon.name)] = new Subweapon(
                subweapon.name,
                subweapon.ink,
                subweapon.damageValues
            );
        }
    }
}

var selectableSubs = new SubweaponSet(data.subweapons);

exports.selectableSubs = selectableSubs;