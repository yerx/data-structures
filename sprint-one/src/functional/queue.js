var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var counter = 0;
  var firstItem = 0;
  var finalSize = 0;

  // example: {0: value1, 1: value2} | counter = 0 | counter++ | Output counter = 1
  // someInstance.dequeue(delete obj[0]) Output {1: value2} | var initial = counter | initial-- | initial = 1 - 1 = 0
  // someInstance.size return initial

  // Implement the methods below

  // add to the back of the obj
  someInstance.enqueue = function(value) {
    someInstance[counter] = value;
    counter++;
    finalSize++;
  };

  // remove the first key value pair in obj

  someInstance.dequeue = function() {
    var lastQueue = someInstance[firstItem];
    delete someInstance[firstItem];
    firstItem++;
    finalSize--;
    return lastQueue;
  };

  // return the length of the obj
  someInstance.size = function() {
    if (finalSize <= 0) {
      return 0;
    } else {
      return finalSize;
    }
  };

  return someInstance;
};
