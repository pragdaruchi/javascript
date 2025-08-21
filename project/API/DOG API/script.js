
// const myPromise = new Promise((res,rej)=>{
//     fetch("https://dog.ceo/api/breeds/image/random");
// }).then((res)=>{
//     console.log(res.json()); 
// })

let img = document.getElementById("img")
let heading = document.getElementById("heading")

// const fetchData = async ()=>{
//     const response = await fetch("https://dog.ceo/api/breeds/image/random");
//     const data = await response.json()
//     img.src = data.message;
// }

const fetchData2 = async ()=>{
    const inpValue = document.getElementById("inp").value
    const response = await fetch(`https://fakestoreapi.com/products/${inpValue}`);
    const data = await response.json()
    heading.innerText = data.title
    img.src = data.image;
}

// fetchData()
fetchData2()