var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  return !!this._storage[item];
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};


// Time complexity for each function
// add - constant - O(1)
// contains - constant - O(1)
// remove - constant - O(1)
