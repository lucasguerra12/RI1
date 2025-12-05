
function criarPersonagem(nome, codinome, armaPrincipal, armaSecundaria, velocidade, forca, resistencia) {
    return {
        nome: nome,
        codinome: codinome,
        armaPrincipal: armaPrincipal,
        armaSecundaria: armaSecundaria,
        velocidade: velocidade, 
        forca: forca,           
        resistencia: resistencia, 

        descricao: function () {
            return "Nome do personagem: " + this.nome + "\n" +
                   "Codinome do personagem: " + this.codinome + "\n" +
                   "Arma principal: " + this.armaPrincipal + "\n" +
                   "Arma secundária: " + this.armaSecundaria + "\n" +
                   "Nível de força: " + this.forca + "\n" +
                   "Nível de velocidade: " + this.velocidade + "\n" +
                   "Nível de resistência: " + this.resistencia;
        }
    };
}

const capitao = criarPersonagem("Steve Rogers", "Capitão América", "Escudo", "", 85, 75, 80);
const thor = criarPersonagem("Thor Odinson", "Thor", "Stormbreaker", "Mjolnir", 80, 100, 90);
const homemFerro = criarPersonagem("Tony Stark", "Homem de Ferro", "Mark 85", "Repulsores", 90, 80, 75);
const thanos = criarPersonagem("Thanos", "Thanos", "Manopla", "Espada Dupla", 70, 100, 95);

const listaDePersonagens = [capitao, thor, homemFerro];

console.log("=== BATALHA MARVEL: VINGADORES VS THANOS ===");

for (let i = 0; i < listaDePersonagens.length; i++) {
    let heroi = listaDePersonagens[i];

    console.log("\n---------------------------------------------------");
    console.log(heroi.descricao());
    console.log("---------------------------------------------------");
    console.log("RESULTADO VS THANOS:");

    // Comparação de Força 
    if (heroi.forca > thanos.forca) {
        console.log(`Força: ${heroi.codinome} venceu! (${heroi.forca} vs ${thanos.forca})`);
    } else if (heroi.forca < thanos.forca) {
        console.log(`Força: Thanos venceu. (${thanos.forca} vs ${heroi.forca})`);
    } else {
        console.log(`Força: Empate! (${heroi.forca})`);
    }

    // Comparação de Velocidade 
    if (heroi.velocidade > thanos.velocidade) {
        console.log(`Velocidade: ${heroi.codinome} venceu! (${heroi.velocidade} vs ${thanos.velocidade})`);
    } else {
        console.log(`Velocidade: Thanos venceu. (${thanos.velocidade} vs ${heroi.velocidade})`);
    }

    // Comparação de Resistência 
    if (heroi.resistencia > thanos.resistencia) {
        console.log(`Resistência: ${heroi.codinome} venceu! (${heroi.resistencia} vs ${thanos.resistencia})`);
    } else {
        console.log(`Resistência: Thanos venceu. (${thanos.resistencia} vs ${heroi.resistencia})`);
    }
}