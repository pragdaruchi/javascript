// Que - 1

let b = 10; 
for(let i = 1; i <= 10; i++) {
    let tab = b * i;
    console.log(`${b} x ${i} = ${tab}`);
}

//Que-2
let c = prompt("Enter Any Letter")
  if (c =='a' || c =='e' || c =='i' || c =='o' || c =='u')
  {
   alert("Vowel")
  }
  else{
   alert("constant")
  }

  //Que-3
  

let x = Number(prompt("Enter Any Number"))
let y =  Number(prompt("Enter Any Number"))
let z =  Number(prompt("Enter Any Number"))
if(x<y){
    
    if(x<z){
        alert("X is min")
    }
    else{    
        alert("Z is min")
    }
}
else{
    if (y<z) {
        alert("Y is min")
    }
   else{
    alert("Z is min")
   }
}

// Que-4
let num = Number(prompt("Enter Any Number"));
if (num > 0) {
    alert("Positive");

}
else if (num < 0)
    {
        alert("Negative");
    }
        
else{
    alert("Zero")
}

// Que -5 

for(let i = 5; i >= 1; i--) {
   console.log(i);
}

//Que-6

for(let i=1; i<=20; i++){
    if (i%2 == 0) {
        console.log(i);
        
    }
}

// Que-7
let num1 = prompt("Enter Any Number");
if (num1 % 3 == 0 && num1 % 5 == 0) {
  alert("divide");
} else {
 alert("Not divide");
}

//Que - 8

for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){

        document.write(j);
    }
    document.write("</br>");
}
    document.write("</br>");

//Que-9

for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){

        document.write(i);
    }
    document.write("</br>");
}
    document.write("</br>");

//Que-10
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){

       if (j%2 == 0) {
           document.write("0");
       }
       else{
           document.write("1");
       }
    }
    document.write("</br>");
}
    document.write("</br>");

//Que-11
for(let i=5; i>=1; i--){
    for(let j=5; j>=i; j--){

        document.write(j);
    }
    document.write("</br>");
}
    document.write("</br>");

    //Que-12
for(let i=5; i>=1; i--){
    for(let j=5; j>=i; j--){

        document.write(i);
    }
    document.write("</br>");
}
    document.write("</br>");

    //Que-13
for(let i=5; i>=1; i--){
    for(let j=5; j>=i; j--){

        document.write("*");
    }
    document.write("</br>");
}
    document.write("</br>");


    //Que-14
for(let i=1; i<=4; i++){
    for(let j=1; j<=4; j++){

        document.write(j);
    }
    document.write("</br>");
}
    document.write("</br>");

    //Que-15
    for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){

       if (j%2 == 0) {
           document.write("A");
       }
       else{
           document.write("B");
       }
    }
    document.write("</br>");
}