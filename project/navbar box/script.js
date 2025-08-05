let products = [
  { id: 1, name: "Police", price: "₹6846", image: "img/A.jpg" },
  { id: 2, name: "Vincent Chase", price: "₹699", image: "img/B.jpg" },
  { id: 3, name: "ROYALTAIL", price: "₹666", image: "img/C.jpg" },
  { id: 4, name: "MANGO", price: "₹1254", image: "img/D.jpg" },
  { id: 5, name: "Roadster", price: "₹579", image: "img/E.jpg" },
  { id: 6, name: "Royal Son", price: "₹449", image: "img/P.jpg" },
  { id: 7, name: "Vincent Chase", price: "₹699", image: "img/j.jpg" },
  { id: 8, name: "John Jacobs", price: "₹3299", image: "img/M.jpg" },
  { id: 9, name: "Carlton London", price: "₹837", image: "img/D.jpg" },
  { id: 10, name: "WROGN", price: "₹579", image: "img/O.jpg" },
  { id: 11, name: "Ted Smith", price: "₹909", image: "img/F.jpg" },
  { id: 12, name: "H&M", price: "₹909", image: "img/K.jpg" },
  { id: 13, name: "DressBerry", price: "₹539", image: "img/H.jpg" },
  { id: 14, name: "Voyage", price: "₹1149", image: "img/I.jpg" },
  { id: 15, name: "Ted Smith", price: "₹598", image: "img/J.jpg" }
];

function Cart(productIndex) {
  let existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  existingCart.push(products[productIndex]);
  localStorage.setItem("cart", JSON.stringify(existingCart));
}

function button() {
  let btns = document.querySelectorAll("button");
  btns.forEach(function(btn, index) {
    btn.addEventListener("click", function() {
      Cart(index);
    });
  });
}

function getData() {
 let bagItem = document.getElementById("bagItem");
   let  show = bagItem;

  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  show.innerHTML = "";

  cartItems.forEach(function(item) {
    let card = document.createElement("div");
    card.className = "bg-white p-4 rounded shadow w-64";

    let img = document.createElement("img");
    img.src = item.image;
    img.className = "w-full h-64 object-cover rounded";

    let name = document.createElement("h3");
    name.innerHTML = item.name;
    name.className = "mt-2 font-semibold text-lg";

    let price = document.createElement("p");
    price.innerHTML = item.price;
    price.className = "text-green-600 font-bold";

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);
    show.appendChild(card);
  });
}
button();
getData();
localStorage.removeItem("cart");
