'use strict'

const loaf = {
  flour: 300,
  water: 210,
  hydration: function (water) {


    return (this.water * .25) * 100;

  }

};

console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration())

let band = {
  sound1: 'foo',
  sound2: 'bar',
  sound3: 'fum',
  sound4: 'quux',
  sound5: 'spam'
}
for (let element in band) {
  console.log(element, band[element]);
}

let food = {
  meals:
    [
      'breakfast',
      'second breakfast',
      'eleveneses',
      'lunch',
      'afterneoon tea',
      'dinner',
      'super supper'
    ]
}

console.log(food.meals[3])

let newArr = 
[{ name: 'Dora', jobTitle: 'explorer', }, 
{ name: 'Bob', jobTitle: 'Builder', }, 
{ name: 'Hip Hop Harry', jobTitle: 'DJ', }]; 
for (let i = 0; i < newArr.length; i++) 
{ console.log(newArr[i].name, newArr[i].jobTitle); }