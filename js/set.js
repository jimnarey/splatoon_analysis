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

                for (let subProp in this[prop]) {

                    if (!contents.hasOwnProperty(subProp)) {
                        contents[subProp] = [];
                        for (let j = 0; j < i; j++) {
                            contents[subProp][j] = null;
                        }
                    }
                    contents[subProp][i] = this[prop][subProp];

                }
                i++;

            }
        }
        return contents;
    }

}

exports.Set = Set;