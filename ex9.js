const user = {
    nome: "Gabriel",
    idade: 22,
    email: "gabriel@gmail.com",
    brasileiro:true,
    genero: "masculino" 
}

const filmes = [
    {
        titulo: "Vingadores",
        ano: 2012,
        genero: "Ação",
        paraMaiorDeIdade: false
    },
    {
        titulo: "Tropa de Elite",
        ano: 2007,
        genero: "Ação",
        paraMaiorDeIdade: true

    }
]

if(user.idade >=  18 && user.genero === "masculino") {
    console.log(`${user.nome} deve se alistar!`)
    return
}

console.log(`${user.nome} não precisa se alistar!`)