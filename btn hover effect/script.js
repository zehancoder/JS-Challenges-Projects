let btn = document.querySelector(".submitBtn");
btn.addEventListener("mouseover", (e) => {
    const x = (e.pageX - btn.offsetLeft);
    let y = (e.pageY - btn.offsetTop);
    btn.style.setProperty("--xPos", x + "px");
    btn.style.setProperty("--yPos", y + "px");
})