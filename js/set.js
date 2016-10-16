let utils = require("./utils");

class Set {

    constructor(listOfObjs, itemClass) {
        this.itemClass = itemClass;
        for (let item of listOfObjs) {

            // this[utils.camelise(utils.rmChars(item.name))] = new itemClass(item);
            this[utils.camelise(item.name)] = new itemClass(item);
        }
    }

    table(results) {
        let contents = {};
        let i = 0;
        for (let prop in results) {
            // if (results[prop] instanceof this.itemClass) {

            for (let subProp in results[prop]) {

                if (!contents.hasOwnProperty(subProp)) {
                    contents[subProp] = [];

                }
                contents[subProp][i] = results[prop][subProp];

            }
            i++;

            // }
        }
        return contents;
    }

    getFromAll(props) {
        // let results = [];
        // for (let item of Object.keys(this)) {
        //     results.push(item.getProps(props));
        // }
        // return results;
        return this.getFromSelected()
    }

    getFromSelected(names, props) {

        if (names === undefined || !(names instanceof Array) || names.length === 0) {
            names = Object.keys(this);
        }
        console.log(this);
        console.log(names);
        props = props || false;

        let results = [];

        // if (names != undefined && names instanceof Array) {
            for (let name of names) {
                try {
                    results.push(this[name].getProps(props));
                } catch(err) {
                    results.push('error:' + err);
                }
            }
        // } else {
        //     for (let name of names) {
        //         results[name] = this[name].getProps(props);
        //     }
        // }

        return results
    }
}

exports.Set = Set;