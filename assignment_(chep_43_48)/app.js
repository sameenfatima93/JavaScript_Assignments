//____assignment_12____chapter_43_48______________
//___________question_one___________
{/* <button onclick="alert('hello world')">click</button> */ }

//_______question___two___________
// function showmsg1(e) {
//     e.style.border = "9px solid black"
//     Swal.fire({
//         title: "Thank you ",
//         text: "for purchacing have a good day.",
//         imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
//         imageWidth: 200,
//         imageHeight: 200,
//         background: "#f7e7a9",

//         imageAlt: "Custom image"
//     });
// }
// function showmsg2(e) {
//     e.style.border = "9px solid black"
//    Swal.fire({
//   title: "Very sorry",
//   text: "currontly not avalible",
//   icon: "info",
//   background: "#e3edbdff",
//   showCancelButton: true,
//   confirmButtonColor: "#e01313ff",
//   cancelButtonColor: "rgba(12, 63, 233, 1)",
//   confirmButtonText: "do you want to delet?"
// }).then((result) => {
//   if (result.isConfirmed) {
//     Swal.fire({
//       title: "Deleted!",
//       text: "Your file has been deleted.",
//       icon: "success",
//       background: "#e3edbdff"
//     });
//   }
// });
// }
// function showmsg3(e) {
//     e.style.border = "9px solid black"
//     Swal.fire({
//         title: "Thank you ",
//         text: "for purchacing have a good day.",
//         imageUrl: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
//         imageWidth: 200,
//         imageHeight: 200,
//         background: "#f7e7a9",

//         imageAlt: "Custom image"
//     });
// }
// function showmsg4(e) {
//     e.style.border = "9px solid black"
//    Swal.fire({
//   title: "Very sorry",
//   text: "currontly not avalible",
//   icon: "info",
//   background: "#e3edbdff",
//   showCancelButton: true,
//   confirmButtonColor: "#e01313ff",
//   cancelButtonColor: "rgba(12, 63, 233, 1)",
//   confirmButtonText: "do you want to delet?"
// }).then((result) => {
//   if (result.isConfirmed) {
//     Swal.fire({
//       title: "Deleted!",
//       text: "Your file has been deleted.",
//       icon: "success",
//       background: "#e3edbdff"
//     });
//   }
// });
// }

//________queston_____three__________________
// let deletedRow = null;    // Deleted row ko temporarily store karne ke liye
// let deletedIndex = null;  // Row ka position store karne ke liye

// function delet(e) {
//   const row = e.parentNode.parentNode;
//   const table = document.getElementById("studentTable");
//   deletedIndex = row.rowIndex;
//   deletedRow = row.cloneNode(true); // Clone the row before removing

//   Swal.fire({
//     title: "Do you want to delete this row?",
//     text: "It will not appear again!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Yes, delete it",
//     cancelButtonText: "No, cancel",
//     confirmButtonColor: "#d33",
//     cancelButtonColor: "#3085d6"
//   }).then((result) => {
//     if (result.isConfirmed) {
//       row.remove();
//       document.getElementById("undoBtn").style.display = "inline-block";

//       Swal.fire({
//         title: "Deleted!",
//         text: "The row has been deleted.",
//         icon: "success",
//         timer: 2000
//       });
//     }
//   });
// }

// function undoDelete() {
//   if (deletedRow) {
//     const table = document.getElementById("studentTable");
//     const newRow = deletedRow;
//     table.insertRow(deletedIndex).outerHTML = newRow.outerHTML;

    // Hide undo button again
//     document.getElementById("undoBtn").style.display = "none";
//     deletedRow = null;
//     deletedIndex = null;

//     Swal.fire({
//       title: "Restored!",
//       text: "The row has been restored.",
//       icon: "info",
//       timer: 2000
//     });
//   }
// }

//_______question____four______
// function changeimg(e){
//     e.src="https://c8.alamy.com/comp/2BWXAWE/smiling-face-with-three-hearts-emoji-emoticon-2BWXAWE.jpg"
//     e.style.height="200px"
// }
// function changagain(e){
//     e.src="https://cdn.pixabay.com/photo/2025/02/07/07/25/crying-9389326_1280.png"
//      e.style.height="200px"
// }


//________question__five___________
// let count = 0;

//     function increase() {
//       count++;
//       document.getElementById("counter").innerText = count;
//     }

//     function decrease() {
//       count--;
//       document.getElementById("counter").innerText = count;
//     }

//______the end_______________________________