
//________ class test chapter 31 to 34______________________________//
//________Question__1____________________________//

// var date = new Date ()
// console.log(date);

//________Question__2____________________________//

// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var now = new Date();
// var theMonth = now.getMonth();  
// var nameOfMonth = monthNames[theMonth];
// alert("Current month is " + nameOfMonth);

//________Question__3____________________________//

// var monthNames = ["sunday", "munday", "tuesday", "thursday", "friday", "saterday", "sunday"];
// var now = new Date();
// var theMonth = now.getDay();  
// var nameOfMonth = monthNames[theMonth];
// alert("today is " + nameOfMonth);

//________Question__4____________________________//
// var monthNames = ["sunday", "munday", "tuesday", "thursday", "friday", "saturday",];
// var now = new Date();    
// var theday = now.getDay();
// if(theday==0 || theday==6){
//     alert("It's Fun day")
// }  

//________Question__5____________________________//

// var now = new Date();   
// var thedate = now.getDate();
// if(thedate<16){
//     alert("First fifteen days of the month")
// }else{
//     alert("Last days of the month")
// }
//________Question__6____________________________//
// var now = new Date();   
// var thetime = now.getTime();
// var minutes = thetime/(1000*60)
// console.log("Current Date: " + now + "\nElapsed milliseconds since January 1, 1970: " + thetime + "\nElapsed minutes since January 1, 1970: " + minutes); 

//________-question__7____________________________//

// var day = new Date()
// var hour = day.getHours()
// if(hour<12){
//     alert("it's AM")
// }else{
//     alert("it's PM")
// }


//________Question__8____________________________//
// var laterDate = new Date("Dec 31, 2023")
// console.log(laterDate);

//________Question__9____________________________//
// var ramadanDate = new Date("June 18, 2023")
// var today = new Date()
// var diff = today - ramadanDate
// var daysPassed = Math.floor(diff/(1000*60*60*24))
// alert(daysPassed + " days have passed since 1st Ramadan, 2023")

//________Question__10____________________________//
// var refDate = new Date("Dec 5, 2015")
// var begDate = new Date("Jan 1, 2015")
// var diff = refDate - begDate
// var secondsPassed = Math.floor(diff/(1000*60))
// alert("On reference date " + refDate + ", " + secondsPassed + " seconds had passed since beginning of 2015")

//________Question__11____________________________//

// var now = new Date()
// now.setHours(now.getHours()+1)
// alert("Current date: " + now + "\n1 hour ago, it was " + now)

//________Question__12____________________________//

// var now = new Date()
// now.setFullYear(now.getFullYear()-100)
// console.log("current date: " + new Date() + "\n100 years back, it was " + now);

//________Question__13____________________________//
// var age = prompt ("enter your age")
// var day = new Date()
// var year = day.getFullYear()-age
// alert("your age is "+ age + " \nyour birthyear is " +year)

//________Question__14____________________________//

// var userName = prompt("Enter your name")
// var month = prompt ("enter month")
// var numberOfUnit = +prompt("enter number of unit")
// var chargesOfUnit = 16
// var netAmount = numberOfUnit * chargesOfUnit
// var latPayment = 350
// var grossPayment = netAmount + latPayment
// document.write("<h1>K-Electric Bill </h1>");
// document.write(("cutumer Name <b>" + userName + "</b> br"));document.write("billing moth <b> " + month + " </b> <br>");
// document.write("number Of unit <b>" + numberOfUnit + "</b> <br>" );
// document.write("Charges of perUnit <b>"  + chargesOfUnit + "</b> <br> <br> ");
// document.write("net Amount Payable (within Due date) <b>"  + netAmount.toFixed(2) + "</b> <br> ");
// document.write("Late Payment amount :  <b>"  + latPayment.toFixed(2) + "</b> <br> ");document.write("Grous Amount Payable (After Due Date) :  <b>"  + grossPayment.toFixed(2) + "</b> <br> ");

//____________________task_end____________________________________________________________











   

