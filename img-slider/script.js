let btn = document.querySelector("button");

let img = document.querySelector(".img");

let body = document.querySelector("body")

let imgArry = [
    "./images/robot1.png",
    "./images/robot2.png",
    "./images/robot3.png",
    "./images/robot4.webp",
    "./images/robot5.jpeg",
    "./images/robot6.jpeg",
    "./images/robot7.jpeg",

]

console.log(imgArry[0])



function sliders () {
    img.src = imgArry[Math.floor(Math.random() * imgArry.length)];
}

sliders();

btn.addEventListener('click', () => {
    img.src = imgArry[Math.floor(Math.random() * imgArry.length)];
})
