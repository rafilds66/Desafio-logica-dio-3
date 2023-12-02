class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age =  age;
        this.type = type;
    }

    figth() {
        let atack;
        switch (this.type) {
            case "mago":
                atack = "usou magia";
                break;
            case "guerreiro":
                atack = "usou espada";
                break;
            case "monge":
                atack = "usou artes marciais";
                break;
            case "ninja":
                atack = "usou shuriken";
                break;
            default:
                atack = "usou um ataque indefinido";
        }

        const mensagem = `O ${this.type} ${this.name} atacou usando ${atack}`;
        console.log(mensagem);
    }
}

// Exemplo de uso
const heroMage = new Hero("Melkor", 100, "mago");
const heroWarrior = new Hero("Ghutor", 30, "guerreiro");
const heroMonk = new Hero("Vanir", 25, "monge");
const heroNinja = new Hero("Hanzo", 28, "ninja");

heroMage.figth();
heroWarrior.figth();
heroMonk.figth();
heroNinja.figth();