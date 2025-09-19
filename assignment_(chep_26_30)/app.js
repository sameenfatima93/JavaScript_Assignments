//_____assignemnt_8__chapter_26_30_________________////

//________question___1_________________

// var int = 4.74562
// console.log(Math.round(int));
// // round .(point) ky bad 5 ya us se bara hoga to .(point) sy pehly wala incress ho jaye ga
// console.log(Math.floor(int)); 
// // floor point(.) ky bad kitna bi bara number ho point(.) sy pehly wala apni asliyat pr rhy ga
// console.log(Math.ceil(int)); 
//  //ceil point(.) ky bad wala kitna bara ya chota ho point(.) sy pehly wala bara ho jaye ga agarchy point ky bd 1 hi kiun na ho

//_______task______________
// var number = +prompt("Enter a positive integer:");


// document.write("Number: " + number + "<br>");
// document.write("Round off value: " + Math.round(number) + "<br>");
// document.write("Floor value: " + Math.floor(number) + "<br>");
// document.write("Ceil value: " + Math.ceil(number) + "<br>");

//________question___2_________________

// var number = +prompt("Enter a negative floating point number:");
// document.write("Number: " + number + "<br>");
// document.write("Round off value: " + Math.round(number) + "<br>");
// document.write("Floor value: " + Math.floor(number) + "<br>");
// document.write("Ceil value: " + Math.ceil(number) + "<br>");


//________question___3_________________


// var number = +prompt("Enter a number:");

// document.write("The absolute value of " + number + " is " + Math.abs(number));

//________question___4_________________
//______rendom formula
//____Math.floor(Math.random() * max) + min
//Aapko agar kisi bhi range ka random number chahiye, to isi formula se bana sakte ho.

// var dice = Math.floor(Math.random() * 6) + 1;
// document.write("Random dice value: " + dice);

//________question___5________________

// var toss = Math.floor(Math.random() * 2) + 1;

// if (toss === 1) {
//     document.write("Random coin value: Heads");
// } else {
//     document.write("Random coin value: Tails");
// }

//________question___6________________

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 and 100: " + randomNumber);


//________question___7________________

// var userInput = prompt("Enter your weight (e.g. 50, 50kgs, 50.2kgs, 50.2kilograms):");
// var weight = parseFloat(userInput);
// document.write("The weight of user is: " + weight + " kilograms");

//________question___8________________

// Generate a secret random number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Ask user to guess
var userGuess = +prompt("Guess the secret number (between 1 and 10):");

// Check the guess
if (userGuess === secretNumber) {
    alert("🎉 Congratulations! You guessed the secret number: " + secretNumber);
} else {
    alert("❌ Sorry, wrong guess. The secret number was: " + secretNumber);
}

// ramazan coming in after these days
// var today = new Date("September 19, 2025");
// var ramazanStart = new Date("feb 17, 2026");
// var diff = ramazanStart - today;

// var daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

// console.log("Days left until Ramazan: " + daysLeft);
