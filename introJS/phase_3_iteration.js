Array.prototype.bubbleSort = function() {
  new_arr = this.map((x) => x);
  let isSorted = false;
  while(!isSorted) {
    isSorted = true;
    for(let i = 0; i < new_arr.length - 1; i++) {
      if(new_arr[i] > new_arr[i+1]) {
        [new_arr[i], new_arr[i+1]] = [new_arr[i+1], new_arr[i]];
        isSorted = false;
      }
    }
  }
  return new_arr;
};

let arr = [5,4,3,2,1];
console.log(arr.bubbleSort());

String.prototype.substrings = function() {
  let left = 0;
  let right = 0;
  let substrings = [];

  while(left < this.length) {
    if(left != right) {
      substrings.push(this.slice(left,right));
    }
    if(right < this.length) {
      right ++;
    }
    else {
      left++;
    }
  }
  return substrings;
};

let s = "abcd";
console.log(s.substrings());