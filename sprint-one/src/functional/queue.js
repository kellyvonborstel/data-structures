var Queue = function() {
  var someInstance = {};
  var storage = {};
  var startIndex = 0;
  var endIndex = 0;

  someInstance.enqueue = function(value) {
    storage[endIndex] = value;
    endIndex++;
  };

  someInstance.dequeue = function() {
    if (endIndex - startIndex > 0) {
      var value = storage[startIndex];
      startIndex++;
      return value;
    }
  };

  someInstance.size = function() {
    return endIndex - startIndex;
  };

  return someInstance;
};
