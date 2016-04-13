var Queue = function() {
  var queue = {};
  queue.queueStart = 0;
  queue.queueEnd = 0;
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.queueEnd] = value;
    this.queueEnd++;
  },

  dequeue: function() {
    if (this.queueEnd - this.queueStart > 0) {
      var value = this[this.queueStart];
      this.queueStart++;
      return value;
    }
  },

  size: function() {
    return this.queueEnd - this.queueStart;
  }
};
