var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};

  _.extend(newStack, stackMethods);

  counter = 0;

  return newStack;
};

var stackMethods = {};

var counter = 0;

stackMethods.push = function(value) {
  this[counter] = value;
  counter++;
  console.log('push', counter);
};

stackMethods.pop = function() {
  var lastItem = this[counter - 1];
  delete this[counter - 1];
  counter--;
  console.log('pop', counter);
  console.log('lastItem', lastItem);
  return lastItem;
};

stackMethods.size = function() {
  if (counter <= 0) {
    return 0;
  } else {
    console.log('final', counter);
    return counter;
  }
};

//Stack()