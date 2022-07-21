/* You should use multiple array methods to solve these problems. Don't use `for` loops!

 Using the provided `peopleArray` (bottom of this article), write a function that:

 1. Returns a list of everyone older than 18, which is
 2. sorted alphabetically by last name, and where
 3. each name and age is embedded in a string that looks like an HTML `<li>` element. */

var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
function multArray(arr) {
    //const peopleOver18 = peopleArray.filter(peep => peep.age >= 18);
    return arr.filter(a => a.age >= 18);


}

function sorted(people) {
    var sortedLast = people.sort(function (a, b) {
        if (a.lastName < b.lastName)
            return -1;
        else if (a.lastName == b.lastName)
            return 0;
        else
            return 1;
    })
    return sortedLast
}

function finalResult(peopleArray) {
    const li = peopleArray.map(function (l) {
         return `<li> ${l.firstName} ${l.lastName} is ${l.age} </li>`
         //"<li> " + l.firstName
        //     + l.lastName
        //     + " is " + l.age
        //     + "</li>";
    }, []);
    return li
}

var olderThan18 = multArray(peopleArray)
var sortedPeople = sorted(olderThan18)
var final = finalResult(sortedPeople)
console.log(final);

// `` - back tics, inside write

/*
Output:
[
   "<li>Kyle Mooney is 27</li>",
   "<li>Sarah Palin is 47</li>",
   "<li>Rick Sanchez is 78</li>",
   "<li>Morty Smith is 29</li>",
   "<li>Lev Tolstoy is 82</li>"
]
*/
/*This can be done this way as well to get same output
var finalResult = peopleArray.filter().sort().map()*/
