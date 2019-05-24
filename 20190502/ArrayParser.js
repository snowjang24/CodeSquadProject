const str = "[123, 22, 33]";

const tokenizer = function() {};

const ArrayParser = function(str) {
  let result = {};
  return result;
};

const result = ArrayParser(str);
console.log(JSON.stringify(result, null, 2));

// { type: 'array',
//   child:
//    [ { type: 'number', value: '123', child: [] },
//      { type: 'number', value: '22', child: [] },
//      { type: 'number', value: '33', child: [] }
//     ]
// }
