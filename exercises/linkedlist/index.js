// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// ========================================================================================================================
class Node {
  constructor(data, next = null) {
    (this.data = data), (this.next = next);
  }
}

// ========================================================================================================================
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
}

// ========================================================================================================================
let n1 = new Node("yolo");
// console.log(n);

// let n2 = new Node("fomo", n1);
// console.log(n2);

// ------------------------------------------------------------------------------------------------------------------------
const list = new LinkedList(n1);

// list.insertFirst("Friends!");
// list.insertFirst("Romans!");
// list.insertFirst("Countrymen!");
// list.insertFirst("Lend me your ears.");

console.log(list);
console.log(list.size());

// ========================================================================================================================
module.exports = {
  Node,
  LinkedList
};
