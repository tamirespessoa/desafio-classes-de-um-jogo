// Definindo a classe Heroi
class Heroi {
  // O construtor recebe nome, idade e tipo e os armazena nas propriedades
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método atacar
  atacar() {
    // Definindo o ataque dependendo do tipo do herói
    let ataque;
    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "ataque desconhecido"; // Caso o tipo não seja reconhecido
    }

    // Exibe a mensagem de ataque
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando instâncias de heróis com diferentes tipos
const heroiMago = new Heroi("Merlin", 150, "mago");
const heroiGuerreiro = new Heroi("Arthur", 35, "guerreiro");
const heroiMonge = new Heroi("Shaolin", 50, "monge");
const heroiNinja = new Heroi("Hattori", 30, "ninja");

// Chamando o método atacar para cada herói
heroiMago.atacar();       // Saída: O mago atacou usando magia
heroiGuerreiro.atacar();  // Saída: O guerreiro atacou usando espada
heroiMonge.atacar();      // Saída: O monge atacou usando artes marciais
heroiNinja.atacar();      // Saída: O ninja atacou usando shuriken
