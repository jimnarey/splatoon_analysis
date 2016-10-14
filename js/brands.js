var utils = require("./utils");
let data  = require("./data");
let itemBase = require("./itembase");
var abilities = require("./abilities");

class Brand extends itemBase.ItemBase {

    constructor(brandObj) {
        super(brandObj);
        
        this.common = itemBase.ItemBase.getEquippedItem(this.common, abilities.selectableAbilities);
        this.rare = itemBase.ItemBase.getEquippedItem(this.rare, abilities.selectableAbilities);
    }
}

class BrandSet {

    constructor(brandList) {

        for (let brandObj of brandList) {

            this[utils.camelise(utils.rmChars(brandObj.name))] = new Brand(brandObj);
        }
    }
}

var brands = new BrandSet(data.brands);

exports.brands = brands;
