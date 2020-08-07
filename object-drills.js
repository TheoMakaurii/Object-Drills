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

let band = {
  sound1: 'foo',
  sound2: 'bar',
  sound3: 'fum',
  sound4: 'quux',
  sound5: 'spam'
}
for (let element in band){
  console.log(element, band[element]);
}

/*
// function testLoaf(){

// }

/*let band {
  sound1 = 'foo',
  sound2 = 'bar',
  sound3 = 'fum',
  sound4 = 'quux',
  sound5 = 'spam',
  

}
for (let sound1 in band){
  console.log(`${sound1}: ${band[sound1]} `)
}
console.log
// TRY THIS : 
//for (let element in band){
//  console.log(element, person[element])
//}



for(let element of people)
  console.log(`${element['name']} ${element['jobTitle']}`);



//console.log('sound1' in band) // -> foo

let people = [
  {
    name: "Dora",
    jobTitle: "explorer",
  },
  {
    name: "Bob",
    jobTitle: "the builder",
  },
  {
    name: "Mario",
    jobTitle: "plumber",

  }
]
for (let i =0; i< people.length; i++)
let person = people[i]
console.log(person.name, person.jobTitle)

// (people[i].name, people[i].jobTitle)

// this also works: people.forEach(person => console.log(person.name, person.jobTitle));

/*
EXAMPLE OF "for in" without using for Each
this is like using our object in an array
let sonic = people[0]
console.log(sonice);
for (let key in sonic){
  console.log(key, sonic[key])
}*/