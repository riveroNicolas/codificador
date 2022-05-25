var textoCopiado = document.querySelector(".form-principal");
var textoDevuelto = document.querySelector(".form-secundario");

function BotonEncriptar(){
    var textoEncriptado = encriptar(textoCopiado.value);
    textoDevuelto.value = textoEncriptado;
}

function encriptar(stringParaEncriptar){
    var matrizCodigo = [["a","manbat"],["e","batman"],["i","alfred"],["o","robin"],["u","joker"]]
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    for (let i=0; i< matrizCodigo.length; i++){
        if(stringParaEncriptar.includes(matrizCodigo[i][0])){
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringParaEncriptar
}