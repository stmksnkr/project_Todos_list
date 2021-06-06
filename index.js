//1.> ways to print in javascript 

console.log("hello world!");
// alert("me");
// document.write("this is doc write");

//2.> javascript console API

//console.warn("this is warning");
// console.error("this is error");

// 3.> javascript variables
var num1=35;
var num2 =36;
console.log(num1*num2);

//4.> data types in javascipt
var num3=56.58;
var str1="this is string";
var str2='this is also string';
//5.> Objects
var marks = {
    ravi : 54,
    babla: 100,
    stm: 99.97

}
// console.log(marks)
// array in javascript
var arr=[1,2,3,4,"kuch string"];
// console.log(arr)
// Arithmatic operators in javascript (+,-,*,/)
// Assign opertator(=)
//comparison operator(==,>,<)
// logical operator(||,&&,!)
 
// function in JS

function avg(a,b)
{
    return (a+b)/2;
}
c1 = avg(4,6);
c2= avg(10,96);
// console.log(c1,c2);
// conditional in JS
// var age=45;
// if(age>25)
// {
//     console.log("ADULT");
// }
// else
// {
//     console.log("NOT ADULT");
// }

// loops in JS
// var arr=[1,2,3,4,5,6,7,8,9]
// console.log(arr);
// for(var i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

// diffrent syntax for forloop
//  arr.forEach(function(element){
//   console.log(element);
//  })

// let j=0;
// const temp=0;
// while(j<arr.length)
// {
//     console.log("abc");
//     j++;
// }

let myarr=["abc","sangam",54,null,true];
//Array Methods
// myarr.pop();   // pop element from last
// myarr.push("gaurav"); // push at last in array
// myarr.shift() // used to pop element from very first
// myarr.unshift("satyam")   // add element to very first postion
// myarr.toString() //convert array element  to string
// myarr.sort() // to sort(*it sort the element in dictionary word means alphabetically(string))

//String methods in JS
 let mystr="today is ganja divas ganja ganja";
// console.log(mystr.indexOf("ganja")); // used to get index of ganja from very first
// console.log(mystr.lastIndexOf("ganja")); // used to get index of ganja from very last
// console.log(mystr.slice(0,5));
// d=mystr.replace("ganja","ciggi");
// console.log(d,mystr);




// document.addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
//   });


// FETCH API
// AJAX
// Event Handeling *****
// Regular Expression
// DOM (Document Object Model) ****
// Array, String, Object


// let mydate= new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());

//document object model (DOM manipulation)// any element of document can be accessed using DOM
let elem=document.getElementById('click');
console.log(elem);
let elemclass=document.getElementsByClassName("container");
// console.log(elemclass);
elemclass[0].style.background="yellow";
elemclass[1].classList.add("bgprime");
elemclass[0].classList.add("text_success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);
tn = document.getElementsByTagName('button');
console.log(tn);
tn1 = document.getElementsByTagName('div');
console.log(tn1);

createdelement =document.createElement('p');
createdelement.innerText ="this is a created para!!";
tn1[0].appendChild(createdelement);

createdelement2=document.createElement('p');
createdelement2.innerText ="this is created a boldddd paraaa!!";
tn1[0].replaceChild(createdelement2,createdelement);
//removeChild(element);//----->removes an element

//select using queery
sel =document.querySelector('.container')
console.log(sel);
sel1=document.querySelectorAll('.container')
console.log(sel1);

// Events in javascript
function clicked()
{
    console.log('the button was clicked');
}
// window.onload=function()
// {
//     console.log('The document is loaded now ');
// }
// ficontainer.addEventListener('click',function()
// {
//     document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked </b>"
//     console.log('clicked on container')
// })
// ficontainer.addEventListener('mouseover',function()
// {
//     console.log('mouse on container')
// })
// ficontainer.addEventListener('mouseout',function()
// {
//     console.log('mouse out of container')
// })
// let prevHTML=document.querySelectorAll('.container')[1].innerHTML;
// ficontainer.addEventListener('mouseup',function()
// {
//     document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//     console.log('mouse up when clicked on container')
// })
// ficontainer.addEventListener('mousedown',function()
// {
//     document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked </b>"
//     console.log('mouse down when clickd on container')
// })
//Arrow function

// summ=(a,b)=>{
//     return a+b;
// }

// setTimeout and setinterval
logkaro =()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b> we have fired set interval";
    console.log("i am your log");
}
// 
// clr =setTimeout(logkaro52000) //takes parametre 2000 in milli sec


// clr=setInterval(logkaro,5000);
// clearInterval(clr);
//use clearInterval/clearTimeout to cancel setInterval/setTimeout  


//Javascript localstorage
// localStorage.setItem('name','satyam')
// undefined
// localStorage.getItem('name')


//json**




