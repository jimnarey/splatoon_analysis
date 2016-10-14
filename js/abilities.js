var utils = require("./utils");
let data  = require("./data");
let itemBase = require("./itembase");

class Ability extends itemBase.ItemBase {

    constructor(abilityObj) {
        super(abilityObj);
    }
}

class AbilitySet {

    constructor(abilityList) {

        for (let abilityObj of abilityList) {

            this[utils.camelise(utils.rmChars(abilityObj.name))] = new Ability(abilityObj);
        }
    }
}

var selectableAbilities = new AbilitySet(data.abilities);

exports.selectableAbilities = selectableAbilities;