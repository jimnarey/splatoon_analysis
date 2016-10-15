let utils = require("./utils");

class SplatoonObject {

    static getEquippedItem(name, selectables) {
        for (let item in selectables) {
            if (selectables.hasOwnProperty(item)) {
                if (selectables[item].name === name) {
                    return selectables[item];
                }
            }
        }
    }

    constructor(itemObj) {
        utils.copyProps(itemObj, this);
    }

    all() {
        let contents = {};
        for (let prop in this) {
            if (this.hasOwnProperty(prop)) {

                if (this[prop] instanceof SplatoonObject) {
                    contents[prop] = this[prop].name;
                }
                else {
                    contents[prop] = this[prop];
                }
            }
        }
        return contents;
    }

}

exports.SplatoonObject = SplatoonObject;