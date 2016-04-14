var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;

  tree.insert = function(value) {
    if (value < tree.value) {
      if (tree.left) {
        tree.left.insert(value);
      } else {
        tree.left = BinarySearchTree(value);
      }
    } else if (value > tree.value) {
      if (tree.right) {
        tree.right.insert(value);
      } else {
        tree.right = BinarySearchTree(value);
      }
    } else {
      return 'Tree already contains this value.';
    }
  };

  tree.contains = function(value) {
    if (tree.value === value) {
      return true;
    }
    if (value < tree.value) {
      if (!this.left) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else if (value > tree.value) {
      if (!this.right) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  };

  tree.depthFirstLog = function(callback) {
    callback(tree.value);
    if (tree.left) {
      tree.left.depthFirstLog(callback);
    }
    if (tree.right) {
      tree.right.depthFirstLog(callback);
    }
  };

  return tree;
};


// Time complexity for each function
// insert - logarithmic - O(log n)
// contains - logarithmic - O(log n)
// depthFirstLog - linear - O(n)
