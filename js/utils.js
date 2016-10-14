/**
 * Created by jimnarey on 11/10/16.
 */

function copyProps(sourceObj, targetObj) {
    for (let prop in sourceObj) {
        if (sourceObj.hasOwnProperty(prop)) {
            if (sourceObj[prop] === Object(sourceObj[prop])) {
                let p = camelise(rmChars(prop));
                targetObj[p] = {};
                copyProps(sourceObj[prop], targetObj[p]);
            } else {

                    targetObj[camelise(rmChars(prop))] = sourceObj[prop];

            }
        }
    }
}

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

exports.copyProps = copyProps;
exports.rmChars = rmChars;
exports.camelise = camelise;
exports.safeString = safeString;