// Desafio Classificador de nível de Herói

let nomeHeroi = "Ranger Rosa"
let xp = 2500
let nivel;

for (let i = 0; i < 5; i++){
    xp += 1500;
if(xp <= 1000){
    nivel = "Ferro"
} else if (xp <= 2000){
    nivel = "Bronze"
} else if (xp <= 5000){
    nivel = "Prata"
} else if (xp <= 7000){
    nivel = "Ouro"
} else if (xp <= 8000){
    nivel = "Platina"
} else if (xp <= 9000){
    nivel = "Ascendente"
} else if (xp <= 10000){
    nivel = "Imortal"
} else if (xp > 10000){
    nivel = "Radiante"
}console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivel)
}

// criei sas variáveis pedidas no projeto nome e xp;
// criei um array para o nível com uma estrutura de repetição 
// onde verifica em qual xp está e retorna o nível;
// incluí um laço de repetição onde ele repete o array 5x
// adicionando 1500 xp ao xp atual e mostrando seu nível para cada;
// **Dica de uso pode criar um jogo, onde você adiciona o xp inicial
// define quantos xp necessário para cada nível
// coloca para retornar qual nível ele estará se alcançar aquele xp
// na soma você inclui a diferença necessário de um nível para outro. 
// Valeu filipão!