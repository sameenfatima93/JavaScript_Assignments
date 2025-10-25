//________question_1_______________
// function submitForm(event) {
//       event.preventDefault(); // prevent form reload

//       var Name = document.getElementById('Name').value;
//       var lName = document.getElementById('lName').value;
//       var email = document.getElementById('email').value;

//       console.log(Name, lName, email);

//       var heading = document.getElementById('heading');
//       heading.innerHTML = "<b>" + Name + " <br> " + lName + " <br>" + email + " <br>"+"</b>";
//     }



//_____question_2__________
// function expandText(){
//     var shortText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nesciunt corporis blanditiis natus ipsam excepturi sunt velit quod recusandae dignissimos sit,"
//     var text = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nesciunt corporis blanditiis natus ipsam excepturi sunt velit quod recusandae dignissimos sit, vel perspiciatis earum ipsa culpa esse aperiam ad commodi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt fuga laboriosam voluptate vitae? Voluptatum vitae illo delectus, expedita repellendus ad laborum perspiciatis. Qui, et eum! Repellat, adipisci? Illo, molestiae distinctio?"
//     var para = document.getElementById("para")
//     var link = document.getElementById("link")

//     if(link.innerHTML ==="See more"){
//         link.innerHTML="See less"
//         para.innerHTML = text
//     }else{
//         link.innerHTML="See more"
//         para.innerHTML = shortText
//     }
//     // para.innerHTML = text
// }

//_______question_3____________
//let deletedRow = null;    // Deleted row ko temporarily store karne ke liye
//let deletedIndex = null;  // Row ka position store karne ke liye

// function delet(e) {
//   const row = e.parentNode.parentNode;
//   const table = document.getElementById("studentTable");
//   deletedIndex = row.rowIndex;
 // deletedRow = row.cloneNode(true); // Clone the row before removing

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


 

  
    let deletedRow = null;
    let deletedIndex = null;
    let currentEditRow = null;

    
    document.getElementById("addForm").addEventListener("submit", function(e){
      e.preventDefault();
      const name = document.getElementById("name").value;
      const fname = document.getElementById("fname").value;
      const age = document.getElementById("age").value;
      const roll = document.getElementById("roll").value;
      const table = document.getElementById("studentTable");

      const row = table.insertRow(-1);
      const index = table.rows.length - 1;
      row.innerHTML = `
        <td>${index}</td>
        <td>${name}</td>
        <td>${fname}</td>
        <td>${age}</td>
        <td>${roll}</td>
        <td>
          <button onclick="edit(this)">Edit</button>
          <button onclick="delet(this)">Delete</button>
        </td>
      `;

      
      document.getElementById("addForm").reset();
    });

    
    function delet(btn) {
      const row = btn.parentNode.parentNode;
      const table = document.getElementById("studentTable");
      deletedIndex = row.rowIndex;
      deletedRow = row.cloneNode(true);

      Swal.fire({
        title: "Do you want to delete this row?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it",
      }).then((result) => {
        if (result.isConfirmed) {
          row.remove();
          document.getElementById("undoBtn").style.display = "inline-block";
          Swal.fire("Deleted!", "Row has been deleted.", "success");
        }
      });
    }

    
    function undoDelete() {
      if (deletedRow) {
        const table = document.getElementById("studentTable");
        const newRow = deletedRow;
        table.insertRow(deletedIndex).outerHTML = newRow.outerHTML;
        deletedRow = null;
        deletedIndex = null;
        document.getElementById("undoBtn").style.display = "none";
        Swal.fire("Restored!", "Row has been restored.", "info");
      }
    }

  
    function edit(btn) {
      currentEditRow = btn.parentNode.parentNode;
      document.getElementById("editForm").style.display = "block";

      document.getElementById("editName").value = currentEditRow.cells[1].innerText;
      document.getElementById("editFname").value = currentEditRow.cells[2].innerText;
      document.getElementById("editAge").value = currentEditRow.cells[3].innerText;
      document.getElementById("editRoll").value = currentEditRow.cells[4].innerText;
    }

    
    function updateStudent() {
      currentEditRow.cells[1].innerText = document.getElementById("editName").value;
      currentEditRow.cells[2].innerText = document.getElementById("editFname").value;
      currentEditRow.cells[3].innerText = document.getElementById("editAge").value;
      currentEditRow.cells[4].innerText = document.getElementById("editRoll").value;

      Swal.fire("Updated!", "Student details have been updated.", "success");
      document.getElementById("editForm").style.display = "none";
    }

    
    function cancelEdit() {
      document.getElementById("editForm").style.display = "none";
    }
 
