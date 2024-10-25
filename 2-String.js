//2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
//IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

const prompt = require("prompt-sync")();
const palavraEscolhida = prompt("Digite o valor desejado: ");

function verificaLetras(palavra) {
    while(palavra === ''){//verifica se a palavra é vazia
        palavra = prompt("Palavra inválida, digite o valor desejado: ");     
    }

    const array = palavra.split('');//criação de um array com cada letra da palavra
    let minusculas = 0; //inicio as variaves com zero para definilas como numeros
    let maiusculas = 0; 
    let total = 0;

    for(let i = 0; i <= array.length - 1; i++){   //o for passa por indice do array     
        if(array[i].includes('a')){    //caso tiver um a letra a é adicionado no contador       
            minusculas += 1;
        }
        else if(array[i].includes('A')) {
            maiusculas += 1;
        }
    }
    total = maiusculas + minusculas
    
    console.log(`Na palavra ${palavra} a letra "A" aparece ${minusculas} vezes minúscula, ${maiusculas} vezes maiúscula, totalizando ${total} aparições`);
    
}
verificaLetras(palavraEscolhida);