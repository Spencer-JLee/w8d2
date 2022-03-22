function Cat(name, owner){
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  // return `${this.owner} loves ${this.name}`;
  return `Everyone loves ${this.name}!`;
};

Cat.prototype.meow = function() {
  return `${this.name} meows`;
}

let cat1 = new Cat("Garfield", "Raz");
let cat2 = new Cat("Tom", "Jerry");

cat1.meow = function() {
  return 'Special meow';
}

console.log(cat1.meow());
console.log(cat2.meow());