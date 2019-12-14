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
// if it's the parent
// console.log('this', this);
// if (this.children === undefined) { // {value: 5}
//   this.children = [{'value': value}]; // {value: 5, children = [{'value': 6}]}
//   // console.log('no kids', this.children);

// Take in a value and add a child to the newTree object
// the value of addChild key is a function that will add a child to newTree directly
treeMethods.addChild = function(value) {
  // access the newTree object children key // Expected Output: newTree.children: [{value: value}]

  // push value into children array
  // if it's the parent
  this.children.push({'value': value}); // tree.children[0].children
  // console.log('this', this);
  // if (this.children === undefined) { // {value: 5}
  //   this.children = [{'value': value}]; // {value: 5, children = [{'value': 6}]}
  //   // console.log('no kids', this.children);
  // } else {
  //   this.children.push({'value': value});
  //   // console.log(this);
  // }
};

// Check the newTree object and see if it contains a child that has the target
treeMethods.contains = function(target) { // Expect target = 3
  var matchesTarget = false;

  if (this.value === target) {
    matchesTarget = true;
    return matchesTarget;
  }


  var findTarget = function(child) { // [{value: 3}]
    // Access newTree.children, which is an array of objects
    for (var i = 0; i < child.length; i++) {
      // if the child of the parent child has a value equal to target, return true
      if (child[i].value === target) { // newTree.children[1].value === target | 4 === 3
        matchesTarget = true;
      }
      if (child[i].children !== undefined) { // newTree.children[1].children === [{},{}]
        // does newTree.child
        return findTarget(child[i].children); // [{},{}]
      }
    }

  };

  findTarget(this.children);

  return matchesTarget;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
