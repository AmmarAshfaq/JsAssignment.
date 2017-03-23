var name=prompt("Please enter your name");
alert("Hi "+name);

// var num= 5;
// num =prompt("Enter number for table", num);
// alert(num+" x 1 ="+  num * 1);
// alert(num+" x 2 ="+  num * 2);
// alert(num+" x 3 ="+  num * 3);
// alert(num+" x 4 ="+  num * 4);
// alert(num+" x 5 ="+  num * 5);
// alert(num+" x 6 ="+  num * 6);
// alert(num+" x 7 ="+  num * 7);
// alert(num+" x 8 ="+  num * 8);
// alert(num+" x 9 ="+  num * 9);
// alert(num+" x 10 ="+  num * 10);

// var city=prompt("Enter Your city");
// if(city==="Karachi"){
//     alert("Welcome to the city of light!");
// }


// var gender=prompt("Enter your Gender");
// if(gender==="Male"){
// alert("Good Morning Sir")
// }
// else{
// alert("Good Morning Maam")
// }

// var firstClr=prompt("Enter Colour");

// if(firstClr==="red"){
//     alert("Vehicle Must Stop");
// }
// else if(firstClr==="yellow"){
//     alert("Vehicle should get ready to move");
// }
// else{
//     alert("Ready to move");
// }


// var currentAge=prompt("Enter Your Current Age");
// var maxAge=prompt("Enter Your Max Age");
// if(currentAge<=maxAge){
//     alert("You are Wellcome");
// }


// var fuel=prompt("Enter how mush fuel in your tanky");
// if (fuel<0.25){
//     alert("Please Refill Your Tanky");
// }

// var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true");
// }
 
 
//  var b = 82;
// if (++b === 83){
//  alert("given condition for variable b is true");
// }


//  var c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
// }
// if (c === 13){
//  alert("condition 2 is true");
// }
// if (++c < 14){
//  alert("condition 3 is true");
// }
// if(c === 14){
//  alert("condition 4 is true");
// }


//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// }
//  if (true){
//  alert("True");
// }
// if (false){
//  alert("False");
// }

//  if("car" < "cat"){
//  alert("car is smaller than cat");
// }





// Answer 9

// var firstSubject= +prompt("Enter Marks for First Student");
// var secSubject= +prompt("Enter Marks for second Student");
// var thirdSubject= +prompt("Enter Marks for third Student");
// var marksObtained=firstSubject+secSubject+thirdSubject;
// var totalMarks=300;
// var perc=(marksObtained/totalMarks)*100;
// document.write("<h1> Mark Sheet </h1>");
// document.write("Total Marks:  "+ totalMarks);
// document.write("</br> Marks Obtained: "+ marksObtained);
// document.write("</br>Percentage is:  "+ perc+"%");
// if(perc>=80){
//     document.write("</br>Grade : A+");
//     document.write(" </br>Remarks :Excellent");
// }
// else if(perc>=70){
//     document.write("</br>Grade : A");
//     document.write("</br>Remarks :Good");
// }
// else if(perc>=60){
//         document.write("</br>Grade : B");
//     document.write("</br>Remarks :You need to improve");

// }
// else{
//         document.write("</br>Grade : Fail");
//     document.write("</br>Remarks :Sorry");
// }



//Answer 10

// var item1=prompt("Name of item1 ");
// var item2=prompt("Name of item2 ");
// var priceItem1=prompt("Price of item1 ");
// var priceItem2=prompt("Price of item2 ");
// var orderQuantity1=prompt("Order quantity of item1 ");
// var orderQuantity2=prompt("Order quantity of item2 ");
// var shippingCharges=prompt("Shipping Charges ");
// var total1=priceItem1*orderQuantity1;
// var total2=priceItem2*orderQuantity2;
// var totalCost=total1+total2;

// document.write("<h1> Shopping Cart</h1>");
// document.write("</br>Price of "+ item1 +" is "+ priceItem1 );
// document.write("</br>Quantity of "+ item1 +" is " +orderQuantity1);
// document.write("</br>Price of "+ item2 +" is "+ priceItem2 );
// document.write("</br>Quantity of "+ item2 +" is " +orderQuantity2);
// document.write("</br>");
// document.write("</br>Shipping Charges " + shippingCharges);
// document.write("</br>Total cost of your order is "+ totalCost);
// if(totalCost>2000){
//     var disPrice=totalCost*0.10;
//     var discountPrice=totalCost-disPrice;
//     document.write("</br>Discounted price is "+discountPrice);
// }

//Answer 11
// var secretNumber=[1,3,5,6,8,9];
// var guessNumber=+prompt("Guess Your Number ");

// for(var i=0;i<secretNumber.length;i++){
//     if(guessNumber===secretNumber[i]){
// alert("Bingo ! Correct answer")
//     }
 
// }


// //Answer 12
// var divisibleBy=+prompt("Enter number ");
// if(divisibleBy % 3 === 0){
// alert("Number is Divisible by 3");
// }else{
//     alert("Not divisible");
// }

// //Answer 13
// var team1=prompt("Enter your Team Name :");
// var scoreTeam1=+prompt("Team A Score is :");
// var team2=prompt("Enter Your Team Name :");
// var scoreTeam2=+prompt("Team B Score is :");
// if(scoreTeam1>scoreTeam2){
//     alert("Team A is win");
// }
// else if(scoreTeam2>scoreTeam1){
// alert("Team B is win");
// }
// else if(scoreTeam1===scoreTeam2){
// alert("Game is Tie")
// }

//Answer 14
// var string=prompt("Enter value");
// var num=+prompt("Enter value");
// var bool=prompt("Enter value");

// if(string === ' '){
// alert(typeof string +"is a string");
// }
// else if(num === 1){
//     alert(typeof num +" is a num");
// }
// else if(bool===true || bool === false){
//     alert( typeof bool + "is a boolean");
// }

//Answer 15
// var divide=+prompt("Enter value");
// if(divide%2===0){
//     alert("Given number is even");
// }else{
//     alert("Given number is odd");
// }

//Answer 16
// var temp=+prompt("Temperature is :");
// if(temp>40){
// alert("It is too hot outside");
// }else if(temp>=30&& temp<40)
// {
// alert("The weather today is normal");
// }else if(temp>=20&& temp<30){
// alert("Today weather is cool");
// }else if(temp>=10 && temp<20){
// alert("OMG ! Today whether is cool");
// }

//Answer 17
// var numFirst=prompt("Enter first Number ");
// var operaTor=prompt("Enter Operator");
// var numSec=prompt("Enter Second Number");
// if(operaTor=== "+"){
//     alert(numFirst+numSec);

// }
// else if(operaTor=="-"){
//     alert(numFirst-numSec);

// }else if(operaTor=="*"){
//     alert(numFirst*numSec);
// }
// else if(operaTor=="/"){
//     alert(numFirst/numSec);
// }
// else if(operaTor == "%"){
//     alert(numFirst%numSec);
// }

// Answer 18
// var takeInp=prompt("Day Name is");
// var weekDay=["Monday","Tuesday","wednesday","Thursday","Friday"];
// for(var i=0;i<weekDay.length;i++){
//     if(takeInp === weekDay[i]){
//         alert("It's a week day");
//     }
// }
// if(takeInp==="Saturday"){
//     alert("It's weekend");
// }
// if(takeInp==="Sunday"){
//     alert("Yay ! its a holiday");
// }

//Answer 19
// var userScore=+prompt("Enter user Score");
// if(userScore>50){
//     alert("you are pass");
// }
// else{
//     alert("Try again");
// }

//Answer 20
// var firstNum=+prompt("Enter First Number");
// var secNum=+prompt("Enter Second Number");
// if(firstNum>secNum){
//     alert(firstNum+" is  Greater then "+secNum);

// }
// else if(firstNum=== secNum){
//     alert(firstNum + "is equal to " + secNum);
// }
// else if(secNum > firstNum){
//     alert(secNum + " is Greater than " + firstNum);
// }

//Answer 21
// var languageCode=prompt("Enter language code","Hello World");
// if(languageCode==='la'){
//     alert("salve Orbis Terrarum");
// }
// else if(languageCode==='de'){
//     alert("Hallo Welt");
// }
// else if(languageCode==='is'){
//     alert("Halló heimur");
// }








// //Answer 22
// var num=+prompt("Enter number");
// if(num>0){
//     alert("Number is positive"+num);
// }
// else{
//     alert("Number is negative "+num);
// }


// //Answer 23
// var num=+prompt("Enter number");
// var data=prompt("Enter data");
// alert(num+" " +data);
