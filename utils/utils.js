require('fs');

exports.csvify = function(string) {
  // let rawText = json.split('"');
  // jsonB = json.slice(6, json.length - 1);
  string = string.replace('input=', '');
  string = string.replace(';', '');
  let obj = JSON.parse(string);
  flatten(obj);
};

const flatten = (obj) => {
  console.log(obj.children);
  return obj;
};