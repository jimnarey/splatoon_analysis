let utils = require("./utils");

class Set {

    constructor(listOfObjs, itemClass) {

        for (let item of listOfObjs) {

            this[utils.camelise(utils.rmChars(item.name))] = new itemClass(item);
        }
    }

}

exports.Set = Set;