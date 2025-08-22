let name = document.getElementById("name")
let age = document.getElementById("age")
let city = document.getElementById("city")
let btn = document.getElementById("btn")
let cards = document.getElementById("cards")

btn.addEventListener("click", () => {
  let Record = JSON.parse(localStorage.getItem("student")) || [];

  let obj = { id: Date.now(), name: name.value, age: age.value, city: city.value }

  Record.push(obj);
  localStorage.setItem("student", JSON.stringify(Record))

  name.value = "";
  age.value = "";
  city.value = "";

  read();
});

function read() {
  let READ = JSON.parse(localStorage.getItem("student")) || []
  cards.innerHTML = "";

  READ.forEach((student) => {
    let div = document.createElement("div")
    let name = document.createElement("p")
    let age = document.createElement("p")
    let city = document.createElement("p")
 let delBtn = document.createElement("button")

    name.innerHTML = student.name;
    age.innerHTML = student.age;
    city.innerHTML = student.city;
   delBtn.innerText = "Delete"

    delBtn.classList.add("deleteBtn")
    delBtn.setAttribute("data-id",student.id)

    div.classList.add("box")
    div.append(name)
    div.append(age)
    div.append(city)
    div.append(delBtn)
    cards.append(div)
  });

  let del = document.querySelectorAll(".deleteBtn")

  del.forEach((btn) => {
    btn.addEventListener("click", () => {
      let id = btn.getAttribute("data-id")
      let allData = JSON.parse(localStorage.getItem("student"));
      let newData = allData.filter((item) => item.id != id)

      localStorage.setItem("student", JSON.stringify(newData))
      read()
    })
  })
}
read();
