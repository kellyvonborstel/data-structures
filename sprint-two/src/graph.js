var Graph = function() {
  this.nodes = {};
};

Graph.prototype.addNode = function(node) {
  this.nodes[node] = {
    edges: []
  };
};

Graph.prototype.contains = function(node) {
  return (this.nodes[node] !== undefined);
};

Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    // remove node from edge lists of connected nodes
    for (var connectedNode in this.nodes[node].edges) {
      this.removeEdge(node, connectedNode);
    }
    delete this.nodes[node];
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.indexOf(this.nodes[fromNode].edges, toNode) > -1;
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges.push(toNode);
  this.nodes[toNode].edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toNodeIndex = _.indexOf(this.nodes[fromNode].edges, toNode);
  this.nodes[fromNode].edges.splice(toNodeIndex, 1);
  var fromNodeIndex = _.indexOf(this.nodes[toNode].edges, fromNode);
  this.nodes[toNode].edges.splice(fromNodeIndex, 1);
};

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
