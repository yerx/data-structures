var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var counter = 0;
  var firstItem = 1;
  var finalSize = 0;

  // example: {0: value1, 1: value2} | counter = 0 | counter++ | Output counter = 1
  // someInstance.dequeue(delete obj[0]) Output {1: value2} | var initial = counter | initial-- | initial = 1 - 1 = 0
  // someInstance.size return initial

  // Implement the methods below

  // add to the back of the obj
  someInstance.enqueue = function(value) {
    // Add to queue number
    counter++;
    // Add key-value pair key represents where are you in line; and value is your 'name'
    storage[counter] = value;
    // Increase the size to our queue
    finalSize++;
  };

  // remove the first key value pair in object

  someInstance.dequeue = function() {
    // If there is no queue, don't do anything. But if there is, do the following:
    if (finalSize > 0) {
      var lastQueue = storage[firstItem];
      delete storage[firstItem];
      firstItem++;
      finalSize--;
      return lastQueue;
    }
  };

  // return the length of the obj
  someInstance.size = function() {
    return finalSize;
  };

  return someInstance;
};

//HI