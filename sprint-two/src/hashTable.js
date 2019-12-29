var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // the hashing function will return an index for the bucket that will store the tuple
  var index = getIndexBelowMaxForKey(k, this._limit);

  // create a bucket variable that is equal to the storage[index]
  var bucket = this._storage.get(index);

  // if the bucket does not exist
  if (!bucket) {
    // set the bucket equal []
    bucket = [];
    // add the bucket to storage
    this._storage.set(index, bucket);
  }

  var isFound = false;

  // iterate through the bucket
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    // if the key exists, replace the value
    if (tuple[0] === k) {
      tuple[1] = v;
      isFound = true;
      return;
    }
  }

  // if the tuple does not exist
  if (!isFound) {
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // create a bucket variable that is equal to the storage[index]
  var bucket = this._storage.get(index);

  // if the bucket does not exist, the tuple does not exist
  if (!bucket) {
    return undefined;
  }

  var isFound = false;

  // iterate through the bucket to look for the tuple
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      var value = tuple[1];
      isFound = true;
      return value;
    }
  }

  if (!isFound) {
    return undefined;
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // create a bucket variable that is equal to the storage[index]
  var bucket = this._storage.get(index);

  if (!bucket) {
    return undefined;
  }

  // iterate through the bucket
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      isFound = true;
      bucket.splice(i, 1);
      return tuple[1];
    }
  }

  return undefined;


};



/*
 * Complexity: What is the time complexity of the above functions?
 */
