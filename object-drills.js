'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration: function (water) {


    return (this.water * .25) * 100;

  }

};

console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());

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
for (let i = 0; i < newArr.length; i++) { console.log(newArr[i].name, newArr[i].jobTitle); }





let newArr2 =
  [{
    name: 'Dora',
    jobTitle: 'explorer',
    selfEmployed: false,
    boss: 'Mom'
  },

  {
    name: 'Bob',
    jobTitle: 'Builder',
    selfEmployed: true,
    boss: 'self-employed contracter'
  },

  {
    name: 'Hip Hop Harry',
    jobTitle: 'DJ',
    selfEmployed: false,
    boss: 'Jay Z'
  }];

for (let i = 0; i < newArr2.length; i++) {

  if (newArr2[i].selfEmployed === true) {
    console.log(`${newArr2[i].name} doesnt report to anybody`)
  };

  if (newArr2[i].selfEmployed !== true) {
    console.log(`${newArr2[i].name} reports to ${newArr2[i].boss}`);
  }

}

function decode(word) {
  let coder = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,

  };

  const firstLetter = word[0];
  const position = coder[firstLetter];
  if (!position) {
    console.log('whoops!')
  }

}

decode('');

const characterSheet = [];
function createCharacter(name, nickname, race, origin, attack, defense) {

  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe() {
      return `${this.name} is a ${this.race} from ${this.origin}`;
    },
    evaluateFight(character) {
      let x = this.attack - character.defense;
      let y = character.defense - this.attack;
      if (x > 0) {
        x = 0;
      }
      else if (y < 0) {
        y = 'PLAYER VANQUISHED';
      }
      return 'Your foe receives {x} damage, and you receive {y} damage';
    }
    //  console.log(character1, character2);




  }
};



let names = ['Gandalf the White', 'Bilbo Baggins', 'Frodo Baggins', 'Aragorn son of Arathorn', 'Legolas'];
let nicknames = ['gandalf', 'bilbo', 'frodo', ' aragorn', 'legolas'];
let race = ['wizard', 'hobbit', 'hobbit', 'dragon', 'elf'];
let origin = ['Middle Earth', 'The Shire', 'The Shire', 'Dunnedain', 'Woodland Realm'];
let attack = [10, 2, 3, 6, 8];
let defense = [6, 1, 2, 8, 5];

for (let i = 0; i < names.length; i++) {
  characterSheet.push(createCharacter(names[i], nicknames[i], race[i],
    origin[i], attack[i], defense[i]));
}

console.log(characterSheet);

characterSheet.forEach(element => {
  console.log(element.describe());
  //console.log(element.describe());
});

characterSheet.evaluateFight(characterSheet[2]);

