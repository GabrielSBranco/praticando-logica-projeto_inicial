let valor = {
    quantidade: 0, 
    de: 0, 
    ate: 0,
};

function sortear() {
    valor.quantidade = document.getElementById("quantidade").value;
    valor.de = document.getElementById("de").value;
    valor.ate = document.getElementById("ate").value;
    if (!valor.quantidade || !valor.de || !valor.ate) {
        console.log( "Existem campo(s) vazio(s)!" );
        return;
    }
    if (valor.de > valor.ate) {
        console.log(`O valor "de" está maior que o valor "até"!`);
        return;
    }
    console.log("Valores Digitados:"+ ` 
    Quantidade: ${valor.quantidade}
    De: ${valor.de}
    Até: ${valor.ate}
`);
}
