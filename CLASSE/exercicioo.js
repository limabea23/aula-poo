class Pessoa {
    constructor(nome, idade, altura){
        this.nome = nome
        this.idade = idade 
        this.altura = altura
    }
}

const user = new Pessoa ("Beatriz", 17, 1.77)
const user1 = new Pessoa ("Harry Styles", 30, 1.83)

console.log(user);
console.log(user1);