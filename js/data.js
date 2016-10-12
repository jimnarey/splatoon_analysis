/**
 * Created by jimnarey on 11/10/16.
 */
let fs = require('fs');

let path = '../json/';

var weapons = JSON.parse(fs.readFileSync(path + 'weapons.json', 'utf8'));
var abilities = JSON.parse(fs.readFileSync(path + 'abilities.json', 'utf8'));
var subweapons = JSON.parse(fs.readFileSync(path + 'subweapons.json', 'utf8'));
var specials = JSON.parse(fs.readFileSync(path + 'specials.json', 'utf8'));
var brands = JSON.parse(fs.readFileSync(path + 'brands.json', 'utf8'));
var gear = JSON.parse(fs.readFileSync(path + 'gear.json', 'utf8'));

exports.weapons = weapons.weapons;
exports.abilities = abilities.abilities;
exports.subweapons = subweapons.subweapons;
exports.specials = specials.specials;
exports.brands = brands.brands;
exports.gear = gear.gear;