// let utils = require("./utils");
let data  = require("./data");
let itemBase = require("./itembase");
var set = require("./set");

class Special extends itemBase.ItemBase {
    
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