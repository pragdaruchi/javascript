let arr = ["red", "green", "blue", "orange", "pink"];
let i = 0;

let box = document.getElementById("box");

function magic1() {
    i--;
    box.style.backgroundColor = arr[i];
    box.innerHTML = arr[i];
    if (i < 0) {
        i = arr.length - 1;
    }
}

function magic() {
    i++;
    box.innerHTML = arr[i];
    box.style.backgroundColor = arr[i];
    if (i >= arr.length) {
        i = 0;
    }
}