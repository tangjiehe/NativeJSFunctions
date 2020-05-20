Array.prototype.myMap = function(callBack) {
  var newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callBack.call(this, this[i], i, this0;
  }
  return newArr;
}
