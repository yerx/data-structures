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
  // console.log('this', this);
  // console.log('this kids', this.children);
};

// it('should correctly detect nested children', function() {
//   tree.addChild(5);
//   tree.addChild(6);
//   tree.children[0].addChild(7);
//   tree.children[1].addChild(8);
//   expect(tree.contains(7)).to.equal(true);
//   expect(tree.contains(8)).to.equal(true);
// });

// Check the newTree object and see if it contains a child that has the target
treeMethods.contains = function(target) { // Expect target = 3
  // console.log('this', this);
  // console.log('value', this.value);
  // console.log('target', target);
  if (this.value === target) {
    return true;
  }

  var matchesTarget = false;

  for (var i = 0; i < this.children.length; i++) {
    // console.log('i', i, this.value);
    if (this.children[i].value === target) {
      console.log('target', target);
      console.log('current child value', this.children[i].value);
      matchesTarget = true;
      return matchesTarget;
      // return true; // 7 === 7
    }
    if (this.children[i].children !== undefined) { // {value: 5, children: [{Node(7)}]
      // console.log('length', this.children[i].children.length);
      // console.log(this.value, 'kids', this.children);
      this.children[i].contains(target);
    }
  }

  //  else if (this.children !== undefined) {
  // console.log('kids', this.children);
  // loop through each children under a parent


  return matchesTarget;



  // var matchesTarget = false;

  // if (this.value === target) {
  //   matchesTarget = true;
  //   return matchesTarget;
  // }

  // var findTarget = function(child) { // [{value: 3}]
  //   // Access newTree.children, which is an array of objects
  //   for (var i = 0; i < child.length; i++) {
  //     // if the child of the parent child has a value equal to target, return true
  //     if (child[i].value === target) { // newTree.children[1].value === target | 4 === 3
  //       matchesTarget = true;
  //     }
  //     if (child[i].children !== undefined) { // newTree.children[1].children === [{},{}]
  //       // does newTree.child
  //       return findTarget(child[i].children); // [{},{}]
  //     }
  //   }
  // };

  // findTarget(this.children);

  // return matchesTarget;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
