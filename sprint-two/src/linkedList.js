var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);
    if (!list.head) {
      list.head = newTail;
    } else {
      list.tail.next = newTail;
    }
    list.tail = newTail;
  };

  list.removeHead = function() {
    if (list.head) {
      var value = list.head.value;
      list.head = list.head.next;
      return value;
    }
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode) {
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


// Time complexity for each function
// addToTail - constant - O(1)
// removeHead - constant - O(1)
// contains - linear - O(n)
