//_____task_1________________________________
// var itemsArray = [
//   { name: "juice", price: "50", quantity: "3" },
//   { name: "cookie", price: "30", quantity: "9" },
//   { name: "shirt", price: "880", quantity: "1" },
//   { name: "pen", price: "100", quantity: "2" }
// ];
// itemsArray.forEach(item => {
//   let totalPrice = Number(item.price) * Number(item.quantity);
//   console.log(`${item.name} total price: ${totalPrice}`);
// });
// let grandTotal = 0;

// itemsArray.forEach(item => {
//   grandTotal += Number(item.price) * Number(item.quantity);
// });

// console.log("Grand total of all items: " + grandTotal);

//________task_2____________________________
// var user = {
//   name: "Sameen",
//   email: "sameen@example.com",
//   password: "12345",
//   age: 30,
//   gender: "female",
//   city: "Karachi",
//   country: "Pakistan"
// };
// console.log("Does age exist? ", "age" in user); // check  hy      
// console.log("Does country exist? ", "country" in user); // check  hy 
// console.log("Does firstName exist? ", "firstName" in user); // nhi hy
// console.log("Does lastName exist? ", "lastName" in user);   // nhi hy

//___________task_3_____________________
// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }
// var person1 = new Person("Sameen", 22, "female");
// var person2 = new Person("Ali", 25, "male");
// var person3 = new Person("Ayesha", 30, "female");

// console.log(person1);
// console.log(person2);
// console.log(person3);

//_______task_4______________________
function Resident(name, gender, address, education, profession) {
  this.name = name;
  this.gender = gender;
  this.address = address;
  this.education = education;
  this.profession = profession;
}


var resident1 = new Resident("Ali", "male", "Street 1", "Graduate", "Engineer");
var resident2 = new Resident("Sara", "female", "Street 2", "Matric", "Teacher");

var residents = [resident1, resident2];
console.log(residents);

// Save to local storage
localStorage.setItem("residents", JSON.stringify(residents));

// Retrieve from local storage
var savedResidents = JSON.parse(localStorage.getItem("residents"));
console.log(savedResidents);
