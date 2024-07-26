// Lesson 1: Assignments | JavaScript Basics and Syntax

//Task1 Understanding Data Types in JavaScript

function studentInfo(student){
    console.log("Name: " + student.name);
    console.log("Age: " + student.age);
    console.log("Grade: " + student.grade);
    console.log("Attendance: " + (student.attendance ? "Present" : "Absent"));
    console.log("-------------------------");
 }
 
let student1 = {
    name: "Charlie Brown",
    age: 16,
    grade: 10,
    attendance: true
};
let student2 = {
    name: "Samantha Jones",
    age: 17,
    grade: 11,
    attendance: false
};

console.log ("**All students info**");
let students = [student1, student2];
students.forEach(student => studentInfo(student));

console.log("**Individual student info:**");
studentInfo(student2);

//2. Exploring JavaScript Operators

//Decalre variables
let num1, num2;

//Assign values
num1 = 10;
num2 = 5;

//Perform arithmetic operations
console.log('Sum:', num1 + num2);
console.log('Difference:', num1 - num2);
console.log('product:', num1 * num2);
console.log('Quotient:',num1 / num2);
console.log('-------------------------');

// Explore assign operators and update the values of variables

num1 += 5;
num2 *= 5;
console.log('Updated num1:', num1);
console.log('Updated num2:', num2);
console.log('-------------------------');

//Use comparison operators
console.log('Is num1 greater than num2?', num1 > num2); 
console.log('Is num1 equal to num2?', num1 == num2);
console.log('Is num1 not equal to num2?', num1 != num2); 
console.log('-------------------------');

//Use logical operators
let isPositive = (num1 > 0) && (num2 > 0);
let isEven = (num1 % 2 === 0) || (num2 % 2 === 0);

//print results
console.log('Are both numbers positive?', isPositive);
console.log('Is at least one number even?', isEven);



