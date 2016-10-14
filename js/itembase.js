let utils = require("./utils");

class ItemBase {

    static getEquippedItem(name, selectables) {
        for (let item in selectables) {
            if (selectables.hasOwnProperty(item)) {
                console.log(selectables[item].name);
                if (selectables[item].name === name) {
                    return selectables[item];
                }
            }
        }
    }

    constructor(itemObj) {
        utils.copyProps(itemObj, this);
    }

}

exports.ItemBase = ItemBase;