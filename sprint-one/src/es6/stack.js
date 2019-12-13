class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.counter = 0;
    this.storage = {};
  }

  push(value) {
    // increment the counter
    this.counter++;
    // add key-value pair to storage obj
    this.storage[this.counter] = value;
    // console.log('this', this[this.counter]);
    // console.log('push', this.counter);
    // console.log('StackCounter', Stack.counter);
  }

  pop() {
    if (this.counter > 0) {
      var lastItem = this.storage[this.counter];
      delete this.storage[this.counter];
      this.counter--;
      // console.log('pop', this.counter);
      // console.log('lastItem', lastItem);
      return lastItem;
    }
  }

  size() {
    return this.counter;
  }

}

var Plates = new Stack();