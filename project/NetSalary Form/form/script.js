let salary = Number(prompt("Enter Your Salary"));
let rent = Number(prompt("Enter your rent:"));
let fuel = Number(prompt("Enter your fuel expences:"));
let other = Number(prompt("Enter your other expences:"));
let extra = Number(prompt("Enter your extra income:"));
let netSalary = Number(prompt("Enter your net salary:"));

let income = salary + extra
let expense = rent + fuel + other
let netsalary = income - expense
function calculation() {
    document.getElementById("salary").innerText = `Salary is: ${salary}`;
    document.getElementById("rent").innerText = `Rent is: ${rent}`;
    document.getElementById("fuel").innerText = `Fuel Expences is: ${fuel}`;
    document.getElementById("other").innerText = `Other Expences is: ${other}`;
    document.getElementById("extra").innerText = `Extra Income is: ${extra}`;
    document.getElementById("netSalary").innerText = `Net Salary is: ${netSalary}`;
}

calculation();
