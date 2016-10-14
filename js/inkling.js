var fs = require('fs');
var weapons = require("./weapons.js");
var stats = require("./stats.js");

class Inkling {

    constructor() {

        this.main_abilities = [];
        this.sub_abilities = [];
        this.weapon = weapons.selectableWeapons.splattershot;
        this.stats = new stats.StatSet(this);

    }

    save(fileName) {
        let jsonString = JSON.stringify(
            {
                main_abilities: this.main_abilities,
                sub_abilities: this.sub_abilities,
                weapon: this.weapon,
                stats: this.stats
            }
        );
        fs.writeFileSync('../inklings/' + fileName, jsonString);
    }

    load(fileName) {
        let inklingData = JSON.parse(fs.readFileSync('../inklings/' + fileName, 'utf8'));
        this.main_abilities = inklingData.main_abilities;
        this.sub_abilities = inklingData.sub_abilities;
        this.weapon = inklingData.weapon;
        this.stats = inklingData.stats;
    }

    addMainAbility(ability) {
        this.main_abilities.push(ability);
        while (this.main_abilities.length > 3) {
            this.main_abilities.shift();
        }
    }

    addSubAbility(ability) {
        this.sub_abilities.push(ability);
        while (this.sub_abilities.length > 12) {
            this.sub_abilities.shift();
        }
    }

    changeWeapon(weapon) {
        this.weapon = weapon;
    }

    _hasAbility(abilityName) {
        let result = false;
        for (let item of this.main_abilities) {
            if (item.name === abilityName) {
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

exports.Inkling = Inkling;