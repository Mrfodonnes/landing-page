const dias = 12
const valorDia = 113.42

let calculo = dias * valorDia

if(dias > 10) {
    calculo = calculo - 50
}

console.log(`O valor final é ${calculo}`)