var data  = require("./data");
var splatoonObject = require("./splatoon_object");
var abilities = require("./abilities");
var set = require("./set");

class Brand extends splatoonObject.SplatoonObject {

    constructor(brandObj) {
        super(brandObj);
        
        this.common = splatoonObject.SplatoonObject.getEquippedItem(this.common, abilities.selectableAbilities);
        this.rare = splatoonObject.SplatoonObject.getEquippedItem(this.rare, abilities.selectableAbilities);
    }
}

class BrandSet extends set.Set {

    constructor(brandList) {

        super(brandList, Brand);
    }
}

var brands = new BrandSet(data.brands);

exports.brands = brands;
