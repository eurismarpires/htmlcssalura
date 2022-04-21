// 1- var, let , const

var x = 10
var y = 15
console.log("Imprimir o var")
if(y > 10){
    var x = 5;
    console.log(x)
}

console.log(x)

console.log("Imprimir o let")
let a = 10;
let b = 15;

if (b > 10){
    let a = 5;
    console.log("o valor do a dentro do if é " + a)
}

console.log(a)


const user = {
     name: "Theo",
     sayUserName(){
         var self = this
         setTimeout(function(){
            console.log(self);
            console.log("UserName: " + self.name)
         },3000)
     }
}

user.sayUserName()

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout('startTime()', 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// 3 - filter

const arr = [1,2,3,4,5,6,7,8,9,10]

const numerosPares = arr.filter((n) => {
    if (n % 2 == 0){
        return n
    }
})
console.log("Vou imprimir os numeros pares")
console.log(numerosPares)

const users = [
    {name: "Eurismar", availiable: true},
    {name: "Elisangela", availiable: false},
    {name: "Kathlem", availiable: false},
    {name: "Hevellyn", availiable: true},

]

const availableUsers =  users.filter((user)=>user.availiable)
console.log("Usuários disponíveis:")
console.log(availableUsers)

//template

const userName = 'Eurismar'
const age = 41

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos`)

//destructurin

const fruits = ["Maçã", "Laranja", "Mamão"]
const [f1, f2, f3] = fruits;
console.log(f1) 
console.log(f3)