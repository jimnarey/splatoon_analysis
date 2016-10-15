let utils = require("./utils");

class SplatoonObject {

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

    // all() {
    //     let contentsArray = [];
    //     for (let prop in this) {
    //         if (this.hasOwnProperty(prop)) {
    //             contentsArray.push(this[prop]);
    //         }
    //     }
    //     return contentsArray;
    // }

    all() {
        let contents = {};
        for (let prop in this) {
            if (this.hasOwnProperty(prop)) {
                contents[prop] = this[prop];
            }
        }
        return contents;
    }

}

exports.SplatoonObject = SplatoonObject;