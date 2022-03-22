Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

// let arr = [1,2,3]
// let callback = function(ele) {
//   console.log(ele * 2);
// }
// arr.myEach(callback);

Array.prototype.myMap = function(callback) {
  let new_arr = [];
  function map_ele(ele) {
    new_arr.push(callback(ele));
  } 
  this.myEach(map_ele);

  return new_arr;
};

// let arr = [1,2,3];
// let callback = function(ele) {
//   return ele * 2;
// };
// console.log(arr.myMap(callback));

Array.prototype.myReduce = function(callback, initialValue){
  new_arr = this.map((x) => x);
  if(initialValue === undefined){
    initialValue = this[0];
    new_arr = new_arr.slice(1);
  }

  for(let i = 0; i < new_arr.length; i++){
    initialValue = callback(initialValue, new_arr[i]);
  }

  return initialValue;
};

// let x = [1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }); // => 6

// // with initialValue
// let y = [1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }, 25); // => 31

// console.log(x);
// console.log(y);