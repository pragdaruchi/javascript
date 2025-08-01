    let arr = ["Welcome!","Hello, User!","Keep Learning JavaScript!","Javascript Language","Happy coding!"];
let num = 0;
setInterval(() => {
    document.getElementById("text").textContent = arr[num];
    num = (num+ 1)
    }, 1000); 