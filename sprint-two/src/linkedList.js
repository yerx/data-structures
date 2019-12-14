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

    // if list.head.value = target // {head: 99, tail: 99}
    if (comparingNode.value === target) { // head.value = 99
      return true;
    } else if (comparingNode === list.tail) { // {head: 99, tail: 99}
      return false;
    } else if (comparingNode.next.value === target) {
      // keep checking node value until node.next = null
      // recursive call
    }




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
