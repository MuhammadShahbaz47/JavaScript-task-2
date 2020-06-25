// CHAP 21 TO 25

//TASK 1

// var firstname=prompt("Enter first name")
// var lastname=prompt("Enter Last name")
// var fullName=firstame+lastname;
// alert("Greetings "+fullName)

// TASK 2

// var mob=prompt("Enter you favourite mobile company name and model")
// var mobind=mob.length;
// document.write("My favourite phone is: "+mob+"<br>")
// document.write("Length of string: "+mobind)

//TASK 3

// var p="Pakistani"
// var pi=p.indexOf("n")
// document.write("String : "+p+"<br>")
// document.write("Index of 'n' : "+pi)

//TASK 4
// var p="Hello World"
// var pi=p.lastIndexOf("l")
// document.write("String : "+p+"<br>")
// document.write("Index of 'l' : "+pi)

//TASK 5

// var p="Pakistani"
// var pi=p.charAt("3")
// document.write("String : "+p+"<br>")
// document.write("Char at index 3 : "+pi)

//TASK 6

// var firstname=prompt("Enter first name")
// var lastname=prompt("Enter Last name")
// var children = firstname.concat(" ",lastname);
// document.write(children)

//TASK 7

// var city="Hyderabad";
// var cityr=city.replace("Hyder","Islam")
// document.write("City : "+ city +"<br>")
// document.write("After replacement : "+cityr)

//TASK 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var messageR=message.replace(/and/g,"&")
// document.write(messageR)

//TASK 9

// var str="472";
// document.write("Value : "+str+"<br>Type : String<br>")
// Number(str)
// document.write("Value : "+str+"<br>Type : Number")

//TASK 10

// var p=prompt("Input in lower case");
// var p2=p.toUpperCase()
// document.write("User input: "+ p + "<br>")
// document.write("Upper Case: "+ p2)

//TASK 11

// var p=prompt("Input in lower case")
// document.write("User Input: "+p+"<br>")
// var p2=p.slice(0,1)
// p2=p2.toUpperCase()
// var p3=p.slice(1)
// p3=p3.toLowerCase()

// p=p2+p3
// document.write("Title Case: "+p)

//TASK 12

// var num=35.36;
// var str=num.toString()
// var str=str.replace(".","")
// document.write(str)

//TASK 13

//TASK 14

// A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var B=prompt("Enter to find avaliablity")
// C=B.toLowerCase()
// if(C === "cake" ,C==="apple pie" ,C==="cookie" ,C==="chips" ,C==="patties"){
//     alert("Item is found")
// }
// else{
//     alert("Item Not Found")
// }

//TASK 15



//TASK 16

// var university = "University of Karachi";
// var res = university.split("");
// document.write(res)

//TASK 17

// var a=prompt("Enter")
// var b = a.charAt(a.length - 1)
// document.write("User input: "+a+"<br>")
// document.write("Last Character of input: "+b)

//TASK 18

// var temp = "The quick brown fox jumps over the lazy dog”.";
// temp2=temp.toLowerCase()
// var count = (temp2.match(/the/g) || []).length;
// document.write(count);


// CHAPTER 26 TO 30


// TASK 1

// var num=prompt("Enter positive integer","e.g: 3.45214")
// document.write("number: "+num+"<br>")
// var numr=Math.round(num)
// document.write("round off value: "+numr+"<br>")
// var numf=Math.floor(num)
// document.write("floor value: "+numf+"<br>")
// var numc=Math.ceil(num)
// document.write("ceil value: "+numc+"<br>")

//TASK 2

// var num=prompt("Enter negative integer","e.g: -2.673")
// document.write("number: "+num+"<br>")
// var numr=Math.round(num)
// document.write("round off value: "+numr+"<br>")
// var numf=Math.floor(num)
// document.write("floor value: "+numf+"<br>")
// var numc=Math.ceil(num)
// document.write("ceil value: "+numc+"<br>")

//TASK 3

// var num=prompt("Enter positive or negative integer")
// var numr=Math.abs(num)
// document.write("The absolute value of: "+num+" is "+numr)

//TASK 4

// var num=Math.random()*6
// var numc=Math.ceil(num)
// document.write("random dice value: "+numc)

//TASK 5

// var toss=Math.random()*2
// var numc=Math.ceil(toss)
// if(numc===2){
//     document.write(numc+"<br>"+"random coin value: Heads")
// }
// else{
//     document.write(numc+"<br>"+"random coin value: Tails")
// }

//TASK 6

// var number=Math.random()*100
// var numc=Math.ceil(number)
// document.write("Random number between 1 and 100: "+numc)

//TASK 7

// var wgt=prompt("Enter your weight in kilograms")
// var wgtr=parseFloat(wgt)
// document.write("The weight of user is "+wgtr+" kilograms")

//TASK 8

// var secretnum=7
// var num=+prompt("Enter a number between 1 to 10")
// if(num===secretnum){
//     alert("Congratulations! You are correct")
// }
// else{
//     alert("Try again!")
// }

//CHAPTER 31 TO 34

//TASK 1

// var dt=new Date();
// document.write(dt)

//TASK 2

// var months=["January","Feburary","March","april","May","June","July","August","September","October","November","December"]
// var dte=new Date();
// var mnth=dte.getMonth();
// var monthinwords=months[mnth]
// alert("Current Month: ",monthinwords)

//TASK 3

// var daynames=["Sun","Mon","Tue","Wed","Fri","Sat"]
// var now=new Date();
// var getDay=now.getDay();
// var nameOfToday=daynames[getDay]
// alert("Today is "+nameOfToday)

//TASK 4

// var daynames=["Fun day","Monday","Tuesday","Wednesday","Friday","Fun day"]
// var now=new Date();
// var getDay=now.getDay();
// var nameOfToday=daynames[getDay]
// alert("It's "+nameOfToday)

//TASK 5

// var date=new Date()
// var Today=date.getDate()
// if(Today < 16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }

//TASK 6

// var date=new Date()
// document.write("Current Date: "+date+"<br>")
// var milisince=date.getTime();
// document.write("Elapsed miliseconds since January 1,1970: "+milisince+"<br>")
// var minsince=milisince/(1000*60)
// document.write("Elapsed minutes since January 1,1970: "+minsince)

//TASK 7

// var date=new Date()
// var Todayhour=date.getHours()
// if(Todayhour < 13){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }

//TASK 8

// var laterDate=new Date("Thu ,Dec 31 2020")
// document.write(laterDate)

//TASK 9

// var r=new Date("June 18,2015")
// var rmilli=r.getTime()
// var today=new Date()
// var todaymilli=today.getTime()
// var diff=todaymilli-rmilli
// var diffdays=diff/(1000*60*60*24)
// var sinceramadan=Math.floor(diffdays)
// document.write(sinceramadan+" days have passed since 1st Ramadan,2015")

//TASK 10

// var r=new Date("Sat Dec 05,2015 22:50:16")
// var rmilli=r.getTime()
// var bg=new Date("Jan,1 2015")
// var bgmilli=bg.getTime()
// var diff=rmilli-bgmilli
// var diffsec=diff/(1000)
// var passedsec=Math.floor(diffsec)
// document.write("On reference Date "+r+"<br>"+passedsec+" seconds had passed since beginning of 2015")


//TASK 11

// var d=new Date();
// document.write("Current date:"+d+"<br>")
// var dt = new Date();
// dt.setHours( dt.getHours() - 1 );
// document.write("1 hour ago, it was "+dt );

//TASK 12

// var d=new Date();
// document.write("Current date:"+d+"<br>")
// var dt = new Date();
// dt.setFullYear( dt.getFullYear() - 100 );
// document.write("100 years back, it was "+dt );

//TASK 13

// var age=+prompt("Your Age")
// document.write("Your age is "+age+"<br>")
// var date=new Date()
// var year=date.getFullYear()
// var Birthyear=year-age;
// document.write("Your birth year is "+Birthyear)

//TASK 14

document.write("K-Electric Bill<br><br><br>")
document.write("Customer Name:ABC Customer<br>")
var months=["January","Feburary","March","april","May","June","July","August","September","October","November","December"]
var date=new Date()
var month=date.getMonth()
document.write("Month: "+months[month]+"<br>")
var NoOfUnits=410;
document.write("Number of units:"+NoOfUnits+"<br>")
var ChPerUnits=16;
document.write("Charges per units:"+ChPerUnits+"<br><br>")
var Netamnt=NoOfUnits*ChPerUnits;
document.write("Net Amount Payable (within Due Date): "+Netamnt+"<br>")
var LatePay=350
document.write("Late Payment surcharge: "+LatePay+"<br>")
var GrssAmnt=Netamnt+LatePay;
document.write("Gross Amount Payable (after Due Date): "+GrssAmnt)




