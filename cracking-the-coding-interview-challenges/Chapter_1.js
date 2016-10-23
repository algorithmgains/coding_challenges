/*
1.1
isUnique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
 */
// Time Complexity: O(n^2)
// Auxiliary Complexity: O(1)
const isUnique = str => {
	// Write your code here!
};

// Tests
// console.log('Should equal true: ', isUnique('Zohar'));
// console.log('Should equal true: ', isUnique('Sanchez'));
// console.log('Should equal false: ', isUnique('Hello'));
// console.log('Should equal false: ', isUnique('Goodbye'));
// console.log('Should equal false: ', isUnique('Julius'));
// console.log('Should equal false: ', isUnique('Evening'));

/*
1.2
Check Permutation: Given two strings, write a method to decide if one is apermutation of the other.
 */

const putIntoTable = (str, obj) => {
	// Write your code here!
}
 
const checkPermutation = (str1, str2) => {
	// Write your code here!
	}
	return true;

	// Clean solution - using native sort method - not efficient
	// var sortedStr1 = str1.split('').sort(function(a, b) { return a.localeCompare(b);}).join('');
	// var sortedStr2 = str2.split('').sort(function(a, b) { return a.localeCompare(b);}).join('');
	// return sortedStr1 === sortedStr2;
};

console.log('Should equal false: ', checkPermutation('race', 'car'));
console.log('Should equal true: ', checkPermutation('race', 'care'));
console.log('Should equal true: ', checkPermutation('butterpeanut', 'peanutbutter'));

/*
1.3
URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the 'true' length of the string.
I: "Mr John Smith "
O: "Mr%20John%20Smith"
 */
const URLify = str => {
	// Write your code here!
};
console.log(URLify("Let's go get some pizza!"))
/*
PalindromePermutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
I: Tact Coa
O: True (permutations: 'taco cat', 'atco cta', etc.)
 */
const palindromePer = str => {
	// Write your code here!
}; 