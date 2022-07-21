//1) Make an array of numbers that are doubles of the first array.

// const arr = [2, 5, 100]
// const result = arr.map (function(num){
// return num * 2
// }) 

//   console.log(result); // [4, 10, 200]



// 2) Take an array of numbers and make them strings.

//   const strings = [2,5,100]
//   // The function(e) is what causes the event to be fired, again the (e) can be named anything.
//   // The .toString is the method that converts a string object into a string.
// const stringsArr = strings.map(function(e){return e.toString()
// });
// console.log(stringsArr);

/* 
For some reason this did not work for #2.
 const stringItUp = strings.map(function(string){
 strings.map(String)
   }) 
   //console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
   */



// 3) Capitalize the first letter of each name and make the rest of the characters lowercase.

// function capitalizeNames(arr) {
//     return arr.map(element => {
//         /* charAt() returns the character at a specific index(position) in a string.
// charAt(0) the (0) in the index represents the first letter of the name; it's also the default number when no index is provided so the first char of str will return.*/
//         // substring returns part of the string beteen the start an end of index, or end of the string. (1) represents the second letter until the end which is why the rest are lowercased.
//         return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();// your code here
//     });
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// Output:
// ["John", "Jacob", "Jingleheimer", "Schmidt"]



// 4) Make an array of strings of the names.

//   function namesOnly(arr){
// // The i is the itinerator and it can be called j, k, l, any letters.
// // The added method .name console log the names into an Array.
// // The (i => i.name) is the "for loop" created when console.log asked for either name or age it will go through the index and look for specific method.
//     return arr.map(i => i.name);
//   }

//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));
//   // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]



// 5) Make an array of strings of the names saying whether or not they can go to The Matrix.

// const ofAge = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ];
// /* The ? after 18 is a condition test or a shortcut for an if...else statement;   condition? True : False  
//  you need the : the for loop is ran through and sees if the condition is either True/False. As per this example I am asking if the people ofAge are 18 and old then the can go if not they cannot. */
// const result = ofAge.map(ofAge => ofAge.age >= 18 ? ofAge.name + " can go to the Matrix" : ofAge.name + " can't go to the Matrix")
// console.log(result)
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]


// 6) Make an array of the names in h1s, and the ages in h2s.

function readyToPutInTheDOM(arr) {
    return arr.map(function(e){
        // The return indicates that <h1> is to put names within its borders and for <h2> to include the age into itself. 
        return "<h1>" + e.name + "<h1>" + "<h2>" + e.age + "<h2>";
    })
}

const result = readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]);
console.log(result);
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]
