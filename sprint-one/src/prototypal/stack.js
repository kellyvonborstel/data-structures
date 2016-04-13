var Stack = function() {
  var stack = Object.create(stackMethods);
  stack.stackSize = 0;
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
      var value = this[this.stackSize];
      return value;
    }

  },

  size: function() {
    return this.stackSize;
  }
};


