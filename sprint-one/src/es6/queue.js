class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.callNumber = 0;
    this.storage = {};
    // documents the total quantity of key-value pairs in storage
    this.finalSize = 0;
    // represents the first in queue
    this.firstItem = 1;
  }

  enqueue(value) { // enqueue 'a'
    // increment counter by 1
    this.callNumber++; // callNumber = 1;
    // create key value pair and add to storage
    this.storage[this.callNumber] = value; // OUTPUT storage {1: 'a'}
    // increment finalSize by 1
    this.finalSize++; // finalSize = 1
  }

  dequeue() { // dequeue
    if (this.finalSize > 0) { // finalSize = 1; storage: {1: 'a'}
      var firstInLine = this.storage[this.firstItem]; // storage[1] = 'a'
      delete this.storage[this.firstItem]; // {1: 'a'}
      this.firstItem++; // firstItem = 2
      this.finalSize--; // finalSize = 0
      return firstInLine; // 'a'
    }
  }

  size() {
    return this.finalSize;
  }
}

var Plates = new Queue();



