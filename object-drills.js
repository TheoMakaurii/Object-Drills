'use strict'

const loaf = {
  flour: 300,
  water: 210,
  hydration: function(water) {
    

    return (this.water * .25) * 100;
     
  }

};

console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration())
// function testLoaf(){

// }

