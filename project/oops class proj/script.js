class student {
    constructor(name , age) {
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`My Name Is ${this.name}.`);
        console.log(`My Age Is ${this.age}.`);
    }

}
let name  = new student("Ruchi",24)
name.greet()

class bus {
    constructor(route , Name){
        this.route = route
        this.Name = Name
    }

    greet(){
        console.log(`Bus Route is ${this.route} .`);
        console.log(`Bus Name is ${this.Name} .`);
        
    }
}
let name1 = new bus("Rajkot-Surat","Mansi")
name1.greet()

class bottle {
    constructor(prise ,material ,  capacity){
        this.prise = prise
        this.material=material
        this.capacity = capacity
    }

    greet(){
       console.log(`Bottle Prise in ${this.prise}.`);
       console.log(`Bottle material in ${this.material}.`);
       console.log(`Bottle capacity is ${this.capacity}.`);
        
        
    }
}
let name2 = new bottle(320,"Still" ,"ml")
name2.greet()

class Bank{
    constructor(AccountNumber,AccountHolderName,Balance){
        this.AccountNumber = AccountNumber
        this.AccountHolderName=AccountHolderName
        this.Balance =Balance
    }

    greet(){
       console.log(`AccountNumber is ${this.AccountNumber}.`);
       console.log(`Bank AccountHolderName in ${this.AccountHolderName}.`);
       console.log(`Bank Balance is ${this.Balance}.`);
        
        
    }
}
let name3 = new Bank(1025,"Ruchi",15000)
name3.greet()

class Hotel{
    constructor(RoomNumber,type,prise){
        this.RoomNumber = RoomNumber
        this.type=type
        this. prise=prise
    }

    greet(){
       console.log(`Hotel RoomNumber in ${this.RoomNumber}.`);
       console.log(`Hotel type in ${this.type}.`);
       console.log(`Hotel Prise in ${this.prise}.`);
        
        
    }
}
let name4 = new Hotel(25,"Ac" , 10000)
name4.greet()