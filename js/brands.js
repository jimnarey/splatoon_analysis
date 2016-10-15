var data  = require("./data");
var itemBase = require("./itembase");
var abilities = require("./abilities");
var set = require("./set");

class Brand extends itemBase.ItemBase {

    constructor(brandObj) {
        super(brandObj);
        
        this.common = itemBase.ItemBase.getEquippedItem(this.common, abilities.selectableAbilities);
        this.rare = itemBase.ItemBase.getEquippedItem(this.rare, abilities.selectableAbilities);
    }
}

class BrandSet extends set.Set {

    constructor(brandList) {

        super(brandList, Brand);
    }
}

var brands = new BrandSet(data.brands);

exports.brands = brands;
