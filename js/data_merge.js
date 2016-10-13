let fs = require('fs');
let parse = require('babyparse');

let csvCols = {

    "Name": 0,
    "Range": 1,
    "Min Seconds to Splat": 2,
    "Max Seconds to Splat": 3,
    "Fire Rate": 4,
    "Consumption": 5,
    "Min Mobility": 6,
    "Max Mobility": 7,
    "Painting Rate": 8,
    "Painting Rate Roll": 9,
    "Bullets per Charge": 10,
    "Charge Speed": 11

};

function nameLengthCompare(a,b) {
    if (a[0].length < b[0].length)
        return 1;
    if (a[0].length > b[0].length)
        return -1;
    return 0;
}

function addFields(weapon, row) {

    weapon["Range"] = row[csvCols["Range"]];
    weapon["Fire Rate"] = row[csvCols["Fire Rate"]];
    weapon["Consumption"] = row[csvCols["Consumption"]];
    weapon["Min Mobility"] = row[csvCols["Min Mobility"]];
    weapon["Max Mobility"] = row[csvCols["Max Mobility"]];
    weapon["Painting Rate"] = row[csvCols["Painting Rate"]];
    weapon["Painting Rate Roll"] = row[csvCols["Painting Rate Roll"]];
    weapon["Bullets per Charge"] = row[csvCols["Bullets per Charge"]];
    weapon["Charge Speed"] = row[csvCols["Charge Speed"]];
    weapon.damageValues["Min Seconds to Splat"] = row[csvCols["Min Seconds to Splat"]];
    weapon.damageValues["Max Seconds to Splat"] = row[csvCols["Max Seconds to Splat"]];
}

let weapons = JSON.parse(fs.readFileSync('../json/weapons.json', 'utf8'));
let csvString = fs.readFileSync('../csv/weapons_20161012.csv', 'utf8');

let wcsv = parse.parse(csvString);
wcsv.data.shift();
wcsv.data.sort(nameLengthCompare);

for (let weapon of weapons.weapons) {

    for (let row of wcsv.data) {

        if (weapon.name.toLowerCase().includes(row[0].toLowerCase())) {

            addFields(weapon, row);
            break;

        }

    }

}
