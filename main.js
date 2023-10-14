import { cargaDocumento } from "./src/index.js";
import { cargaMenu } from "./src/index.js";
import { cargaContacto } from "./src/index.js";
cargaDocumento();

const homeButton = document.getElementById("home");
homeButton.addEventListener("click", () => {
    cargaDocumento();
});

const menuButton = document.getElementById("menu");
menuButton.addEventListener("click", () => {
    cargaMenu();
});

const contactButton = document.getElementById("contact");
contactButton.addEventListener("click", () => {
    cargaContacto();
});

