
var abilities = require("./abilities");
var weapons = require("./weapons.js");
var specials = require("./specials");
var subweapons = require("./subweapons");
var stats = require("./stats.js");


class Inkling {

    constructor() {

        this.main_abilities = [];
        this.sub_abilities = [];
        this.weapon = null;
        this.stats = stats.createStats(this);


    }

    addMainAbility(ability) {
        this.main_abilities.push(ability);
    }

    addSubAbility(ability) {
        this.sub_abilities.push(ability);
    }

    changeWeapon(weapon) {
        this.weapon = weapon;
    }

    _hasAbility(abilityString) {
        let result = false;
        for (let item of this.main_abilities) {
            if (item.name === abilityString) {
                result = true;
            }
        }
        return result;
    }

    hasStealth() {
        return this._hasAbility("Stealth Jump");
    }

    hasNinja() {
        return this._hasAbility("Ninja Squid");
    }

    hasPenalty() {
        if (this.weapon) {
            return this.weapon.speedPenalty;
        }
        return false;
    }

}

exports.inkling = Inkling;