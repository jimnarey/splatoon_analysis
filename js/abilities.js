const abilities = [{
    id: 1,
    name: 'Comeback',
    info: 'Comeback',
    stackable: false,
    slot: 'Headgear',
    affects: 'nothing',
    effects: 'Boosts Stats on Respawn'
}, {
    id: 2,
    name: 'Tenacity',
    info: 'Fills the special gauge automatically if your team has fewer active players than the enemy',
    stackable: false,
    slot: 'Headgear',
    affects: 'nothing',
    effects: 'Fills the special gauge automatically if your team has fewer active players than the enemy'
}, {
    id: 3,
    name: 'Opening Gambit',
    info: 'Opening Gambit',
    stackable: false,
    slot: 'Headgear',
    affects: 'nothing',
    effects: 'Boosts  your speed/both Inkling and squid form for the first 30 seconds of battle',
}, {
    id: 4,
    name: 'Last-Ditch Effort',
    info: 'The Last-Ditch Effort ability boosts ink recovery rate and weapon ink efficiency for the last 30 seconds of battle.',
    stackable: false,
    slot: 'Headgear',
    affects: 'nothing',
    effects: 'Boosts ink recovery rate and weapon ink efficiency for the last 30 seconds of battle',
}, {
    id: 5,
    name: 'Recon',
    info: 'Reveals enemy locations on spawn',
    stackable: false,
    slot: 'Clothes',
    affects: 'nothing',
    effects: 'Reveals enemy locations on spawn'
}, {
    id: 6,
    name: 'Ninja Squid',
    info: 'Hides ink movement from enemy team',
    stackable: false,
    slot: 'Clothes',
    effects: 'Hides ink movement from enemy team',
    affects: 'nothing',
    //	negative: true,
}, {
    id: 7,
    name: 'Haunt',
    info: 'Haunt',
    stackable: false,
    slot: 'Clothes',
    affects: 'nothing',
    effects: 'Shows location of enemy who splatted you for 12 secs',
}, {
    id: 8,
    name: 'Cold-Blooded',
    info: 'Cold-Blooded',
    stackable: false,
    slot: 'Clothes',
    affects: 'Echolocator/Haunt Duration',
    effects: 'Shortens the effect of attacks that let enemies determine your position, such as Point Sensors.'
}, {
    id: 9,
    name: 'Bomb Sniffer',
    info: 'Shows location of mines and grenades',
    stackable: false,
    slot: 'Shoes',
    affects: 'nothing',
    effects: 'Shows location of mines and grenades'
}, {
    id: 10,
    name: 'Ink Resistance Up',
    info: 'Ink Resistance Up',
    stackable: false,
    slot: 'Shoes',
    affects: 'nothing',
    effects: 'Increases movement speed on enemy ink',
}, {
    id: 11,
    name: 'Stealth Jump',
    info: 'Stealth Jump',
    stackable: false,
    slot: 'Shoes',
    effects: 'Hides jump location from enemy team',
    affects: 'nothing',
    //	negative: true
}, {
    id: 20,
    name: 'Quick Super Jump',
    info: 'Quick Super Jump',
    stackable: true,
    affects: 'Jump Speed'
}, {
    id: 17,
    name: 'Bomb Range Up',
    info: 'Bomb Range Up',
    stackable: true,
    affects: 'Bomb Throw Range'
}, {
    id: 13,
    name: 'Ink Saver (Main)',
    info: 'Ink Saver (Main)',
    stackable: true,
    affects: 'Ink Usage Main'
}, {
    id: 14,
    name: 'Ink Saver (Sub)',
    info: 'Ink Saver (Sub)',
    stackable: true,
    affects: 'Ink Usage Sub'
}, {
    id: 18,
    name: 'Ink Recovery Up',
    info: 'Ink Recovery Up',
    stackable: true,
    affects: 'Ink Recovery'
}, {
    id: 15,
    name: 'Damage Up',
    info: 'Damage Up',
    stackable: true,
    affects: 'Damage'
}, {
    id: 16,
    name: 'Defense Up',
    info: 'Defense Up',
    stackable: true,
    affects: 'Damage Taken'
}, {
    id: 21,
    name: 'Run Speed Up',
    info: 'Run Speed Up',
    stackable: true,
    affects: 'Run Speed'
}, {
    id: 24,
    name: 'Swim Speed Up',
    info: 'Swim Speed Up',
    stackable: true,
    affects: 'Swim Speed'
}, {
    id: 22,
    name: 'Special Duration Up',
    info: 'Special Duration Up',
    stackable: true,
    affects: 'Special Time'
}, {
    id: 12,
    name: 'Special Charge Up',
    info: 'Special Charge Up',
    stackable: true,
    affects: 'Special Charge'
}, {
    id: 23,
    name: 'Special Saver',
    info: 'Special Saver',
    stackable: true,
    affects: 'Special Save'
}, {
    id: 19,
    name: 'Quick Respawn',
    info: 'Quick Respawn',
    stackable: true,
    affects: 'Respawn Rate'
}];

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

function createAbilities() {

    let abilityCollection = {};

    for (let item of abilities) {

        let slot = null;
        let effects = null;
        let fieldName = item.name.replace(" ", "_").toLowerCase();

        if (item.hasOwnProperty('slot')) {
            slot = item.slot;
        }

        if (item.hasOwnProperty('effects')) {
            slot = item.slot;
        }

        abilityCollection[fieldName] = new Ability(
            item.id,
            item.name,
            item.info,
            item.stackable,
            item.affects,
            effects,
            slot);
    }

    return abilityCollection;

}

exports.createAbilities = createAbilities;