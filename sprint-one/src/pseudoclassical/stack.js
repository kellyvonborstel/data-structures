var Stack = function() {
  this.stackSize = 0;
};

Stack.prototype.push = function(value) {
  this[this.stackSize] = value;
  this.stackSize++;
};

Stack.prototype.pop = function() {
  if (this.stackSize > 0) {
    this.stackSize--;
    return this[this.stackSize];
  }
};

Stack.prototype.size = function() {
  return this.stackSize;
};
