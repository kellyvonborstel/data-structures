var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index) || [];
  var found = false;
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      bucket[i][1] = value;
      found = true;
    } 
  }
  if (!found) {
    bucket.push([key, value]);
  }
  this._storage.set(index, bucket);
  this._size++;
  if (this._size > this._limit * 0.75) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index) || [];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      return bucket[i][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      var value = bucket.splice(i, 1)[1];
      this._size--;
      if (this._size < this._limit * 0.25) {
        this.resize(Math.floor(this._limit / 2));
      }
      return value;
    }
  }
  return null;
};

HashTable.prototype.resize = function(newLimit){
  var oldStorage = this._storage;
  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
  var self = this;
  oldStorage.each(function(bucket) {
    if (!bucket) { 
      return;
    }
    for (var i = 0; i < bucket.length; i++) {
      self.insert(bucket[i][0], bucket[i][1]);
    }
  });
};


// Time complexity for each function
// insert - constant - O(1)
// retrieve - constant - O(1)
// remove - constant - O(1)
// resize - linear - O(n)
