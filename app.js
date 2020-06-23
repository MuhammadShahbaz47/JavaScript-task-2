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
