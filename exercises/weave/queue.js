// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

// ========================================================================================================================
// MY SOLUTION

// class
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class>
class Queue {
  constructor() {
    this.data = [];
  }

  // Array.prototype.unshift()
  // <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift>
  add(record) {
    this.data.unshift(record);
  }

  // Array.prototype.pop()
  // <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop>
  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

// class Queue {
//   constructor() {
//     this.data = [];
//   }

//   add(record) {
//     this.data.unshift(record);
//   }

//   remove() {
//     return this.data.pop();
//   }
// }

module.exports = Queue;
