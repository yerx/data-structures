var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var currentNode = Node(value);

    if (!list.head) {
      list.head = currentNode;
    }

    if (list.tail) {
      list.tail.next = currentNode;
    }

    list.tail = currentNode;
  };

  list.removeHead = function() {

    var removedNode = list.head;

    if (!list.head) {
      return null;
    }

    list.head = list.head.next;

    return removedNode.value;

  };

  list.contains = function(target) {

    var currentNode = list.head;

    while (!!currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;

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
