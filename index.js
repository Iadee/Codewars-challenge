// DESCRIPTION:
// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer. If the array does not contain any
// numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}


// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

function findNeedle(haystack) {
  // your code here
    return `found the needle at position ${haystack.indexOf('needle')}`
}

// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name) {
  let str = `Hello, ${name} how are you doing today?`;
  return str;
}
//
// DESCRIPTION:
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

function friend(friends){
  return friends.filter(person => person.length == 4)
}
will be posting my codewars for the year 2024 soon....
