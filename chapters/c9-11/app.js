ASSIGNMENT 9-11

 #Q No 01

 var cityName = prompt("Enter City name");
 if(cityName=="Karachi"){
     document.write("Welcome to city of lights"+"<br>");
 }
 else{
     document.write("");
 }

#Q No 02

 var gender=prompt("Enter your gender");
 if(gender=="male"){
     document.write("Good Morning Sir."+"<br>");
 }
 else if(gender=="female"){
     document.write("Good Morning Ma'am."+"<br>");
 }
 else{
     document.write("Enter your Gender Exactly right."+"<br>");
 }

 #Q No 03

 var colorTraffic=prompt("Enter colour of road traffic signal.");
 if(colorTraffic=="red"){
     document.write("Must Stop"+"<br>");
 }
else if(colorTraffic=="Yellow"){
 document.write("Ready to move"+"<br>");
 }
 else if(colorTraffic=="Green"){
     document.write("Move now"+"<br>");
 }
 else{
     document.write("Enter Colour of traffic lights."+"<br>");
 }


 #Q No 04

var fuel=+prompt("Enter your remaining fuel.");
 if(fuel<0.25){
     document.write("Please refill the fuel in your car."+"<br>");
 }
 else {
     document.write(" ");
 }

#Q No 05

  var a = 4;
 if (++a === 5){
 alert("given condition for variable a is true");
 }
  var b = 82;
 if (b++ === 83){
 alert("given condition for variable b is true");
 }
  var c = 12;
 if (c++ === 13){
 alert("condition 1 is true");
 }
 if (c === 13){
 alert("condition 2 is true");
 }
 if (++c < 14){
 alert("condition 3 is true");
 }
 if(c === 14){
 alert("condition 4 is true");
 }
  var materialCost = 20000;
 var laborCost = 2000;
 var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){
 alert("The cost equals");
 }
  if (true){
 alert("True");
 }
 if (false){
 alert("False");
 }
  if("car" < "cat"){
     alert("car is smaller than cat");
     }

#Q No 06

 var obt_marks=+prompt("Enter Your three subjects obtained marks.");
 var total_marks=+prompt("Enter total marks of three subjects.");
 var percentage = ((obt_marks/total_marks)*100);

 document.write("<h1>Marks Sheet</h1>"+"<br><br>");
 document.write("Total marks:"+total_marks+"<br>");

 if(percentage >= 80){
 document.write("Percentage : "+percentage+"%"+"<br>");
 document.write("Grade : A-one"+"<br>");
 document.write("Remarks : Excellent"+"<br>");
 }
 else if(percentage >= 70){
     document.write("Percentage : "+percentage+"%"+"<br>");
     document.write("Grade : A"+"<br>");
     document.write("Remarks : Good"+"<br>");
 }
 else if(percentage >= 60){
     document.write("Percentage : "+percentage+"%"+"<br>");
     document.write("Grade : B"+"<br>");
     document.write("Remarks : You need to improve"+"<br>");
 }
 else{
         document.write("Percentage : "+percentage+"%"+"<br>");
         document.write("Grade : Fail"+"<br>");
         document.write("Remarks : Sorry"+"<br>");
 }
