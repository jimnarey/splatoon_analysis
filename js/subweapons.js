let data  = require("./data");
let itemBase = require("./itembase");
var set = require("./set");

class Subweapon extends itemBase.ItemBase {

    constructor(subWeaponObj) {
        super(subWeaponObj);
    }

}

class SubweaponSet extends set.Set {

    constructor(subweaponList) {

        super(subweaponList, Subweapon);
    }
}

var selectableSubs = new SubweaponSet(data.subweapons);

exports.selectableSubs = selectableSubs;