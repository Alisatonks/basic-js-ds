const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor()
  {
    this.numbers = [];
    }
  push(element) {
    this.numbers.push(element);
  }

  pop() {
    if (this.numbers.length === 0) {
        return;
    }
    return this.numbers.pop();
  }

  peek() {
    if (this.numbers.length === 0) {
      return;
  }
    return this.numbers[this.numbers.length - 1];
  }
}

module.exports = {
  Stack
};
