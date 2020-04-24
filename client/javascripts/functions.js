// jshint esversion: 6

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};

s = "Hello Bro"
let revWords1 = (s) => {
  sArray = s.split(" ");
  sReversed = ""
  for (var i = 0; i < sArray.length; i++){
    word = sArray[i];
    wReversed = "";
    for (var j = word.length-1; j >= 0; j --){
      wReversed = wReversed + word.charAt(j);
    }
    sReversed = sReversed + wReversed + " ";
  }

  return sReversed;
}
console.log(revWords1(s));

s = "Web App Devo"
let revWords2 = (s) => {
  let sArray = s.split(" ");
  let sReversed = ""
  for (var i = 0; i < sArray.length; i++){
    word = sArray[i];
    wReversed = ""
    let letters = word.split("")
    letters.forEach((char) => {
      wReversed = char + wReversed;
      });
    sReversed = sReversed + wReversed + " ";
    }
  return sReversed;
  }
console.log(revWords2(s));

s = "Hello Bro"
let revWords3 = (s) => {
  let sArray = s.split(" ");
  let sReversed = ""
  for (var i = 0; i < sArray.length; i++){
    word = sArray[i];
    wReversed = ""
    let letters = word.split("")
    for (letter of letters) {
      wReversed = letter + wReversed;
      };
    sReversed = sReversed + wReversed + " ";
    }
  return sReversed;
  }
console.log(revWords3(s));
