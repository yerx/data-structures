

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

  var newNode = {value: node, edges: [] };

  this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  for (let i = 0; i < this.nodes.length; i++) {
    let currNode = this.nodes[i];
    if (currNode.value === node) {
      var fromNode = currNode.edges[0];
      var toNode = currNode.edges[1];
      this.removeEdge(fromNode, toNode);
      this.nodes.splice(i, 1);
    }
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  for (let i = 0; i < this.nodes.length; i++) {
    let currNode = this.nodes[i];
    if (currNode.value === fromNode) {
      return currNode.edges.includes(toNode);
    }
  }

  return false;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  for (let i = 0; i < this.nodes.length; i++) {
    let node = this.nodes[i];
    if (node.value === fromNode) {
      node.edges.push(toNode);
    }
    if (node.value === toNode) {
      node.edges.push(fromNode);
    }
  }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  for (let i = 0; i < this.nodes.length; i++) {
    let node = this.nodes[i];
    if (node.value === fromNode) {
      var index = node.edges.indexOf(toNode);
      node.edges.splice(index, 1);
    }
    if (node.value === toNode) {
      var index = node.edges.indexOf(fromNode);
      node.edges.splice(index, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i].value);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode, contains, hasEdge, addEdge, removeNode, removeEdge are O(1)
 forEachNode is O(n)
 */


