
// var gear = require("./gear.js");
let fs = require('fs');

let gear = JSON.parse(fs.readFileSync('../json/gear.json', 'utf8'));

// var wps = gear.selectablegear;

function cleanData(listOfObjs) {
    for (let item of listOfObjs) {

        for (let prop in item) {
            if (item.hasOwnProperty(prop)) {
                if (item[prop] === "low") {
                    item.low = prop;
                    delete(item[prop]);
                } else if (item[prop] === "high") {
                    item.high = prop;
                    delete(item[prop]);
                }
            }

        }
    }
}

cleanData(gear.gear);

let jsonString = JSON.stringify(gear);
fs.writeFileSync('../json/gear-x.json', jsonString);
