/**
 * Created by jimnarey on 14/10/16.
 */

// var weapons = require("./weapons.js");
let fs = require('fs');

let weapons = JSON.parse(fs.readFileSync('../json/weapons.json', 'utf8'));

// var wps = weapons.selectableWeapons;

// This looks wrong, but worked anyway due to recursion
// Should for..in have worked with a list? Check
// See gear clean for correct implementation
function cleanData(listOfObjs) {
    for (let prop in listOfObjs) {
        if (listOfObjs.hasOwnProperty(prop)) {
            if (listOfObjs[prop] === Object(listOfObjs[prop])) {
                cleanData(listOfObjs[prop]);
            } else if (listOfObjs[prop] === "") {
                listOfObjs[prop] = null;

            } else if (!isNaN(listOfObjs[prop])) {
                listOfObjs[prop] = parseFloat(listOfObjs[prop])
            }
        }
    }
}

cleanData(weapons);

let jsonString = JSON.stringify(weapons);
fs.writeFileSync('../json/weapons-x.json', jsonString);