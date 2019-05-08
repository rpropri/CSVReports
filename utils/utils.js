const fs = require('fs');
const path = require('path');

exports.csvify = function(string) {
  string = string.replace('input=', '');
  string = string.replace(';', '');
  let obj = JSON.parse(string);
  return flatten(obj);
};

let string = '';

const flatten = (obj) => {

  // get key names for columns
  for (let key in obj) {
    if (key !== 'children') {
      string += `${key},`;
    }
  }
  string = cleanComma(string) + '\r\n';
  // console.log('string in flatten ', string);
  pullFromTree(obj);
  return fs.writeFileSync(path.join(__dirname, 'data.txt'), string);
};

const pullFromTree = (obj) => {
  console.log('string passed in ', string);
  for (let key in obj) {
    if (key !== 'children') {
      string += `${obj[key]},`;
    }
  }
  string = cleanComma(string) + '\r\n';
  if (obj.children.length === 0) {
    return string;
  }
  for (let i = 0; i < obj.children.length; i++) {
    pullFromTree(obj.children[i]);
  }
};


const cleanComma = (string) => {
  return string.slice(0, string.length - 1);
};
