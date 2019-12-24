var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};


BinarySearchTree.prototype.insert = function(value) {
  // if the value < this.value
  if (value < this.value) { // value = 2, this.value = 5
    // if this.left = null, add a new tree to the left
    if (this.left === null) { // this.left = null
      this.left = new BinarySearchTree(value); // this.left = {value: 2, this.left = null, this.right = null}
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {

  var findValue = function(node) {
    if (value === node.value) {
      return true;
    }
    // if the value is less than the node.value, check left
    if (value < node.value) {
      if (node.left === null) {
        return false;
      } else {
        if (value === node.left.value) {
          return true;
        }
        return findValue(node.right);
      }
    }
    // if value > value, check right
    if (value > node.value) { // value = 8, node.value = 7
      if (node.right === null) { // value = 8, node.right.value = null
        return false;
      } else {
        if (value === node.right.value) {
          return true;
        }
        return findValue(node.right);
      }
    }
  };
  return findValue(this);
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  // apply the callback on each node.value
  callback(this.value);
  // check the left
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  // check the right
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 insert, contains, and callback are O(n)
 */
