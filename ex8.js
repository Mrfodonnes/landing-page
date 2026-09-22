const dias = 4
const valorDia = 135.33

let calculo = dias * valorDia

if(dias > 10) {
    const desconto = calculo * 0.15
    calculo = calculo - desconto
}

if(dias < 5) {
    const acrescimo = calculo * 0.20
    calculo = calculo + acrescimo
}

console.log(`O valor final é ${calculo.toFixed(2)}`)