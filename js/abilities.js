let data  = require("./data");
let splatoonObject = require("./splatoon_object");
var set = require("./set");

class Ability extends splatoonObject.SplatoonObject {

    constructor(abilityObj) {
        super(abilityObj);
    }
}

class AbilitySet extends set.Set {

    constructor(abilityList) {

        super(abilityList, Ability);
    }
}

var selectableAbilities = new AbilitySet(data.abilities);

exports.selectableAbilities = selectableAbilities;