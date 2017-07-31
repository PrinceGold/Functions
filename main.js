// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(max1, max2) {
	if (max1 > max2) {
		return max1
	} else {
		return max2
	}
}


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(max1, max2, max3){
    if (max1 > max2) && (max1 > max3)
    	return max1
	} else if (max2 > max1) && (max2 > max3) {
	return max2
	} else {
	return max3
	}

}


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
	if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
		return true 
	} else {
		return false
	}
}


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(sum1, sum2){
	return (sum1 + sum2)
}



// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(avg1, avg2, avg3) {
	return (avg1 + av2 + av3) / 3
}


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(get1) {
	return get1.length
}

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(great1, great2){
	if (great1 < great2) {
		return true 
	} else {
		return false
	}
}


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(name){
	return 'Hello' + '' + name + '!'
}


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madlib(word1, word2, word3, word4){
	return 'In the town of' + word1 + 'a' + word2 + 'took a visit to' + word3 + 'it was a fun day doing' + word4 + '!'
}






