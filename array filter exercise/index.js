// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

function fiveAndGreaterOnly(element) {
    return (element >= 5)
}

let greaterThan = [3, 6, 8, 2].filter(fiveAndGreaterOnly);

console.log("Greater than Values " + greaterThan); /// [6, 8]



// 2) Given an array of numbers, return a new array that only includes the even numbers.

function evensOnly(elementEven) {
    return (elementEven % 2 === 0)
}

const evenNum = [3, 6, 8, 2].filter(evensOnly);

console.log("Even Numbers " + evenNum); /// [6, 8, 2]



// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length.

function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(function (five) {
        return five.length < 6
    });

}

console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]



// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

const people = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const belong = people.filter(function (belongs) {
    if (belongs.member === true) {
        return belongs
    }
});

console.log(belong);
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]



// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18).

const olderPeeps = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const ofAge = olderPeeps.filter(function (eighteen) {
    if (eighteen.age > 18 === true) {
        return eighteen
    }
})
console.log(ofAge);
// =>
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]
