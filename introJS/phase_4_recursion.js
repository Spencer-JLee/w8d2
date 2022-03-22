function range(start, end) {
  if(start === end) {
    return [start];
  }
  else {
    return [start].concat(range(start+1,end));
  }
}

// console.log(range(1,10));

function sumRec(arr) {
  if(arr.length === 0){
    return 0;
  }
  else{
    return arr[0] + sumRec(arr.slice(1));
  }
}

// console.log(sumRec([1,2,3]));

// function exponent(base, exp) {
//   if(exp === 0){
//     return 1;
//   }
//   else{
//     return base * exponent(base, exp-1);
//   }
// }

function exponent(base, exp){
  if(exp === 0){
    return 1;
  }
  else if(exp === 1){
    return base;
  }
  else if(exp % 2 === 0){
    temp = exponent(base, exp / 2);
    return temp * temp;
  }
  else{
    temp = exponent(base, (exp - 1) / 2);
    return base * (temp * temp);
  }
}

// console.log(exponent(2, 4));

function fibonacci(n){
  if(n === 0){
    return [1];
  }
  else if(n === 1){
    return [1, 1];
  }
  else{
    let previous = fibonacci(n-1);
    let nextNum = previous[previous.length - 1] + previous[previous.length - 2];
    return previous.concat([nextNum]);
  }
}

// console.log(fibonacci(4));

function deepDup(arr){
  let newArr = [];

  for(let i = 0; i < arr.length; i++){
    if(this[i] instanceof Array){
      newArr.concat(deepDup(this[i]));
    }
    else{
      newArr.push(this[i]);
    }
  }
  return newArr;
}

// let arr1 = [1,2,3];
// let arr2 = arr1;
// let arr3 = deepDup(arr1);
// console.log(arr1 === arr2);
// console.log(arr1 === arr3);

function bsearch(arr, target) {
  let middle = Math.trunc(arr.length / 2);
  if(arr[middle] === target) {
    return middle;
  }
  else if(arr[middle] > target) {
    if(middle === 0) {
      return -1;
    }
    else {
      return bsearch(arr.slice(0, middle), target);
    }
  }
  else {
    if(middle === arr.length - 1) {
      return -1;
    }
    else {
      let temp = bsearch(arr.slice(middle+1, arr.length), target);
      if(temp === -1) {
        return -1;
      }
      else {
        return middle + temp + 1;
      }
    }
  }
}

// let arr = [1,2,3,4,5];
// let target = 7;
// console.log(bsearch(arr, target));

function mergesort(arr){
  if(arr.length <= 1){
    return arr;
  }

  let middle = Math.trunc(arr.length / 2);

  let left_arr = arr.slice(0, middle);
  let right_arr = arr.slice(middle);
  let left_sorted = mergesort(left_arr);
  let right_sorted = mergesort(right_arr);
  return merge(left_sorted, right_sorted);
}

function merge(arr1, arr2){
  let new_arr = [];

  while(arr1.length !== 0 && arr2.length !== 0){
    if(arr1[0] < arr2[0]){
      new_arr.push(arr1.shift());
    }
    else{
      new_arr.push(arr2.shift());
    }
  }

  return new_arr.concat(arr1, arr2);
}

// console.log(mergesort([5, 4, 3, 2, 1]));

function subsets(arr){
  if(arr.length === 0){
    return [[]];
  }
  let current = arr[0];
  let previous = subsets(arr.slice(1));
  let result = previous.map((x) => x);
  for(let i = 0; i < previous.length; i++) {
    result.push(previous[i].concat([current]));
  }
  return result;
}

console.log(subsets([1,2,3]));