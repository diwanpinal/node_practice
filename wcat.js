let fs = require("fs");
//input
inputArr = process.argv.slice(2);
//console.log(inputArr);
//identify -->is it option or file
let optionArr = [];
let fileArr = [];

for (let i = 0; i < inputArr.length; i++) {
    let firstChar = inputArr[i].charAt(0);
    if (firstChar == "-") {
        optionArr.push(inputArr[i]);
        //console.log("it an option");
    } else {
        fileArr.push(inputArr[i]);
        //console.log("is an file");
    }
}

//read
let content = "";
for (let i = 0; i < fileArr.length; i++) {
    //    /buffer
    let bufferContent = fs.readFileSync(fileArr[i]);
    content += bufferContent + "\r\n";
}
//console.log(content);

let contentArr = content.split("\r\n");
//console.log(contentArr);


//-s
let isSPreset = optionArr.includes("-s");
if (isSPreset == true) {
    for (let i = 1; i < contentArr.length; i++) {
        if (contentArr[i] == "" && contentArr[i - 1] == "") {
            contentArr[i] = null;

        } else if (contentArr[i] == "" && contentArr[i - 1] == null) {
            contentArr[i] = null;
        }
    }
    let tempArr = [];

    for (let i = 0; i < contentArr.length; i++) {

        if (contentArr[i] != null) {

            tempArr.push(contentArr[i]);
        }

    }
    contentArr = tempArr;


}
//console.log(contentArr.join("\n"));


//-n
let isNPreset = optionArr.includes("-n");
if (isNPreset == true) {
    for (let i = 1; i < contentArr.length; i++) {
        contentArr[i] = `${i+1} ${contentArr[i]}`;


    }
}
//console.log(contentArr.join("\n"));


//-b
let isBPreset = optionArr.includes("-b");

if (isBPreset == true) {
    let counter = 1;
    for (let i = 1; i < contentArr.length; i++) {
        if (contentArr[i] != "") {
            contentArr[i] = `${counter} ${contentArr[i]}`;
            counter++;

        }


    }
}
console.log(contentArr.join("\n"));