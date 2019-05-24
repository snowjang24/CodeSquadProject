//ArrayParser.js
module.exports = class ArrayParser {
    constructor(){}
    tokenizer(str){
        const tokenArr = [];
        const stack = [];
        str.forEach((letter)=>{
            if(letter != '['){
                if (letter === ',' || letter === ']'){
                    tokenArr.push(stack);
                }
                stack.push(letter);
            }
        });
        return tokenArr;
    }
    lexer(tokenArr){
        const contextTokenArr = [];
        return contextTokenArr;
    }
    parser(tokenObj){
        const parseTree = {};
        return parseTree;
    }
};