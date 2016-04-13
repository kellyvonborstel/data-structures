var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {
    edges: []
  };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return (this.nodes[node] !== undefined);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    // remove node from edge lists of connected nodes
    for (var connectedNode in this.nodes[node].edges) {
      this.removeEdge(node, connectedNode);
    }
    delete this.nodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected. 
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.indexOf(this.nodes[fromNode].edges, toNode) > -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges.push(toNode);
  this.nodes[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toNodeIndex = _.indexOf(this.nodes[fromNode].edges, toNode);
  this.nodes[fromNode].edges.splice(toNodeIndex, 1);
  var fromNodeIndex = _.indexOf(this.nodes[toNode].edges, fromNode);
  this.nodes[toNode].edges.splice(fromNodeIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(callback) {
  for (var node in this.nodes) {
    callback(node);
  }
};


// Time complexity for each function
// addNode - constant - O(1)
// contains - linear - O(n)
// removeNode - linear - O(n)
// hasEdge - linear - O(n)
// addEdge - constant - O(1)
// removeEdge - linear - O(n)
// forEachNode - linear - O(n)
