// Type Conversion = change the datatype of a value to another
//                   (string, numbers, booleans)

let age = window.prompt('How old are you?');

age = Number(age);
age += 1;

console.log('Happy Birthday! You are', age, 'years old');