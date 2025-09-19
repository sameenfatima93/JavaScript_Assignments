//_______ assignment_7___(chepter_21_25)__________//
// ___________question__1__________________//
// var firstName = prompt("Enter Your First Name ")
// firstName = firstName.slice(0, 1).toUpperCase () + firstName.slice(1).toLowerCase()

// var lastName = prompt("Enter Your First Name ")
// lastName = lastName.slice(0, 1).toUpperCase () + lastName.slice(1).toLowerCase()

// var fullName = firstName + " " + lastName 
// console.log(fullName);


// var str = "sameen"
// str = str.slice(0 , 1).toUpperCase() + str.slice(1).toLowerCase()
// console.log(str);


// ___________question__2__________________//

// var userFvrMobile = prompt("Enter your faviurate mobile")
// console.log("my faviurate mubile mudule is : " + userFvrMobile + " <br> " + " Lenght of string : " + userFvrMobile.length );

// ___________question__3__________________//

// var country = "Pakistan"
// var find = country.indexOf("n")
// console.log("String :" + country + " is indexOf 'n':" + find);

// ___________question__4__________________//

// var str = "Hello world"
// var find = str.lastIndexOf("l")
// console.log("String :" + str + " is lastindexOf 'l':" + find);

// // ___________question__5__________________//

// var str = "pakistan"
// var find = str.charAt(3)
// console.log("String :" + str + " is character at '3':" + find);

// ___________question__6__________________//

// var firstName = prompt("enter your first name")
// var lastName = prompt("enter your last name")
// var fullName = firstName.concat(" ",lastName)
// console.log(fullName);

// note_____________________________________
// the .concat() method in JavaScript is used to merge two or more arrays or strings. It is important to note that this method does not modify the original arrays or strings; instead, it returns a new array or string containing the combined elements or characters. 
// For Arrays:
// The Array.prototype.concat() method merges one or more arrays (or values) into a new array.
// JavaScript

// const array1 = [1, 2];
// const array2 = [3, 4];
// const array3 = [5, 6];

// const newArray = array1.concat(array2, array3);
// console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]
// console.log(array1);   // Output: [1, 2] (original array remains unchanged)

// const anotherArray = array1.concat(7, [8, 9]);
// console.log(anotherArray); // Output: [1, 2, 7, 8, 9]
// For Strings:
// The String.prototype.concat() method joins two or more strings into a new string. 
// JavaScript

// const string1 = "Hello";
// const string2 = " World";

// const newString = string1.concat(string2, "!");
// console.log(newString); // Output: "Hello World!"
// console.log(string1);   // Output: "Hello" (original string remains unchanged)

// ___________question__7__________________//

// var city = "haydrabad"
// var repCity = city.replace("haydr", "islam")
// console.log(repCity);

//___note______replace_mathode______________
// Replacing parts of a string within JavaScript: This refers to using the built-in string methods in JavaScript to find and replace specific characters, substrings, or patterns within a string.
// replace() method: This method replaces the first occurrence of a specified value or regular expression in a string.
// JavaScript

// let originalString = "Hello world, hello everyone!";
// let newString = originalString.replace("hello", "hi");
// newString will be "Hello world, hi everyone!"
// replaceAll() method: This method replaces all occurrences of a specified value or regular expression in a string.
//     JavaScript

// let originalString = "Hello world, hello everyone!";
// let newString = originalString.replaceAll("hello", "hi");
        // newString will be "hi world, hi everyone!"
// Using Regular Expressions with replace(): To replace all occurrences with replace(), a regular expression with the global flag(g) is used.
//     JavaScript

// let originalString = "Hello world, hello everyone!";
// let newString = originalString.replace(/hello/g, "hi");
// newString will be "hi world, hi everyone!"

//_______my work prectice
// var str = "hello wold , hello student"
// // var newStr = str.replace("hello", "hi") // replace
// // var newStr = str.replaceAll("hello", "hi") // replaceAll
// var newStr = str.replace(/hello/g, "welcome") // with replace to replace all using /  /g
// console.log(newStr);

// ___________question__8__________________//
 
// var str = `Ali and Sami are best friends. They play cricket and
// football together.`;
//  var repStr = str.replaceAll("and" , "&")
//  console.log(repStr);
 

// ___________question__9__________________//

// var str = "786" //want  string convert into number
// //console.log( typeof parseInt(str)); //convert with parsInt
// //console.log( typeof Number(str)); //convert with number
// //console.log( typeof parseFloat(str)); //convert with parsefloat
// console.log( str + " type of is " + typeof str + parseInt(str) + " type of is " + typeof parseInt(str) );


//_____ to be contenued soon_____________
