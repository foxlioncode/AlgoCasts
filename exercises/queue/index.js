// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// ========================================================================================================================
// MY SOLUTION
// - You are essentially creating a class of queue that only has two methods (unshift(), and pop()).
// - class
// - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class>

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}

// ------------------------------------------------------------------------------------------------------------------------
module.exports = Queue;
