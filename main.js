// Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order. 
// There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

// Write your code here:
const reverseArray = (array) => {
  const result = [];
  for(const element of array) {
    result.unshift(element);
  }
  return result;
}

// When you're ready to test your code, uncomment the below and run:
 
const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

// The greeting should take the following format:
// “Oh powerful [stringElement], we humans offer our unconditional surrender!” 

// Write your code here:
const greetAliens = (array) => {
  for(const element of array) {
    console.log(`Oh powerful ${element}, we humans offer our unconditional surrender!`);
  }
}
// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '. 

// Write your code here:
const convertToBaby = (array) => {
  const result = [];
  for(const element of array) {
    result.push(`baby ${element}`);
  }
  return result;
}

// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

//We wrote a function, smallestPowerOfTwo(), which takes in an array.

//Within our function, we create a new array called results. We then loop through the argument array and calculate the smallest power of two which is greater than the current element before using .push() to add it to results.

//It’s not doing what we want. Can you fix our code, please?

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop:
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop:
            // We needed to create a new variable!
            let j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.

// The .forEach() function should apply politelyDecline() directly; it should NOT merely receive an argument function that uses politelyDecline().

// You can test your function when you’re ready by passing in the veggies array or by making your own array!

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = arr => {
  arr.forEach(politelyDecline)
}

// Now we need to get healthy! Write a function acceptEverything() that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: 'Ok, I guess I will eat some [element].'

// You can use any technique you want to accomplish this task. You can test your function when you’re ready by passing in the veggies array or by making your own array!

const acceptEverything = arr => {
  arr.forEach(e => {
    console.log(`Ok, I guess I will eat some ${e}.`)
  })
}

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.

// You can test your function when you’re ready by passing in the numbers array or by making your own array!

const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
const squareNums = array => array.map(toSquare);

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'

// You can use any technique you want to accomplish this task.

// You can test your function when you’re ready by passing in the greetings array or by making your own array!

const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo']

console.log(shoutGreetings(greetings))

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.

// You can test your function when you’re ready by passing in the years array or by making your own array of years!


// Write your code here:
const sortYears = arr => arr.sort((a,b) => b - a)

// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays. 

// Write your code here:
const justCoolStuff = (arr1, arr2) => arr1.filter(word => arr2.includes(word));

// Feel free to uncomment the code below to test your function

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

/ Write a function isTheDinnerVegan() that takes in an array of food objects in the format:

// {name: 'cabbage', source: 'plant' }

// and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.

// const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];
 
// isTheDinnerVegan(meal); // Should return true

// You can test your function when you’re ready by passing in the dinner array or by making your own!

// Write your code here:
const isTheDinnerVegan = arr => arr.every(e => e.source === "plant")

// Feel free to comment out the code below to test your function

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:

// {speciesName: 'shark', numTeeth: 50 }

// and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) .

// You’ll need to access each object’s .numTeeth property. Feel free to either write a named comparison function, or use an anonymous function for your argument to .sort().

// You can test your function when you’re ready by passing in the speciesArray array or by making your own!

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write your code here:
const sortSpeciesByTeeth = arr => arr.sort((a, b) => a.numTeeth - b.numTeeth);

// Feel free to comment out the code below when you're ready to test your function!

console.log(sortSpeciesByTeeth(speciesArray))

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

