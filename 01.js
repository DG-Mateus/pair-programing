//declaramos a variavel e atribuimos um valor a ela
let semaforo = "verde";
// após atribuir o valor "verde" para a variavel o código analisará se é verdadeiro, se for verdadeiro ele imprimirá a mensagem "Pode passar".
if (semaforo=="verde") {
    console.log("Pode passar");
    //se e o valor da variavel for falsa (senão), ele imprimirá no console "Parar".
}else if (semaforo == "vermelho") {
    console.log("Parar");
    //caso nenhuma das condições forem verdadeiras ele imprimirá outra "mensagem"
}else {
    console.log("Atenção!")
}
