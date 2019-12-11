var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // create a counter variable, and start it at 0
  var counter = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    // add to storage
    // [counter] = value. Output: {0: value, 1: value1}
    someInstance[counter] = value;
    // counter++;
    counter++;
  };


  // deletes the last item
  someInstance.pop = function() {
    var lastItem = someInstance[counter - 1]; //someInstance[1]
    // delete storage[counter]
    delete someInstance[counter - 1];
    // counter--
    counter--;
    // return lastItem
    return lastItem;
  };

  someInstance.size = function() {
    // if the stack is empty
    if (counter <= 0) {
      return 0;
    } else if (counter > 0) {
    // otherwise,
      return counter;
    }
  };
  return someInstance;

};
