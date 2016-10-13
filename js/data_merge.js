let fs = require('fs');
let parse = require('babyparse');

let csvCols = {

    "Name": 1,
    "Range": 2,
    "Damage": 3,
    "Roll Damage": 4,
    "Min Splash Damage": 5,
    "Max Splash Damage": 6,
    "No Charge Damage": 7,
    "Full Charge Damage": 8,
    "Impact": 9,
    "Min Seconds to Splat": 10,
    "Max Seconds to Splat": 11,
    "Fire Rate": 12,
    "Consumption": 13,
    "Min Mobility": 14,
    "Max Mobility": 15,
    "Painting Rate": 16,
    "Painting Rate Roll": 17,
    "Bullets per Charge": 18,
    "Charge Speed": 19

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
    weapon["Impact"] = row[csvCols["Impact"]];
    weapon.damageValues["Roll Damage"] = row[csvCols["Roll Damage"]];
    weapon.damageValues["Min Splash Damage"] = row[csvCols["Min Splash Damage"]];
    weapon.damageValues["Max Splash Damage"] = row[csvCols["Max Splash Damage"]];
    weapon.damageValues["No Charge Damage"] = row[csvCols["No Charge Damage"]];
    weapon.damageValues["Full Charge Damage"] = row[csvCols["Full Charge Damage"]];
    weapon.damageValues["Min Seconds to Splat"] = row[csvCols["Min Seconds to Splat"]];
    weapon.damageValues["Max Seconds to Splat"] = row[csvCols["Max Seconds to Splat"]];
}

let weapons = JSON.parse(fs.readFileSync('../json/weapons.json', 'utf8'));
let csvString = fs.readFileSync('../csv/weapons_20161012.csv', 'utf8');

let wcsv = parse.parse(csvString);
wcsv.data.shift();
wcsv.data.sort(nameLengthCompare);

for (let weapon of weapons.weapons) {
    console.log(weapon.name);

    for (let row of wcsv.data) {
        console.log(row);
        // if (row[0].toLowerCase().includes(weapon.name.toLowerCase())) {
        if (weapon.name.toLowerCase().includes(row[0].toLowerCase())) {
            addFields(weapon, row);
        }

    }

}
