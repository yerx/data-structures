var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // create a counter variable, and start it at 0.
  var counter = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    // increment counter;
    counter++;
    // add to storage [counter] = value. Output: {0: value, 1: value1}
    storage[counter] = value;
  };


  // deletes the last item
  someInstance.pop = function() {
    if (counter > 0) {
      var lastItem = storage[counter]; //someInstance[1]
      // delete storage[counter]
      delete storage[counter];
      // counter--
      counter--;
      // return lastItem
      return lastItem;
    }
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};

//HI