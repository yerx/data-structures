var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};

  _.extend(newQueue, queueMethods);

  counter = 0;
  finalSize = 0;
  firstItem = 0;

  return newQueue;
};

var queueMethods = {};

var counter = 0;
var finalSize = 0;
var firstItem = 0;

queueMethods.enqueue = function(value) {
  this[counter] = value;
  counter++;
  finalSize++;
};

queueMethods.dequeue = function() {
  var lastQueue = this[firstItem];
  delete this[firstItem];
  firstItem++;
  finalSize--;
  return lastQueue;
};

queueMethods.size = function() {
  if (finalSize <= 0) {
    return 0;
  } else {
    return finalSize;
  }
};



