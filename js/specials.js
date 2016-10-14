let utils = require("./utils");
let data  = require("./data");

class Special {
    
    constructor(name, duration, durationCoeff, points) {
        this.name = name;
        this.duration = duration;
        this.durationCoeff = durationCoeff;
        this.points = points;
    }
    
}

class SpecialSet {

    constructor(specialList) {
        for (let special of specialList) {
            this[utils.camelise(utils.rmChars(special.name))] = new Special(
                special.name,
                special.duration,
                special.durationCoeff,
                special.points
            );
        }
    }
}

var selectableSpecials = new SpecialSet(data.specials);

exports.selectableSpecials = selectableSpecials;