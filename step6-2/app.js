//app.js
const ArrayParser = require('./ArrayParser');

arrayParser = new ArrayParser();

var str = "['1a3',[null,false,['11',[112233],112],55, '99'],33, true]";

console.log(arrayParser.tokenizer(str));

result = {};
console.log(JSON.stringify(result, null, 2)); 
