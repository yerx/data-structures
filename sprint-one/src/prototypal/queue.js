var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);

  newQueue.counter = 0;
  newQueue.finalSize = 0;
  newQueue.firstItem = 1;
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.counter++;
  this.storage[this.counter] = value;
  this.finalSize++;
};

queueMethods.dequeue = function() {
  if (this.finalSize > 0) {
    var lastQueue = this.storage[this.firstItem];
    delete this.storage[this.firstItem];
    this.firstItem++;
    this.finalSize--;
    return lastQueue;
  }

};

queueMethods.size = function() {
  return this.finalSize;
};

// End of Code


