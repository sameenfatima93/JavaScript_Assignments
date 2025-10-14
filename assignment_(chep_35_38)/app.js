//_______________FUNCTION Start_______________
// function greetUser(){
//     alert("welcome to SMIT")
// }
// greetUser()

// function greetUser(userName){
//     alert("welcome to SMIT " + userName)
// }
// greetUser("sameen")

// function sum(num1,num2){
//     console.log(num1+ num2);
// }
// var userVal1 = +prompt("enter first number")
// var userVal2 = +prompt("enter second number")
// sum(userVal1,userVal2)


//______assignment_35_38__________________

//_______question_1___________________

// function tellTime() {
//     var now = new Date()
//     console.log(now);
// }
// tellTime()
//__if parametor is empty then arguement also empty___//

//_______question_2___________________

// var userFirstName = prompt("enter your first name")
// var userLasttName = prompt("enter your last name")

// function fullName(firstName, secondName) {
//     console.log(" first Name " + firstName + " second Name " + secondName);

// }
// fullName(userFirstName, userLasttName)

//_______question_3___________________

// var userNum1 = +prompt("enter first number")
// var userNum2 = +prompt("enter second number")
//  function sum(userNum1,userNum2){
//     console.log(userNum1+userNum2)
//  }
//  sum(userNum1,userNum2)

//_______question_4___________________
// function calculator (num1, num2, operator){
//     if (operator === "+") {
//      console.log(num1 + num2)
        
//     }else if(operator === "-"){
//         console.log(num1 - num2);
//     }else if(operator === "/"){
//         console.log(num1 / num2);
//     }else if (operator === "*"){
//         console.log(num1 * num2);
//     }else{
//         console.log("invalid operator");
//     }
    
// }
// var userNum1 = +prompt("enter first number")
// var userNum2 = +prompt("enter first number")
// var userOper = prompt("enter operatr")
// calculator(userNum1, userNum2, userOper )

//_______question_5___________________

// function square(num) {
//     return num * num;
//   }
  
//   console.log(square(5));   
//   console.log(square(-3));   
  
//_______question_6___________________
// function factorial (n){
//     var result = 1
//     for (let i = 1; i<=n; i++) {
//         result *= i
//     }
//     return result
// }
// document.write(factorial(+(prompt("enter any number")))) // this way is right
// // var userChoice = +prompt("enter any number") // this way also right with using another variabl
// // document.write(factorial(userChoice))
  
//_______question_7_________________________

// function sum(num1,num2) {
//     for (let i = num1; i <= num2; i++) {
//        console.log(i);
        
//     }
// }
// sum(2,100)

// function number (num1,num2){
//     result
// }


//_____question_8____________

// function calculateHyp(base,perp){
//     function square(x){
//         return x**2
//     }
//     var hypSquare = square(base) + square(perp)
//     return hypSquare
// }
// console.log(calculateHyp(10,5));



//_____question_9______________

// function calculateArea(w,h){
//     return w*h
// }
// console.log(calculateArea(10,5));
// var width = 10
// var height = 5
// console.log(calculateArea(width,height));

//_________question_10_________
// function isPalindrome(str) {
//     // Convert to lowercase and remove spaces for accurate checking
//     str = str.toLowerCase().replace(/[\W_]/g, ""); 

//     // Reverse the string
//     let reversed = str.split("").reverse().join("");

//     // Compare original and reversed
//     if (str === reversed) {
//         console.log("Yes, it's a palindrome!");
//     } else {
//         console.log("No, it's not a palindrome!");
//     }
// }

// // Example usage
// isPalindrome("madam");     // Yes, it's a palindrome!
// isPalindrome("hello");     // No, it's not a palindrome!
// isPalindrome("A man, a plan, a canal: Panama"); // Yes, it's a palindrome!


// var word = prompt("enter any word")
// var result = ""
// for (let i = word.length + 1; i < 0; i--) {
//     result += i
    
    
// }
// console.log(word);

//_________question_11____________________
// function capitalizeWords(str) {
//   return str
//     .split(' ') // Split the string into words
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
//     .join(' '); // Join the words back into a string
// }

// // Example usage
// console.log(capitalizeWords('the quick brown fox')); // Output: 'The Quick Brown Fox'

//_________question_12_______________________
// function findLongestWord(str) {
//   const words = str.split(' ');
//   let longest = '';

//   for (let word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }

//   return longest;
// }

// // Example usage
// console.log(findLongestWord('Web Development Tutorial')); // Output: 'Development'

//____________question_13____________________
// function countLetterOccurrences(str, letter) {
//   let count = 0;

//   // Loop through each character in the string
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count++;
//     }
//   }

//   return count;
// }

// // Example usage
// console.log(countLetterOccurrences("javascript", "a")); // Output: 2
// console.log(countLetterOccurrences("hello world", "l")); // Output: 3


//___________question_14______________
// Function to calculate circumference
function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference.toFixed(2));
}

// Function to calculate area
function calcArea(radius) {
    let area = Math.PI * radius * radius;
    console.log("The area is " + area.toFixed(2));
}

// Example usage
calcCircumference(5); // Radius = 5
calcArea(5);



