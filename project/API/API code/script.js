let inp = document.getElementById("inp")
let img = document.getElementById("img")
let heading = document.getElementById("heading")

const getWeather = async ()=>{
//    let response = await fetch("http://api.weatherapi.com/v1/current.json?key=f8c75b303bfd4001a8e53607251908&q=rajkot&aqi=no");
   let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=f8c75b303bfd4001a8e53607251908&q=${inp.value}&aqi=no`);
    let res = await response.json()
    console.log(res);
    heading.innerText = res.location.name +  "  :-  "  + res.current.temp_c
}