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
  var matchesTarget = false;

  var findTarget = function(child) {
    if (child.value === target) {
      matchesTarget = true;
      return matchesTarget;
    }
    for (var i = 0; i < child.children.length; i++) {
      findTarget(child.children[i]);
    }
  };

  findTarget(this);

  return matchesTarget;

};


/*
 * Complexity: What is the time complexity of the above functions?
  addChild is O(1) constant time
  contains is O(n) linear
 */
