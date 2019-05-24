class Stack {
    constructor(size) {
        this._stack = stack;
        this._stack.length = size;
        this.top = 0;
        this.size = size;
    }

    push(item) {
        this.top += 1;
        return this._stack.push(item)
    }
    pop() {
        this.top -= 1;
        return this._stack.pop()
    }
    size() {
        return this._stack.length
    }
    peek() {
        return this._stack[this.top]
    }   
    isEmpty() {
        if (this.top === -1) return true
        return false
    }
}

let stackArr = [];
const stack = new Stack(stackArr);

console.log(stack.isEmpty());
console.log(stack.push(1));
console.log(stack.isEmpty());


