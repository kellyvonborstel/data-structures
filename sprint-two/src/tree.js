var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var found = false;
  var checkNode = function(tree) {
    if (tree.value === target) {
      found = true;
      return;
    }
    _.each(tree.children, function(child) {
      checkNode(child);
    });
  };
  checkNode(this);
  return found;
};

treeMethods.traverse = function(callback) {
  callback(this.value);
  _.each(this.children, function(child) {
    child.traverse(callback);
  });
};


// Time complexity for each function
// addChild - constant - O(1)
// contains - linear - O(n)
// traverse - linear - O(n)
