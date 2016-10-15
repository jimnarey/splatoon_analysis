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

    getProps(props) {
        let contents = {};

        if (props != undefined && props instanceof Array) {
            for (let prop of props) {
                try {
                    contents[prop] = this[prop];
                } catch(err) {
                    contents[prop] = 'error:' + err;
                }
            }
        } else {
            for (let prop of props) {
                contents[prop] = this[prop];
            }
        }

        // for (let prop in this) {
        //     if (this.hasOwnProperty(prop)) {
        //
        //         // This is broken
        //         if (columns != undefined) {
        //             if (!utils.contains(columns, prop)) {
        //                 break;
        //             }
        //         }
        //
        //         if (this[prop] instanceof SplatoonObject) {
        //             contents[prop] = this[prop].name;
        //         }
        //         else {
        //             contents[prop] = this[prop];
        //         }
        //     }
        // }
        return contents;
    }

}

exports.SplatoonObject = SplatoonObject;