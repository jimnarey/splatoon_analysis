/**
 * Created by jimnarey on 11/10/16.
 */

function safeString(text) {
    text = text.split(" ").join("_");
    text = text.split("-").join("_");
    text = text.split(".").join("");
    text = text.split("'").join("");
    return text.toLowerCase();
}


function rmChars(text) {
    text = text.split("-").join("");
    text = text.split(".").join("");
    text = text.split("'").join("");
    return text;
}


function camelise(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
}

exports.rmChars = rmChars;
exports.camelise = camelise;
exports.safeString = safeString;