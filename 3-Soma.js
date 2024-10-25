//3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
//Ao final do processamento, qual será o valor da variável SOMA?

//O RESULTADO FINAL DA SOMA É 77

const INDICE = 12;
let soma = 0;
let k = 1

while(k < INDICE){
    k += 1;
    soma += k;
    console.log(soma);
}