const DB = require('./data');
const result = [];

const numCheck = function(_item) {
    if (typeof _item === 'number') {
        result.push(_item);
    };
};

const extendData = function(_object) {
    for(let key in _object) {
        numCheck(_object[key]);
    };
};

for (let key in DB.data) {
    
    if (typeof DB.data[key] == 'object'){
        extendData(DB.data[key]);
    } else {
        numCheck(DB.data[key]);
    };
};

console.log(result);

while(DB.data[key] != 'object'){
    
}
