// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// FIFO
class Queue {
    constructor(stack1, stack2){
        this.firstStack = stack1.data
        this.secondStack = stack2.data
    }

    add (element) {
        
    }
    remove () {}
    peek () {}
}

module.exports = Queue;
