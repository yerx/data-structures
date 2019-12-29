var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  // an array containing a number of sub-trees
  newTree.children = []; // original code: newTree.children = null;

  // copy treeMethod properties into newTree
  _.extend(newTree, treeMethods); // when run, it will copy treeMethods to newTree

  return newTree; // Current Output: {value: value, children: null}
};

var treeMethods = {};

// Take in a value and add a child to the newTree object
// the value of addChild key is a function that will add a child to newTree directly
treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

// Check the newTree object and see if it contains a child that has the target
treeMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  }

  for (let i = 0; i < this.children.length; i++) {
    let childTree = this.children[i];
    if (childTree.contains(target)) {
      return true;
    }
  }

  // for ... in loop also works but for ... of loop doesn't
  // for (var i in this.children) {
  //   let childTree = this.children[i];
  //   if (childTree.contains(target)) {
  //     return true;
  //   }
  // }

  return false;

};


/*
 * Complexity: What is the time complexity of the above functions?
  addChild is O(1) constant time
  contains is O(n) linear
 */
