var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { // {head: null, tail: null} // value = 12
    // create Node(12)  // {value: 12, next: null}
    var currentNode = Node(value);

    // If (list.head = null and list.tail = null) // true
    if (list.head === null && list.tail === null) {
      //// list.head = Node(12) // {head: Node(12), Node(12),tail: null}
      list.head = currentNode;
      //// list.tail = Node(12) // {head: Node(12), Node(12),tail: Node(12)}
      list.tail = currentNode;
    } else { // else  // Node(99)
      //// var nodeAttachedToTail = list.tail
      var nodeAttachedToTail = list.tail;
      //// list.tail = Node(99)
      list.tail = currentNode;
      //// nodeAttachedToTail.next = Node(99)
      nodeAttachedToTail.next = currentNode;
    }
    // console.log('list.tail', list.tail, list.tail.value);
  };

  list.removeHead = function() {
    // Check if there are any nodes in the list
    // If list.head === null
    if (list.head === null) {
      // Return a statement that says, "No nodes to remove"
      return null;
    } else { // Otherwise, (else)
      // Create a ref variable nodeAttachedToHead and set it equal to list.head // nodeAttachedToHead = Node(12) | nodeAttachedToHead.value = 12;
      var formerHead = list.head;
      // Remove Node(12), our head, and point 'head' to whatever node(12) was pointing to // list.head = nodeAttachedToHead.next | list.head = Node(99)
      // Node(12).next = Node(99)
      list.head = formerHead.next;
      // console.log('list', list);
      return formerHead.value;
    }
  };

  list.contains = function(target) { // 12
    // define a variable comparingNode = list.head
    var comparingNode = list.head;
    // Check if there are any nodes in the list
    if (comparingNode === null) {
      false;
    } else if (comparingNode.value === target) { // if list.head.value = target // {head: 99, tail: 99} // head.value = 99 //
      return true;
    }
    // Check if there is just one node in the list // Node(12)
    if (comparingNode === list.tail) { // {head: 99, tail: 99}
      return comparingNode.value === target;
    }
    // Define a variable
    var matchesTarget = false;
    // If we have two nodes
    // If the second node.next has a value of null (meaning it is the end of the list)
    while (comparingNode !== null) { //is comparingNode === list.tail
      if (comparingNode.value === target) {
        matchesTarget = true;
        return matchesTarget;
      } else {
        comparingNode = comparingNode.next; // comparingNode = {value: 12, next: Node(99)}
        // comparingNode = {value: 99, next: null}
        // comparingNode = null;
      }
    }
    return matchesTarget;

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
 addToTail and removeHead are O(1), constant time complexity
 contains is O(n), linear
 */
