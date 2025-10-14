//_______________________assignment function_______________

// function sum (a,b){
//     sum = a+b
//     return sum
// }
// console.log(sum(20,20));

//_______question_1__________

//  function power( a, b){
//     var result = 1
//     for (var i = 0; i < b; i++) {
//         result *= a
//        return result
        
//     }
//  }
//  console.log(power(4,6));

 //______question_2__________

//  var leepYearFinding = +prompt("enter any year to find leep year")

//  function isLeapYear(leepYearFinding) {
//     if ((leepYearFinding % 4 === 0 && leepYearFinding % 100 !== 0) || (leepYearFinding % 400 === 0)) {
//         return true;  
//     } else {
//         return false; 
//     }

// }
// console.log(isLeapYear(leepYearFinding));

//________question_3_________
// area = Math.sqrt(S * (S - a) * (S - b) * (S - c))

// // Function to calculate semi-perimeter
// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
// }

// Function to calculate area using Heron's formula
// function calculateArea(a, b, c) {
//     const S = calculateS(a, b, c);
//     const area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area;
// }
// const a = 5;
// const b = 6;
// const c = 7;

// const area = calculateArea(a, b, c);
// console.log("Area of the triangle is:", area);


//_______question_4_____________

// var marks1 = +prompt("Enter subject 1 marks");
// var marks2 = +prompt("Enter subject 2 marks");
// var marks3 = +prompt("Enter subject 3 marks");

// // Function to calculate average marks
// function calculateAverage(marks1, marks2, marks3) {
//     var sum = marks1 + marks2 + marks3;
//     return sum / 3;  // Average = total marks divided by 3 subjects
// }

// // Function to calculate percentage
// function calculatePercentage(marks1, marks2, marks3) {
//     var totalMarks = 300;  // Assuming each subject is out of 100 marks
//     var obtainedMarks = marks1 + marks2 + marks3;
//     return (obtainedMarks / totalMarks) * 100;  // Percentage calculation
// }

// // Main function to get average and percentage
// function mainFunction(marks1, marks2, marks3) {
//     var average = calculateAverage(marks1, marks2, marks3);
//     var percentage = calculatePercentage(marks1, marks2, marks3);

//     // Return both average and percentage as an object
//     return {
//         average: average,
//         percentage: percentage
//     };
// }

// // Call mainFunction and save returned object in results
// var results = mainFunction(marks1, marks2, marks3);

// // Print average and percentage rounded to 2 decimal places
// console.log("Average marks: " + results.average.toFixed(2));
// console.log("Percentage: " + results.percentage.toFixed(2) + "%");

//___________question_5_____________
// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;  // Return the index where char is found
//         }
//     }
//     return -1;  // If char not found in the string
// }
// var myString = "hello world";
// var searchChar = "o";

// console.log(customIndexOf(myString, searchChar));  // Output: 4
// console.log(customIndexOf(myString, "z"));         // Output: -1


//_________question_6______________
// var sentence = prompt("enter sentence in 120 charector")
// function removeVowels(sentence) {
//     var result = "";
//     var vowels = "aeiouAEIOU";

//     for (var i = 0; i < sentence.length && i < 120; i++) {
//         if (!vowels.includes(sentence[i])) {
//             result += sentence[i];
//         }
//     }

//     return result;
// }
// console.log(removeVowels(sentence));  // Output: "Hll, hw r y?"

//_________question_7_____________
// function countTwoVowelPairs(text) {
//     // Convert text to lowercase for easier matching
//     text = text.toLowerCase();

//     let count = 0;

//     for (let i = 0; i < text.length - 1; i++) {
//         let first = text[i];
//         let second = text[i + 1];

//         switch (first) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 // If first is vowel, check second using switch again
//                 switch (second) {
//                     case 'a':
//                     case 'e':
//                     case 'i':
//                     case 'o':
//                     case 'u':
//                         count++; // Found two vowels in succession
//                         break;
//                 }
//                 break;
//         }
//     }

//     return count;
// }

// // Example usage:
// let sentence = "Pleases read this application and give me gratuity";
// console.log(countTwoVowelPairs(sentence));  // Output: 3

//_______question_8____________________
// Function to convert km to meters
// function toMeters(km) {
//     return km * 1000;
// }

// // Function to convert km to feet
// function toFeet(km) {
//     return km * 3280.84;  // 1 km = 3280.84 feet
// }

// // Function to convert km to inches
// function toInches(km) {
//     return km * 39370.1;  // 1 km = 39370.1 inches
// }

// // Function to convert km to centimeters
// function toCentimeters(km) {
//     return km * 100000;   // 1 km = 100,000 cm
// }

// // Main function to input distance and print all conversions
// function convertDistance() {
//     var km = parseFloat(prompt("Enter distance between two cities (in kilometers):"));

//     console.log("Distance in meters: " + toMeters(km) + " m");
//     console.log("Distance in feet: " + toFeet(km) + " ft");
//     console.log("Distance in inches: " + toInches(km) + " in");
//     console.log("Distance in centimeters: " + toCentimeters(km) + " cm");
// }

// // Call the main function
// convertDistance();

//__________question_9__________
function calculateOvertimePay(hoursWorked) {
    var regularHours = 40;
    var overtimeRate = 12;
    var overtimeHours = 0;
    var overtimePay = 0;

    if (hoursWorked > regularHours) {
        overtimeHours = Math.floor(hoursWorked - regularHours);
        overtimePay = overtimeHours * overtimeRate;
    }

    return overtimePay;
}

// Input hours worked from user
var hours = parseInt(prompt("Enter total hours worked by employee:"));

// Calculate and display overtime pay
var pay = calculateOvertimePay(hours);
console.log("Overtime pay is Rs. " + pay);


//_________question_10______________
function calculateNotes(amountInHundreds) {
    // Convert the amount to actual rupees
    let amount = amountInHundreds * 100;

    let notes100 = Math.floor(amount / 100);
    amount = amount % 100;

    let notes50 = Math.floor(amount / 50);
    amount = amount % 50;

    let notes10 = Math.floor(amount / 10);
    amount = amount % 10;

    // If any amount left, it can't be dispensed with given denominations
    if (amount !== 0) {
        console.log("Amount cannot be dispensed in given denominations.");
        return;
    }

    console.log("Number of 100 Rs notes: " + notes100);
    console.log("Number of 50 Rs notes: " + notes50);
    console.log("Number of 10 Rs notes: " + notes10);
}

// Input amount in hundreds
var amountInHundreds = parseInt(prompt("Enter amount to withdra"));

