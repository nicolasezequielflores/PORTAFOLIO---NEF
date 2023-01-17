const button = document.getElementById("back-to-top");

//Agregando evento click
button.addEventListener("click", () => {
    //Volver al inicio de la pagina
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

