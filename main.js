const checkDogs = function (firstDogs, secondDogs) {
    const dogsFirstCorrected = firstDogs.slice();
    dogsFirstCorrected.splice(0,1);
    dogsFirstCorrected.splice(-2);
 
    const dogs = dogsFirstCorrected.concat(secondDogs);
    console.log(dogs);

    dogs.forEach(function (dog, i) {
        if (dog >= 3) {
           console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`); 
        }else{
            console.log(`Dog number ${i + 1} is still a puppy!`); 
        }
    })
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])


const caclHumanAge = function (ages) {
  const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4))
  const adults = humanAge.filter(age => age >= 18)
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length; 
  return average
}

const avg1 = caclHumanAge([5, 2, 4, 1, 15, 8, 3])
const avg2 = caclHumanAge([16, 6, 10, 5, 6, 1, 4])
console.log(avg1, avg2);


const dogs = [
    {weight: 22, curFood: 250, owners: ['Alice', 'Bob']},
    {weight: 8, curFood: 200, owners: ['Matilda']},
    {weight: 13, curFood: 275, owners: ['Sarah', 'John']},
    {weight: 32, curFood: 348, owners: ['Michael']},
];

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'))
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`);


const ownersEatMuch = dogs
.filter(dog => dog.curFood > dog.recFood)
.flatMap(dog => dog.owners);
console.log(ownersEatMuch);

const ownersEatLittle = dogs
.filter(dog => dog.curFood < dog.recFood)
.flatMap(dog => dog.owners);
console.log(ownersEatLittle);

console.log(`${ownersEatMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatLittle.join(' and ')}'s dogs eat too little!`);


console.log(dogs.some(dog => dog.curFood === dog.recFood));

const check = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(check));


console.log(dogs.filter(check));

const dogsCopy = dogs.slice().sort((a,b) => a.recFood - b.recFood)
console.log(dogsCopy);