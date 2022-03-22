Array.prototype.uniq = function() {
  let new_arr = [];

  for(let i = 0; i < this.length; i++){
    if (!new_arr.includes(this[i])){
      new_arr.push(this[i]);
    }
  }

  return new_arr;
}

Array.prototype.twoSum = function() {
  let hash = {};
  let pairs = [];

  for(let i = 0; i < this.length; i++){
    let difference = 0 - this[i];
    if(difference in hash){
      pairs.push([hash[difference], i]);
    }
    else{
      hash[this[i]] = i;
    }
  }

  return pairs;
}

Array.prototype.transpose = function(){
  let result = [...Array(this[0].length)].map(e => Array(this.length));

  for(let i = 0; i < this.length; i++){
    for(let j = 0; j < this[i].length; j++){
      result[j][i] = this[i][j];
    }
  }
  return result;
}

console.log([1,2,2,3,3,3].uniq());
console.log([1, 2, 3, -1, -2, -3].twoSum());
console.log([[1, 2, 3], [4, 5, 6]].transpose());