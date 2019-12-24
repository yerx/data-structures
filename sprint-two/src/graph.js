

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // the node is stored at the same array index and its value is an empty array
  this.nodes[node] = this.nodes[node] || [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // check if there is array at this.nodes[node]
  if (!Array.isArray(this.nodes[node])) {
    return false;
  } else {
    return true;
  }

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // if the node does exist
  if (this.contains(node)) {
    // remote the edge of that node
    // for (var i of this.nodes[node]) {
    //   this.removeEdge(node, i);
    // }
    // then make that node's array undefined
    this.nodes[node] = undefined;
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // does the fromNode's array include the toNode?
  if (this.nodes[fromNode][toNode] === true || this.nodes[toNode][fromNode] === true) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // add the toNode at the fromNode array
  this.nodes[fromNode][toNode] = true;
  // add the fromNode to the toNode array
  this.nodes[toNode][fromNode] = true;
  // console.log('from', this.nodes[fromNode]);
  // console.log('to', this.nodes[toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.nodes[fromNode][toNode] = undefined;
  this.nodes[toNode][fromNode] = undefined;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(i);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode, contains, hasEdge, addEdge, removeNode, removeEdge are O(1)
 forEachNode is O(n)
 */


