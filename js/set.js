let utils = require("./utils");

class Set {

    constructor(listOfObjs, itemClass) {
        this.itemClass = itemClass;
        for (let item of listOfObjs) {

            this[utils.camelise(utils.rmChars(item.name))] = new itemClass(item);
        }
    }

    table() {
        let contents = {};
        let i = 0;
        for (let prop in this) {
            if (this[prop] instanceof this.itemClass) {
                let all = this[prop].all();
                for (let subProp in all) {

                    if (!contents.hasOwnProperty(subProp)) {
                        contents[subProp] = [];

                    }
                    contents[subProp][i] = all[subProp];

                }
                i++;

            }
        }
        return contents;
    }

}

exports.Set = Set;