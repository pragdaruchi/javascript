let count = 0;
let num = document.getElementById("num1")

function minus(){
   count-=1;
   num.innerHTML = count;
}
function reset(){
   count=0;
   num.innerHTML = count;
}
function plus(){
   count+=1;
   num.innerHTML = count;
}