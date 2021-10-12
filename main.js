//capturar elementos de DOM
const shareIcon = document.querySelector(".share__icon");
const toolTip = document.querySelector(".tooltip")

//EScuchar el eveneto click
shareIcon.addEventListener("click" , () => {
    toolTip.classList.toggle("active");
});