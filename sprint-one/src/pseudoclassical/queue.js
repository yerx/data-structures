var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.callNumber = 0;
  this.storage = {};
  // documents the total quantity of key-value pairs in storage
  this.finalSize = 0;
  // represents the first in queue
  this.firstItem = 1;
};

Queue.prototype.enqueue = function(value) { // enqueue 'a'
  // increment counter by 1
  this.callNumber++; // callNumber = 1;
  // create key value pair and add to storage
  this.storage[this.callNumber] = value; // OUTPUT storage {1: 'a'}
  // increment finalSize by 1
  this.finalSize++; // finalSize = 1
};

Queue.prototype.dequeue = function() { // dequeue
  if (this.finalSize > 0) { // finalSize = 1; storage: {1: 'a'}
    var firstInLine = this.storage[this.firstItem]; // storage[1] = 'a'
    delete this.storage[this.firstItem]; // {1: 'a'}
    this.firstItem++; // firstItem = 2
    this.finalSize--; // finalSize = 0
    return firstInLine; // 'a'
  }

};

Queue.prototype.size = function() {
  return this.finalSize;
};

var plates = new Queue();

// End of Code
