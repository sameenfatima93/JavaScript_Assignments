///______assignemnts__chapter arry_____________

//_______question_1____
//_____________methode__one
// var arr =[]
// // console.log(arr);
// arr = ["sameen", "maryam","furqan"]
// console.log(arr);

//_____________methode_two
// var arr = [];
// // arr.push("sameen");
// // arr.push("hamza");
// // arr.push("ummehani")
// console.log(arr);
// arr.push("sameen","hamza","umer")
// console.log(arr);

//_______question_2____
// var students = new Array();  

// students.push("Ali");
// students.push("Sara");
// students.push("Ahmed");

// console.log(students); 

//_______question_3____
//  var arr = ["sameen","fatima","furqan"]
//  console.log(arr);

//_______question_4____
// var numberArr = [1 , 2 , 3 , 4 , 5 , 6]
// console.log(numberArr);

//_______question_5____
//  var isPresent = [true, false, true, true, false];
// console.log(isPresent);

//_______question_6____
//  var studentData = ["sameen" , 20 , true]
//  console.log(studentData);

//_______question_7____
//myprectice_________________
//  var favoriteFruits = ["Apple","Banana","Mango","Pinapple","cherry","Orange"]
// document.write("<h2> My Favorite Fruits are: </h2>")
// for (let i = 0; i < favoriteFruits.length; i++) {
//     document.write((i+1)+ ")" + favoriteFruits[i] + "<br>")

// }
// document.write("Total Fruits:" + favoriteFruits.length)

//my prectice__2

// var siblings = ["sameen", "Amber", "Kiran","Daniyal", "furqan", "Hamza"]
//  document.write("<h2>these are my sisters and brothers</h2>")
//  for (let i = 0; i < siblings.length; i++) {
//     document.write((i +  1 ) + ")" + siblings[i] +"<br>")
//  }

//______task
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// // Show in browser
// document.write("<h3>Qualifications in Pakistan:</h3>");
// for (var i = 0; i < qualifications.length; i++) {
//   document.write((i + 1) + ") " + qualifications[i] + "<br>");}


//_____question__8

// var studentName = ["Ali", "Hamza", "Ubaid"]
// var studentMarks = [320, 230, 480]
// var totalMarks = 500
// for (var i = 0; i < studentName.length; i++) {
//     var marksPercentage = (studentMarks[i] / totalMarks) * 100
//     document.write((i + 1) + ") " + " " + studentName[i] + " Obtained Marks " + studentMarks[i] + ":" + "<br>" + " out of " + " " + totalMarks + ": " + " <br> " + " percentage " + marksPercentage.toFixed(1) + "%" + "." + "<br>" + "<br>")
// }

//_____question__9 

// Initialize array with colors
// var colors = ["Red", "Green", "Blue", "Yellow"];
// document.write("Initial Array: " + colors + "<br>");

// a. Add color to the beginning
// var beginColor = prompt("Which color do you want to add at the beginning?");
// colors.unshift(beginColor);
// document.write("After adding at beginning: " + colors + "<br>");

// b. Add color to the end
// var endColor = prompt("Which color do you want to add at the end?");
// colors.push(endColor);
// document.write("After adding at end: " + colors + "<br>");

// c. Add two more colors to the beginning
// colors.unshift("Purple", "Orange");
// document.write("After adding two colors at beginning: " + colors + "<br>");

// d. Delete first color
// colors.shift();
// document.write("After deleting first color: " + colors + "<br>");

// e. Delete last color
// colors.pop();
// document.write("After deleting last color: " + colors + "<br>");

// f. Add color at a specific index
// var colors = ["orange","black","yellow","pink"]
// var indexAdd = +prompt("At which index do you want to add a color?");
// var colorAdd = prompt("Which color do you want to add?");
// colors.splice(indexAdd, 0, colorAdd);  
// // splice(index, deleteCount, newItem)
// document.write("After adding at index " + indexAdd + ": " + colors + "<br>");

// g. Delete color(s) at a specific index
// var colors = ["red", "blue","orange","pink","perple"]
// var indexDel = +prompt("At which index do you want to delete color(s)?");
// var delCount = +prompt("How many colors do you want to delete?");
// colors.splice(indexDel, delCount);
// document.write("After deleting " + delCount + " color(s) from index " + indexDel + ": " + colors + "<br>");
  
//______question_10___
// var score = [320,330,450,190,539,200]
// var score = [1,10,100,1000,10000]
// var score = [5,15,100,50]
// score.sort(function(a, b){
//     return a- b
// })
// // score.sort()
// console.log(score);

//____question__11_________
//  var cities = [" karachi "," Hydrabad "," sayalkot "," lahore ","islamabad"]
// var copy= cities.slice(1, 5)
// //  console.log(copy);
// // document.write("<b>the original array</b> : "+ cities + " <br> " + "and <br> <b>the selected cites for copy another array: </b>"+ copy)
// document.write("<b>the original arry:</b>" + cities + "<br> <br>")
// document.write("<b>the copy arry is </b> : " + copy + "<br><br>")
 
//_____question__12___________

// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ") // space se join kiya

// document.write("<b>Array:</b> " + arr + "<br>");
// document.write("<b>Single String:</b> " + singleString);

// var arr = ["This", "is", "my", "cat"];
// var str = arr.join(" ");
// console.log(str);

// var arr = ["This", "is", "my", "cat"];
// var str = arr.join("_");
// console.log(str);

// var arr = ["This", "is", "my", "cat"];
// var str = arr.join("|");
// console.log(str);

//_______question__13___
// Empty array (queue)
// var queue = [];

// Add values one by one (FIFO)
// queue.push("Keyboard");
// queue.push("Mouse");
// queue.push("Printer");
// queue.push("Monitor");

// console.log("Queue (original):", queue);

// // Access values in FIFO order
// console.log(queue.shift()); // Keyboard (pehle in)
// console.log(queue.shift()); // Mouse
// console.log(queue.shift()); // Printer
// console.log(queue.shift()); // Monitor (sabse last in, sabse last out)

// // Ab queue empty ho chuki hogi
// console.log("Queue after shifts:", queue);


//_______question__14___

// // Empty array (stack)
// var stack = [];

// // Store values one by one
// stack.push("Keyboard");
// stack.push("Mouse");
// stack.push("Printer");
// stack.push("Monitor");

// // Display values in reverse order (LIFO)
// console.log("Stack Array:", stack);

// console.log("Removed (LIFO): " + stack.pop()); // Monitor
// console.log("Removed (LIFO): " + stack.pop()); // Printer
// console.log("Removed (LIFO): " + stack.pop()); // Mouse
// console.log("Removed (LIFO): " + stack.pop()); // Keyboard

//_____question____15_______________

// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // dropdown start
// document.write("<select>");

// // array ke values ko loop me add karna
// for (var i = 0; i < phoneManufacturers.length; i++) {
//     document.write("<option>" + phoneManufacturers[i] + "</option>");
// }

// // dropdown end
// document.write("</select>");


//___my prectice
// var studentName = ["ali","umar","hanzala","hurain","mudassir"
// ]
// document.write("<select>")
// for (let i = 0; i < studentName.length; i++) {
//     document.write("<option>" + studentName[i] + "</option>")
    
// }

// document.write("</select>")
 
//____task
// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // dropdown start
// document.write("<select>");

// // array ke values ko loop me add karna
// for (var i = 0; i < phoneManufacturers.length; i++) {
//     document.write("<option>" + phoneManufacturers[i] + "</option>");
// }

// // dropdown end
// document.write("</select>");




