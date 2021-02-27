// this is your main.js script

// ? 1) Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days of JavaScript'

// ? 2) Print the string on the broswer console using console.log()
console.log(challenge)

// ? 3) Print the length of the string on the browser console using console.log()
console.log(challenge.length)

// ? 4) Change all the string characters to capital letters usingtoUpperCase()
upper = challenge.toUpperCase()

// ? 5) Change all the string characters to lowercase
lower = challenge.toLowerCase()

// ? 6) Cut (slice) out the first word of the string using substr() or substring()
let firstWord = challenge.substr(3, 4)
console.log('First word is: '+firstWord)

// ? 7) Slice out the phrase Days Of JavaScript from challenge.
let daysOf = challenge.slice(3)
console.log(daysOf)

// ? 8) Check if the string contains a word 'Script' using includes()
if(daysOf.includes('Script')) 
    console.log("It does!")
else 
    console.log("It doesn't!")

// ? 9) Split the string into an array using split()
let array = challenge.split(' ')    // * Splits them with a whitespace as delimiter.
console.log(array)

// ! 10) Split challenge at the space using split()...Look up.

// ? 11) 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let techGiants = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let techArray = techGiants.split(', ')
console.log(techArray)

// ? 12) Change 30 Days of JavaScript to 30 Days of Python using replace()
let shift = challenge.replace('JavaScript', 'Python')
console.log(shift)

// ? 13) What is character at index 15 in '30 Days Of JavaScript'?
console.log(challenge.charAt(15))

// ? 14) What is the character code of J in challenge?
console.log(challenge.charCodeAt(challenge.indexOf('J')))

// ? 15) Use indexOf to determine the position of the first occurence of a in challenge
console.log(challenge.indexOf('a'))

// ? 16) Use lastIndexOf to determine the position of the last occurence of a in challenge.
console.log(challenge.lastIndexOf('a'))

// ? 17) Use indexOf to find the position of the first occurence of the word 'because'
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))

// ? 18) Use lastIndexOf to find the position of the last occurence of the word 'because'
console.log(sentence.lastIndexOf('because'))

// ? 19) Use search to find the position of the first occurrence of the word 'because'
console.log(sentence.search('because')) // * search uses regex

// ? 20) Use trim() to remove any trailing whitespace at the beginning and the end of a string.
let whitespace = '    There are whitespaces       '
console.log(whitespace.trim())

// ? 21) Use startsWith() with challenge and make the result true
console.log("Should be true:\t"+challenge.startsWith('30'))

// ? 22) Use endsWith() with challenge and make it true
console.log('Should be true:\t'+challenge.endsWith('Script'))

// ? 23) Use match() to find all the a's in challenge
console.log(challenge.match('a'))

// ? 24) Use concat() and merge '30 Days of' and 'JavaScript' to a single string.
let first = '30 Days of ',
    second = 'JavaScript'
console.log(first.concat(second))

// ? 25) Use repeat() to print 30 Days of JavaScript twice.
console.log(first.concat(second).repeat(2))

// * Level 2 * //

// ? 1) Using console.log(), print the statement in the .md
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.'\
 by John Holmes teaches us to help one another.")

// ? 2) Print the quote by Mother Teresa
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same \
-- with charity you give love, so don\'t just give money but reach out your hand instead.')

// ? 3) Check if typeof '10' is exactly equal to 10. If not, make it equal.
let string = '10',
    number = 10
if(string !== number){
    console.log('Before:\t'+ (string === number))
    string = number
}
console.log(string === number)

// ? 4) Check is parseFloat('9.8') is equal to 10, if not make it equal.
let float = parseFloat('9.8')
if(float !== number){
    console.log('Before:\t'+ (float === number))
    float = Math.round(float)
}
console.log(float === number)

// ? 5) Check if 'on' is found in both python and jargon
console.log('python'.includes('on'), 'jargon'.includes('on'))

// ? 6) Check if the word jargon is in the sentence.
let jargon = 'I hope this course is not full of jargon'
console.log(jargon.includes('jargon'))

// ? 7) Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 101))

// ? 8) Generate a rnadom number between 50 and 100 inclusively.
console.log((Math.floor(Math.random() * (100 - 50 + 1))+50))

// ? 9) Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 256))