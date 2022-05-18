// 1) Sort an array from smallest number to largest.

const smallNum = [1, 3, 5, 2, 90, 20]

smallNum.sort(function (a, b) {
    return a - b;
});

console.log("Small to large number:", smallNum); // [1, 2, 3, 5, 20, 90]



// 2) Sort an array from largest number to smallest.

const bigNum = [1, 3, 5, 2, 90, 20]

bigNum.sort(function (a, b) {
    return b - a;
});
console.log("Large to small number:", bigNum); // [90, 20, 5, 3, 2, 1]



// 3) Sort an array from shortest string to longest.

const sortWords = ["dog", "wolf", "by", "family", "eaten"]

sortWords.sort(function (a, b) {
    return a.length - b.length
});

console.log("Shortest to longest string:", sortWords); // ["by", "dog", "wolf", "eaten", "family"]



// 4) Sort an array alphabetically.

const inOrder = ["dog", "wolf", "by", "family", "eaten"]

inOrder.sort(function (a, b) {
    /* Condition ? True : False/new condition : True : False 
   
 Is equal to:

if(a===b) {
return 0
}
else {
if(a < b) {
    return 1
} 
else {
    return -1
}
} */

/* Further explaination

// Using if/else
let label;

if (user.isPremium) {
  label = "PREMIUM";
} else {
  label = "Free-Tier";
}

// with ternary
const label = user.isPremium ? "PREMIUM" : "Free-Tier";
 */
    return a === b ? 0 : a < b ? -1 : 1
})
console.log("Alphabetical order:", inOrder); // ["by", "dog", "eaten", "family", "wolf"]



// 5) Sort the objects in the array by age.

const age = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

age.sort((a, b) => a.age - b.age);
  
  console.log("sorted object from lowest to hightest in age",age);
  // => [ { name: 'Misunderstood Observer', age: 2 },
  //  { name: 'Quiet Samurai', age: 22 },
  //  { name: 'Unlucky Swami', age: 77 },
  //  { name: 'Arrogant Ambassador', age: 100 } ]
