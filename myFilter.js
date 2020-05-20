Array.prototype.myFilter = function(callBack) {
  var newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callBack.call(this, this[i], i, this) {
      newArr.push(this[i]);
    }
  }
  return newArr;
}
