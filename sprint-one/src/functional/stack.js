var Stack = function() {
  var stack = {};
  var storage = {};
  var size = 0;

  stack.push = function(value) {
    storage[size] = value;
    size++;
  };

  stack.pop = function() {
    if (size > 0) {
      size--;
      var value = storage[size];
      delete storage[size];
      return value;
    }
  };

  stack.size = function() {
    return size;
  };

  return stack;
};
