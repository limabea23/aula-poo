class Pessoa {
    constructor(nome, idade, altura){
        this.nome = nome
        this.idade = idade 
        this.altura = altura
    }
    seApresentar(){ //método
        console.log(`Oii, eu sou a ${this.nome}, tenho ${this.idade} anos e minha altura é de ${this.altura}.`);
    }
}

const user = new Pessoa ("Beatriz", 17, 1.77)
const user1 = new Pessoa ("Harry Styles", 30, 1.83)

user.seApresentar()
user1.seApresentar() //isso que é método

//console.log(user);
//console.log(user1);