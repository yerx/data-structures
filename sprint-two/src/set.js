var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {

  for (let i in this._storage) {
    let value = this._storage[i];
    if (value === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  for (let i in this._storage) {
    let value = this._storage[i];
    if (value === item) {
      delete this._storage[i];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 add O(1)
 contains O(n)
 remove O(n)
 */