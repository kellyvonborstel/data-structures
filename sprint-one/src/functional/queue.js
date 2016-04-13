var Queue = function() {
  var queue = {};
  var storage = {};
  var queueStart = 0;
  var queueEnd = 0;

  queue.enqueue = function(value) {
    storage[queueEnd] = value;
    queueEnd++;
  };

  queue.dequeue = function() {
    if (queueEnd - queueStart > 0) {
      var value = storage[queueStart];
      queueStart++;
      return value;
    }
  };

  queue.size = function() {
    return queueEnd - queueStart;
  };

  return queue;
};
