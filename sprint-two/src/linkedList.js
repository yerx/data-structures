var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // variable

  // list {head: null, tail: null}

  //
  list.addToTail = function(value) { // {head: null, tail: null} // value = 12
    // create Node(12)  // {value: 12, next: null}

    // If (list.head = null and list.tail = null) // true
    //// head points to Node(12) // {head: Node(12), Node(12),tail: null}
    //// tail points to Node(12) // {head: Node(12), Node(12),tail: Node(12)}
    // else  // Node(99)
    ////

  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
