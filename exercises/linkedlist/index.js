// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    (this.data = data), (this.next = next);
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
}

// ========================================================================================================================
let n = new Node("yolo");
// console.log(n);

let n2 = new Node("fomo", n);
// console.log(n2);

// ------------------------------------------------------------------------------------------------------------------------
const list = new LinkedList();

list.insertFirst("My friends!");
list.insertFirst("Countrymen!");
console.log(list);

// ========================================================================================================================
module.exports = {
  Node,
  LinkedList
};
