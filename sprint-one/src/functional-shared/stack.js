var Stack = function() {
  var stack = {};
  stack.stackSize = 0;
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {
  push: function(value) {
    this[this.stackSize] = value;
    this.stackSize++;
  },

  pop: function() {
    if (this.stackSize > 0) {
      this.stackSize--;
      return this[this.stackSize];
    }
  },

  size: function() {
    return this.stackSize;
  }
};
