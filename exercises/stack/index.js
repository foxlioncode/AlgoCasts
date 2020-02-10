// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
  constructor() {
    this.data = [];
  }
  push(record) {
    console.log("push");
    // this.data.unshift(record);
    this.data.push(record);
  }
  pop() {
    console.log("pop");
    // return this.data.shift();
    return this.data.pop();
  }
  peek() {
    console.log("peek");
    // return this.data[0];
    return this.data[this.data.length - 1];
  }
}

let myStack = new Stack();

module.exports = Stack;
