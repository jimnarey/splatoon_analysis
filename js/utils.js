/**
 * Created by jimnarey on 11/10/16.
 */

function safeString(text) {
    text = text.split(" ").join("_");
    text = text.split("-").join("_");
    text = text.split(".").join("");
    return text.toLowerCase();
}

exports.safeString = safeString;