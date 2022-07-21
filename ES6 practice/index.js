// 1

// const name = "John"
// let age = 101

// function runForLoop(pets) {
//     var petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         var pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])



// 2 Arrow Functions .map

// const carrots = ["bright orange", "ripe", "rotten"]

// // function mapVegetables(arr) {
// //     return arr.map(function(carrot) {
// //         return { type: "carrot", name: carrot }
// //     })
// // }
// // console.log(mapVegetables)


// const veggies = carrots.map(n =>({type: n}));
// console.log(veggies)



// 3 .filter()

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// // function filterForFriendly(arr) {
// //     return arr.filter(function(person) {
// //         return person.friendly
// //     })
// // }


// const friend = people.filter(peeps => peeps.friendly);
// console.log(friend)


// 4. sum and product

// function doMathSum(a, b) {
//     return a + b
// }

// let sum = (a, b) => a + b;
// console.log( sum(2, 3) );


// var produceProduct = function(a, b) {
//     return a * b
// }

// let product = (a, b) => a * b;
// console.log( product(2, 2) );


// 5. Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
let firstName = "Jane"
let lastName = "Doe"
let age = 100

console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}`)

// Hi Kat Stark, how does it feel to be 40?

