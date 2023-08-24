let firstName = 'Leo';  // string
let age = 21;   // numerot
let student = true;    // booleans (true / false)

console.log('Hello', firstName);
console.log('You are', age, 'years old');
console.log('Enrolled', student);

function suorita() {
    console.log("Suoritus aloitettu")
    document.getElementById('p1').innerHTML = 'Hello ' + firstName;
    document.getElementById('p2').innerHTML = 'You are ' + age + ' years old';
    document.getElementById('p3').innerHTML = 'Enrolled: ' + student;
    console.log("Suoritus suoritettu")
}
