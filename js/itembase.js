let utils = require("./utils");

class ItemBase {

    constructor(itemObj) {
        utils.copyProps(itemObj, this);
    }

}

exports.ItemBase = ItemBase;