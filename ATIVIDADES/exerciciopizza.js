class Pizza {
    constructor(base, molho, cobertura,queijo){
        this.base = base
        this.molho = molho
        this.cobertura = cobertura
        this.queijo = queijo
    }
    apresentandoPizza(){
        console.log(`Pizza com ${this.base}, molho de ${this.molho}, cobertura de ${this.cobertura} e queijo ${this.queijo}.`)
    }
}

const pizza = new Pizza ("massa grossa", "tomate", "frango", "mussarela")

pizza.apresentandoPizza()