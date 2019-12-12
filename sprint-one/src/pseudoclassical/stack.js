var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this;
  counter = 0;
};

var counter = 0;

Stack.prototype.push = function(value) {
  this[counter] = value;
  counter++;
  console.log('push', counter);
};

Stack.prototype.pop = function() {
  var lastItem = this[counter - 1];
  delete this[counter - 1];
  counter--;
  console.log('pop', counter);
  console.log('lastItem', lastItem);
  return lastItem;
};

Stack.prototype.size = function() {
  if (counter <= 0) {
    return 0;
  } else {
    console.log('final', counter);
    return counter;
  }
};

var NewStack = new Stack();






