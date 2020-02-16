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

const Stack = require("./stack");

class Queue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  add(item) {
    this.stackA.push(item);
  }

  remove() {
    this.transfer(this.stackA, this.stackB);

    //Get the first element to be removed
    const eleToBeRemoved = this.stackB.pop();

    this.transfer(this.stackB, this.stackA);

    return eleToBeRemoved;
  }

  transfer(stackA, stackB) {
    while (stackA.peek()) {
      //While there are elements in the first stack
      stackB.push(stackA.pop());
    }
  }

  peek() {
    this.transfer(this.stackA, this.stackB);

    //Get the first element to be peeked
    const eleToBePeekedOn = this.stackB.peek();

    this.transfer(this.stackB, this.stackA);

    return eleToBePeekedOn;
  }
}

module.exports = Queue;
