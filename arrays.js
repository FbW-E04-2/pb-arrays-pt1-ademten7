//Warm Up
let myArray = [1, 2, 3, 4, 5];
console.log({ myArray });

let thirdElement = myArray[2];
console.log(thirdElement);
myArray[3] = "fourth Element";
console.log(myArray);

//Programming Basics: Arrays and Array Methods
//1.Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. 
//Declare another variable and assign the second item of the array as a value.
let euroCities = ['Paris', 'London', 'Valletta', 'Praque', 'Rome'];
let anotherVariable = euroCities[1];
console.log(anotherVariable);

//2.Change the first item in the array to "Berlin".
// euroCities[0] = "Berlin";
// console.log(euroCities);
euroCities.splice(0, 1, "Berlin");
console.log(euroCities);

//3. Print the length of the array "euroCities".
console.log('length of euroCities : ', euroCities.length);

//4. Remove the last item of the array "euroCities".
console.log(euroCities.pop(), euroCities);

//5. Use an array method to add "Budapest" to the euroCities array.
// console.log(euroCities.push("Budapest"), euroCities);
euroCities.splice(4, 0, "Budapest");
console.log(euroCities);

//6. Bonus: Remove the second and third items from the euroCities array.
euroCities.splice(1, 2);
console.log(euroCities);

//7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
let asianCities = ['Tokyo', 'Pekin', 'Mumbai', 'Baku', 'Hong-Kong'];

//8. Bonus: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
let selectedCities = asianCities.slice(1, 4);
console.log(selectedCities);

// 9 Bonus: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).
let worldCities = euroCities.concat(asianCities);
console.log(worldCities);
// 10 Reverse the order of worldCities.
worldCities.reverse();
console.log(worldCities);

//11. Bonus: Replace the 3rd item in the array of worldCities with "Toronto".
worldCities.splice(2, 1, "Toronto");
console.log(worldCities);
console.log(worldCities.length);

// 12 Bonus: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1, 0, "Washington");
console.log(worldCities);
console.log(worldCities.length);

//13 Bonus Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"
let stringCitiesWithPlus = worldCities.join("+");
console.log(stringCitiesWithPlus);

let stringCities = worldCities.toString();
console.log(stringCities);

console.log(worldCities);
// [
//     'Hong-Kong', 'Washington',
//     'Baku',      'Toronto',
//     'Pekin',     'Tokyo',
//     'Budapest',  'Praque',
//     'Berlin'
//   ]


//Write a program to reverse the string: "Hello World".
// to change only words
let str = "Hello World";
let strArr = str.split(" "); //[ 'Hello', 'World' ]
strArr.reverse(); //[ 'World', 'Hello' ]
str = strArr.toString();
str = str.replace(",", " ");
console.log(str); //World Hello
//to change letters
let simpleString = ["Hello", "World"];
let reversed = simpleString[0].split("").reverse();
console.log(reversed);





//Extra Practice
//Make an array of your siblings' names or your favorite movie characters' names.
let favMovieCharacters = ['Nic Cage', 'Tom Hanks', 'Bryan Cranston'];

//Make an array of your parents' names.
let parents = ['Yusuf', 'Hatun'];

//Combine these two arrays.
let combine = favMovieCharacters.concat(parents); //[ 'Nic Cage', 'Tom Hanks', 'Bryan Cranston', 'Yusuf', 'Hatun' ]
console.log(combine);

//Add your pets' names.
combine.unshift("Princess");
console.log(combine);
combine.splice(combine.length, 0, "Leo");
console.log(combine);

//Reverse the order of the array.
combine.reverse();

//Access one of your parents' names.
let index = combine.indexOf('Hatun');
console.log(index);

let mother = combine[1];
console.log(mother); //Hatun
console.log(typeof mother); //string

//Update the name of one of your parents.
let indexOfFather = combine.indexOf("Yusuf");
combine.splice(indexOfFather, 1, "Yusuf Ten");
console.log(combine);