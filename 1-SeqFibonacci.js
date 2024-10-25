// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
// escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado
// pertence ou não a sequência.
// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const prompt = require("prompt-sync")();//biblioteca para receber entrada do usuário no terminal

const numeroEscolhido = prompt("Digite o valor desejado: ");//captura o valor incluso
const numeroEscolhidoParse = parseInt(numeroEscolhido);// a entrada é no formato String então preciso alterar para inteiro 

if (isNaN(numeroEscolhidoParse) || numeroEscolhidoParse < 0)//verifica se é numero ou menor que zero
{
    return;
}

function geraSequencia() {//função para gerar a sequência
    let sequencia = [0, 1];//se inicia em 0 e 1 para facilitar o for

    for(let i = 2; i < 16; i ++){  //gerei a sequência somente até 16ª posição  
            sequencia[i] = sequencia[i-2] + sequencia[i-1]      
    }
    return sequencia;
}

if(geraSequencia().includes(numeroEscolhidoParse)){
    console.log("O numero escolhido faz parte da sequência de fibonacci");
}else{
    console.log("O numero escolhido não faz parte da sequência de fibonnaci");
}