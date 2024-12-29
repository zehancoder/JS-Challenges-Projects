let parent = document.querySelector(".parent");
parent.addEventListener("mousemove", (e) => {
        let span = document.createElement("span");
        span.style.width = Math.random() * 100 + "px";
        span.style.height = Math.random() * 100 + "px";
        parent.appendChild(span);
        span.style.left = e.offsetX + "px";
        span.style.top = e.offsetY + "px";
        span.style.color = "white";
        span.style.fontSize = "20px"
    setTimeout(() => {
        span.remove()
    },3000)
})
