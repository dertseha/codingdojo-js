function BasicObject(init) {
  this.value = init;
}

BasicObject.prototype.getValue = function() {
  return this.value;
};

module.exports = BasicObject;
