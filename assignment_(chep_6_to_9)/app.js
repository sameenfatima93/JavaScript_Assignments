//_______assignment__2__
//__________chapter___6____to_____9 
//_______question___1___,
// document.write("<h3>Result</h3>")
// var valueOf = 10
// document.write("the value of a is:" + valueOf + "<br>" + "................................" + "<br>" + "<br>")

// ++valueOf

// document.write("the value of ++a is:" + valueOf + "<br>"
//     + "now tha value of a is:" + valueOf + "<br>" + "<br>")

// valueOf++
// document.write("the value of a++ is:" + valueOf + "<br>"
//     + "now tha value of a is:" + valueOf + "<br>" + "<br>")

    
// --valueOf
// document.write("the value of --a is:" + valueOf + "<br>"
//     + "now tha value of a is:" + valueOf + "<br>" + "<br>")

// valueOf--
// document.write("the value of a-- is:" + valueOf + "<br>"
//     + "now tha value of a is:" + valueOf + "<br>" + "<br>")

//_______question___2___
// var a = 2
// var b = 1
// var result = --a - --b + ++b + b--
// document.write("in this case the value of a is" + a + "and the value of b is" + b + "is i use -- before a now the result is:" + --a + " beacous of pre increment the value is in the third variable happen is 1 so thre is incress again the thatswhy the answer is: " + a +"<br>" +"<br>" )

// document.write("--a is " + a + "<br>" + "<br>")

// document.write("in this case the value of a is" + a + "and the value of b is" + b + "is --a - --b before a now the result is:" + (--a - --b) + " beacous of pre increment the value is in the third variable happen is 1 so thre is incress again the thatswhy the answer is: " + a +"<br>" +"<br>" )

// document.write("--a - --b is : " + a + "<br>" + "<br>")

// document.write("in this case the value of a is" + a + "and the value of b is" + b + " now the result of addition and subsraction :" + (--a - --b + ++b) + " beacous of pre increment  and dicrement heppent before and exicute after thats why the answer is: " + a +"<br>" +"<br>" )


// document.write("--a - --b + ++b is : " + a + "<br>" + "<br>")

// document.write("now the filnal equision a-- - --b + ++b + b-- is  : " + result + "<br>" + "<br>")

//_______question___3___
// var userName = prompt("Please Enter your name")
// alert("thank you")

//______question____5____
// var n = Number(prompt("Enter a number (leave empty for default 5):")) || 5;

// alert(
//   "Multiplication table of " + n + ":\n" +
//   n + " x 1 = " + (n * 1) + "\n" +
//   n + " x 2 = " + (n * 2) + "\n" +
//   n + " x 3 = " + (n * 3) + "\n" +
//   n + " x 4 = " + (n * 4) + "\n" +
//   n + " x 5 = " + (n * 5) + "\n" +
//   n + " x 6 = " + (n * 6) + "\n" +
//   n + " x 7 = " + (n * 7) + "\n" +
//   n + " x 8 = " + (n * 8) + "\n" +
//   n + " x 9 = " + (n * 9) + "\n" +
//   n + " x 10 = " + (n * 10)
// );

//_______question___6___

// var s1 = prompt("Enter name of first subject:") || "Subject1";
// var s2 = prompt("Enter name of second subject:") || "Subject2";
// var s3 = prompt("Enter name of third subject:") || "Subject3";

// var totalPer = 100;
// var totalMarks = totalPer * 3; 

// var m1 = Number(prompt("Enter obtained marks in " + s1 + " (out of 100):")) || 0;
// var m2 = Number(prompt("Enter obtained marks in " + s2 + " (out of 100):")) || 0;
// var m3 = Number(prompt("Enter obtained marks in " + s3 + " (out of 100):")) || 0;

// var obtained = m1 + m2 + m3;
// var percentage = (obtained / totalMarks) * 100;

// document.write("<h2>Result</h2>");
// document.write("<table border='1' cellpadding='6' cellspacing='0'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + s1 + "</td><td>" + totalPer + "</td><td>" + m1 + "</td></tr>");
// document.write("<tr><td>" + s2 + "</td><td>" + totalPer + "</td><td>" + m2 + "</td></tr>");
// document.write("<tr><td>" + s3 + "</td><td>" + totalPer + "</td><td>" + m3 + "</td></tr>");
// document.write("<tr><th colspan='1'> </th><th>" + totalMarks + "</th><th>" + obtained + "</th></tr>");
// document.write("<tr><td colspan='2'><strong>Percentage</strong></td><td>" + percentage.toFixed(2) + "%</td></tr>");
// document.write("</table>");

