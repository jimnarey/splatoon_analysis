tObj = {
    a: "boo",
    b: "hiss",
    c: "gob"
};

for (let i in tObj) {

    if (tObj.hasOwnProperty(i)) {
        console.log("x " + i);
        console.log("y " + tObj[i]);
    }

}