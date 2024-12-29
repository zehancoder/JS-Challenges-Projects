let btnContainer = document.querySelector(".btnContainer");
let btn = document.querySelector(".btn");
let body = document.querySelector("body")
btnContainer.addEventListener("click", () => {
    btn.classList.toggle("btnToggle");
    body.classList.toggle("bodyBg")
})