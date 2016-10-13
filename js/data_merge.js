let fs = require('fs');
let parse = require('babyparse');

var weapons = JSON.parse(fs.readFileSync('../json/weapons.json', 'utf8'));
var csvString = fs.readFileSync('../csv/weapons.csv', 'utf8');

var wcsv = parse.parse(csvString);
