const divContent = document.querySelector("#content");

export function cargaDocumento() {
    //document.addEventListener("DOMContentLoaded", function(event){
        divContent.innerText ="";
    const tituloPrincipal = document.createElement("h1");
    tituloPrincipal.innerText = "Bienvenidos al restaurant";
    divContent.appendChild(tituloPrincipal);

    const imgPrincipal = document.createElement("img");
    imgPrincipal.alt = "Exterior del restaurant";
    divContent.appendChild(imgPrincipal);

    const parrafoPrincipal = document.createElement("p");
    parrafoPrincipal.innerText = "lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, ";
    divContent.appendChild(parrafoPrincipal);
    //});
}

export function cargaMenu(){
    divContent.innerText ="";
    const menuUno = document.createElement("h2");
    menuUno.innerText = "Menu Uno";
    divContent.appendChild(menuUno);
}

export function cargaContacto(){
    divContent.innerText ="";
    const menuContacto = document.createElement("h2");
    menuContacto.innerText = "Contacto";
    divContent.appendChild(menuContacto);
}