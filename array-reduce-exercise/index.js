// 1) Turn an array of numbers into a total of all the numbers.
const addNum = [1, 2, 3]

const addResult = addNum.reduce(function (final, added) {
    final += added
    return final
})

console.log("Total:", addResult); // 6



// 2) Turn an array of numbers into a long string of all those numbers.
const con = [1, 2, 3]

const result1 = con.reduce(function(final, nums){
    return con + "";
}, "")
 
 console.log("String of Array:", result1); // "123"



// 3) Turn an array of voter objects into a count of how many people voted. 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];

 const howManyVotes = voters.reduce(function(final, vote){
     if(vote.voted){
         final ++
     }
     // Remember the return   final   is crucial or it will come back undefined.
     return final
 }, 0)
 console.log("Total Votes:", howManyVotes); // 7
 


// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once.
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const listAndPrice = (wishlist) => {
    const totalCost = wishlist.reduce((a, b) => {
return a + b.price
    }, 0)
    return totalCost;
}
console.log("Total Price:", listAndPrice(wishlist)); // 227005



// 5) Given an array of arrays, flatten them into a single array.
const flatten = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
  const splat = flatten.reduce((a, b) => 
  a.concat(b))
     
 //const flat = flatten => [].concat(...flatten);
 console.log(splat); // ["1", "2", "3", true, 4, 5, 6];
 

// 6) Given an array of potential voters, return an object representing the results of the vote.
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const count = (age) => {
    if (age < 26) return ["Young", "Young Voters"];
    if(age < 35) return ["Middle", "Middle Voters"];
    return ["old", "old Voters"]
};

const voteCount = voters.reduce((final, {age, voted}) => {
    const [nay, yay] = count(age);
    final[nay] = (final[nay] || 0) + 1;
    if(voted){
        final[yay] = (final[yay] || 0) + 1;
    }
return final
}, {});


console.log(voteCount); 

// Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/

