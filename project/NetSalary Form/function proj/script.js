//Function declration
function sum(a,b) {
      console.log(a+b);
}
sum(10,30);

function num1(num) {
 if (num%2 == 0)     {
    console.log("Even");
 }
 else{
    console.log("Odd");  
 }
}
console.log(num1(10));


//function Expression
let names = function(name) {
  console.log("Hello " + name);
};
names("Ruchi"); 

let num = function(a,b){
   console.log(a*b);
}
num(30,2)

//anonymous function

let subtract = function(a, b) {
  console.log(a-b);
};
subtract(15, 5);

var subtrtact = function(a, b) {
  console.log(a/b);
};
subtrtact(15, 5);

//Arrow Function

let arrow = (a,b) =>{
    console.log(a+b);
}
arrow(80,10);

let arrows = (n) =>{
    for(let i=1; i<=5; i++){
              console.log(i);     
    }
}
arrows();

//IIFE Fnnction

(function(a, b) {
    let sum = a / b;
    console.log(sum);
})(45, 5);

(function(a, b) {
    let sum = a + b;
    console.log(sum);
})(5, 5);

//refrence variable

function sum(a,b){
      console.log(a+b);

}
sum(20,20)

function sum1(a,b){
      console.log(a-b);

}
sum1(20,10)


//return
let a = Number(prompt("Enter Any Number:"))
let b = Number(prompt("Enter Any Number:"))
function SUM(a,b){
     return a+b;
}
console.log(sum(a,b));

let c = Number(prompt("Enter Any Number:"))
let d = Number(prompt("Enter Any Number:"))
function SUMI(c,d){
     return c*d;
}
console.log(SUMI(c,d));