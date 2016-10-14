let utils = require("./utils");
let data  = require("./data");
let itemBase = require("./itembase");

class Subweapon extends itemBase.ItemBase {

    constructor(subWeaponObj) {
        super(subWeaponObj);
    }

}

class SubweaponSet {

    constructor(subWeaponList) {
        for (let subWeaponObj of subWeaponList) {
            this[utils.camelise(utils.rmChars(subWeaponObj.name))] = new Subweapon(subWeaponObj);
        }
    }
}

var selectableSubs = new SubweaponSet(data.subweapons);

exports.selectableSubs = selectableSubs;