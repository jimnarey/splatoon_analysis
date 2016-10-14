var utils = require("./utils");
let data  = require("./data");
let itemBase = require("./itembase");

class Brand extends itemBase.ItemBase {

    constructor(brandObj) {
        super(brandObj);
    }
}

class BrandSet {

    constructor(brandList) {

        for (let brandObj of brandList) {

            this[utils.camelise(utils.rmChars(brandObj.name))] = new Brand(brandObj);
        }
    }
}

var selectableAbilities = new BrandSet(data.abilities);

exports.selectableAbilities = selectableAbilities;
