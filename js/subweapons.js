let data  = require("./data");
let splatoonObject = require("./splatoon_object");
var set = require("./set");

class Subweapon extends splatoonObject.SplatoonObject {

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