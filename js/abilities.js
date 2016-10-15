let data  = require("./data");
let itemBase = require("./itembase");
var set = require("./set");

class Ability extends itemBase.ItemBase {

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