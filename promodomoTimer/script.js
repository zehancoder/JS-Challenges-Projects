<<<<<<< HEAD
let timer = document.querySelector(".timer");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");


let interVal;
let time = 1500;

let timerFunc = () => {

    let minute = Math.floor(time / 60);
    let second = Math.floor(time % 60);
    let fomtted = `${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`
    timer.innerText = fomtted;
    
}

timerFunc();

function startTimer(){
    interVal = setInterval(() => {
        time--;
        timerFunc()
    }, 1000)
}

let stopTime = () => {
    clearInterval(interVal);
}

let resetFunc = () => {
    clearInterval(interVal);
    time = 1500;
    timerFunc()
}

stop.addEventListener("click", () => {
    stopTime()
});
start.addEventListener("click", () => {
    startTimer();
});
=======
let timer = document.querySelector(".timer");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");


let interVal;
let time = 1500;

let timerFunc = () => {

    let minute = Math.floor(time / 60);
    let second = Math.floor(time % 60);
    let fomtted = `${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`
    timer.innerText = fomtted;
    
}

timerFunc();

function startTimer(){
    interVal = setInterval(() => {
        time--;
        timerFunc()
    }, 1000)
}

let stopTime = () => {
    clearInterval(interVal);
}

let resetFunc = () => {
    clearInterval(interVal);
    time = 1500;
    timerFunc()
}

stop.addEventListener("click", () => {
    stopTime()
});
start.addEventListener("click", () => {
    startTimer();
});
>>>>>>> 805f7f21d4f3d96671f18ff330e831b589e2542c
reset.addEventListener("click", resetFunc);