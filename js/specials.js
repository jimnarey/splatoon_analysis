// let utils = require("./utils");
let data  = require("./data");
let splatoonObject = require("./splatoon_object");
var set = require("./set");

class Special extends splatoonObject.SplatoonObject {
    
    constructor(specialObj) {
        super(specialObj);
    }
    
}

class SpecialSet extends set.Set {

    constructor(specialList) {

        super(specialList, Special);
    }
}

var selectableSpecials = new SpecialSet(data.specials);

exports.selectableSpecials = selectableSpecials;