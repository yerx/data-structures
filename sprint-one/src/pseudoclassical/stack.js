var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // this = Object.create(Stack.prototype);
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.push = function(value) {
  // increment the value of this.counter by 1
  this.counter++; // counter = 1
  // within storage, create a key-value pair {1: 'a'}
  this.storage[this.counter] = value;
};

Stack.prototype.pop = function() {
  if (this.counter > 0) {
    var lastItem = this.storage[this.counter]; // if push has been invoked once: output: 'a'
    delete this.storage[this.counter]; // if push has been invoked once: {1: 'a'} no longer exists

    this.counter--; // Output: 1-1 = 0

    return lastItem;
  }
  // If pop is the first function invoked,
  // counter starts at 0, and we don't want it to go to a negative, so we do nothing
  // and pop returns undefined
};

Stack.prototype.size = function() {
  return this.counter;
};

var plates = new Stack();






