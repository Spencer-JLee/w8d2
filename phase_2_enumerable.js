Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

// let arr = [1,2,3]
// let callback = function(ele) {
//   console.log(ele * 2);
// }
// arr.myEach(callback);

Array.prototype.myMap = function(callback) {
  let new_arr = []
  
}