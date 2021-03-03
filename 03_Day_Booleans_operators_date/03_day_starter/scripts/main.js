// ! Level 1

// ? 1) Declare firstName, lastName, country, city, age, isMarried, year variables and assign value to them. Use typeof to check types.
let firstName = 'Joe',
    lastName = 'Shmo',
    country = 'Canada',
    city = 'Montreal',
    age = 25,
    isMarried = false,
    year = 1995

console.log('firstName: ' + typeof(firstName))
console.log('lastName: ' + typeof(lastName))
console.log('country: ' + typeof(country))
console.log('city: ' + typeof(city))
console.log('age: ' + typeof(age))
console.log('isMarried: ' + typeof(isMarried))
console.log('year: ' + typeof(year))

// ? 2) Check if typeof '10' is equal to 10
let equal = typeof('10') === 10
console.log(`'10' === 10 : ${equal}`)

// ? 3) Check if parseInt('9.8') is equal to 10
equal = parseInt(9.8) === 10
console.log(`parseInt(9.8) === 10 : ${equal}`)

/**
 * ? 4) True or false?
 * ?    1) Write three statements that have a truthy value.
 * ?    2) Write three that have a falsy value. 
 */
let truthy1 = 'This is truthy', truthy2 = 1, truthy3 = true,
    falsy1 = '', falsy2 = 0, falsy3 = false

// ? 5) Figure out the result of the following comparison expression without using console.log().
console.log(`4 > 3 : ${4 > 3}`)      // True
console.log(`4 >= 3 : ${4 >= 3}`)     // True
console.log(`4 < 3 : ${4 < 3}`)      // False
console.log(`4 <= 3 : ${4 <= 3}`)     // False
console.log(`4 == 4 : ${4 == 4}`)     // True
console.log(`4 === 4 : ${4 === 4}`)    // True
console.log(`4 != 4 : ${4 != 4}`)     // False
console.log(`4 !== 4 : ${4 !== 4}`)    // False
console.log(`4 != '4' : ${4 != '4'}`)   // * False
console.log(`4 == '4' : ${4 == '4'}`)   // * True
console.log(`4 === '4' : ${4 === '4'}`)  // * False
console.log(`'python'.length != 'jargon'.length : ${'python'.length != 'jargon'.length}`)

// ? 6) Figure out the result of the following expressions.