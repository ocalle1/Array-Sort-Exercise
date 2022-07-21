// 1. Rest Operator
//iterator only gives whats within the array, strings, .

// function collectAnimals(...animals) {
//     return animals
// }

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

function collectAnimals(...animals) {
    return animals
}
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));



// EXAMPLE FROM WEBSITE!
// Use rest to enclose the rest of specific user-supplied values into an array:
// function myBio(firstName, lastName, ...otherInfo) { 
//     return otherInfo;
//   }
  
//   // Invoke myBio function while passing five arguments to its parameters:
//   console.log(myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"));
  
// //   // The invocation above will return:
// //   ["CodeSweetly", "Web Developer", "Male"]

// this is from es6 part 1 examples
// function validateShoppingList(...items) {
//     if (items.indexOf('milk') < 0) {
//       return [ 'milk', ...items ];
//     }
  
//     return items;
//   }
  
//   console.log(validateShoppingList('oranges', 'bread', 'eggs'));



  // 2. shorthand syntax

  function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables}
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]) )

//=> {
    //     fruit: ["apple", "pear"],
    //     sweets: ["cake", "pie"],
    //     vegetables: ["carrot"]
    //  }


    // 3. Destructuring

    // I changed the parseSentence to vacation ----const vacation = { location: "Burly Idaho",duration: "2 weeks"}; This allowed me to save the const in line 45 and access it.
    function parseSentence(){

        const {location, duration} = vacation
        return `We're going to have a good time in ${location} for ${duration}`
      
    }
       const vacation = { 
        location: "Burly Idaho",
        duration: "2 weeks"
      };
    

      console.log(parseSentence())
       
// Pratice
    // const hero = {
    //     name: 'Batman',
    //     realName: 'Bruce Wayne'
    //   };
    //   const { name } = hero;
    //   console.log(name); // => 'Batman'



    // 4. Array Destructuring

    function returnFirst(){
        //const firstItem = items[0];  
        const[firstItem, secondItem, thirdItem] = items //answer
        return secondItem
    }
    const items = ["Yellow", "two", "dads"];
console.log(returnFirst())

    // 5.Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

    // const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
//   let firstFav = ["snowboarding"]
// let secondFav = ["philantropy"]
// let thirdFav = ["janitor work"]

    function returnFavorites(arr){
        let firstFav = ["snowboarding"]
        let secondFav = ["philantropy"]
        let thirdFav = ["janitor work"]
        return `My top three favorite activities are,  ${firstFav}, ${secondFav}, and ${thirdFav}`
    }
    console.log(returnFavorites());
    


    // 6. Use the Rest and Spread Operator to help take any number of arrays, and return one array.

    function combineAnimals(realAnimals, magicalAnimals, ...mysteriousAnimals) {
return mysteriousAnimals
    }

    const realAnimals = ["dog", "cat", "mouse",];
    const magicalAnimals = ["jackolope"];
    const mysteriousAnimals = [...realAnimals , ...magicalAnimals,"platypus"];
    
    console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));
    
    // ["dog", "cat", "mouse", "jackolope", "platypus"]
    


    // 7.
      
    function product(...numbers) {
        //var numbers = [a,b,c,d,e];
        return numbers.reduce(function(acc, number) {
            return acc * number;
          }, 1);
        }
  console.log(product())

        /* The acc is called the accumulator which is one of the 2 needed for a callback for the .reduce            example:
        const arr = [1, 2, 3, 4, 5]
const sum = arr.reduce((acc, elem) => acc + elem) 
console.log(sum) 
the ,1 is initial value and it will multiply, depending on what number is console.log. if you put 10 in the acc and 10 on the console.log then = 100.
https://eloquentcode.com/array-reduce-syntax-in-javascript   */

       



     // 8. Use at least both the rest and spread operators:

      function unshift(a, b, c, d, e, arr) => [a, b, ...arr, c, d, e];
    
      console.log(unshift(1, 2, 3, 4, 5, ['string', 23,false]))
      



      //  9. Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:

      function populatePeople(names){
        return names.map(function(name){
            name = name.split(" ");
            // your code
            return {
                firstName: firstName,
                lastName: lastName
            }
        })
    }
    
    populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
    //[
    //  {firstName: "Frank", lastName: "Peterson"},
    //  {firstName: "Suzy", lastName: "Degual"},
    //  {firstName: "Liza", lastName: "Jones"},
    //]


    function combineFruit(fruit, sweets, vegetables){
        return {fruit, sweets, vegetables}
    }
    
    console.log(combineFruit(["apple", "pear"],
                 ["cake", "pie"],
                 ["carrot"]) )
