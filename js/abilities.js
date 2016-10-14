var utils = require("./utils");
let data  = require("./data");

class Ability {

    constructor(id, name, info, stackable, affects, effects, slot) {
        this.id = id;
        this.name = name;
        this.info = info;
        this.stackable = stackable;
        this.affects = affects;
        this.effects = effects;
        this.slot = slot;
    }

}

class AbilitySet {

    constructor(abilityList) {

        for (let item of abilityList) {

            this[utils.camelise(utils.rmChars(item.name))] = new Ability(
                item.id,
                item.name,
                item.info,
                item.stackable,
                item.affects,
                item.effects,
                item.slot);
        }
    }

}

var selectableAbilities = new AbilitySet(data.abilities);

exports.selectableAbilities = selectableAbilities;