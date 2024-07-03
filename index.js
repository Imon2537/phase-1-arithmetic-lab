// Write your code here
function multiplication(num1, num2){
   return num1 * num2
}
multiplication()
let num1 = 2
let num2 = 31

let multiply = multiplication(num1, num2)
console.log(multiply)


function getRandomIntGreaterThanZero() {
    return Math.floor(Math.random() * 100) + 1; 
}


let random = getRandomIntGreaterThanZero();


console.log("Random integer greater than 0: " + random);


function modulus(num3, num4){
    return num3 % num4 
}

let num3 = 10
let num4 = 6
let mod = modulus(num3, num4)

function highestNumber (){
    for (let i = 1; i <= 30; i++){
        if (i == 20){
            return i
        }
    }
}

let max = highestNumber()
console.log(max)