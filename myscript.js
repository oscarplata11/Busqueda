function busqueda(){
    var palabraBuscada=document.getElementById("buscador").value;

     if(palabraBuscada==""){
        document.getElementById("muestraResultado").value="Debe escribir una palabra a buscar";
    }
    else{
        if(palabraBuscada=="azul" || palabraBuscada=="AZUL" || palabraBuscada=="Azul" || palabraBuscada=="verde" || palabraBuscada=="VERDE" || palabraBuscada=="Verde" || palabraBuscada=="rojo" || palabraBuscada=="ROJO" || palabraBuscada=="Rojo"){
            document.getElementById("muestraResultado").value="Palabra encontrada";
        }
            else{
                document.getElementById("muestraResultado").value="Palabra NO encontrada";
            }
    }

}

function limpiar(){
    window.close();
}

function reiniciar(){
    document.getElementById("muestraResultado").value="";
    document.getElementById("buscador").value="";
}