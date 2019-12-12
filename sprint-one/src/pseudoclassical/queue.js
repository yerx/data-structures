var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = counter;
  counter = 0;
  finalSize = 0;
  firstItem = 0;
};

var counter = 0;
var finalSize = 0;
var firstItem = 0;

Queue.prototype.enqueue = function(value) {
  this[counter] = value;
  counter++;
  finalSize++;
};

Queue.prototype.dequeue = function() {
  var lastQueue = this[firstItem];
  delete this[firstItem];
  firstItem++;
  finalSize--;
  return lastQueue;
};

Queue.prototype.size = function() {
  if (finalSize <= 0) {
    return 0;
  } else {
    return finalSize;
  }
};

var NewQueue = new Queue();


