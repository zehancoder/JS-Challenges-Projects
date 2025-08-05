<<<<<<< HEAD
let textArea = document.querySelector("textarea");
let total = document.querySelector(".totalNum");
let remain = document.querySelector(".remainNum");
let a = 0;
let b = 50;
remain.innerText = b;
textArea.maxLength = b;
total.innerText = 0;
textArea.addEventListener("input", (e) => {
    updateText(e);
});
let updateText = (e) => {
    if(0 < b){
        remain.innerText = b - e.target.value.length;
        
    }
    if(0 <= a){
        
        total.innerText = e.target.value.length;
    }
=======
let textArea = document.querySelector("textarea");
let total = document.querySelector(".totalNum");
let remain = document.querySelector(".remainNum");
let a = 0;
let b = 50;
remain.innerText = b;
textArea.maxLength = b;
total.innerText = 0;
textArea.addEventListener("input", (e) => {
    updateText(e);
});
let updateText = (e) => {
    if(0 < b){
        remain.innerText = b - e.target.value.length;
        
    }
    if(0 <= a){
        
        total.innerText = e.target.value.length;
    }
>>>>>>> 805f7f21d4f3d96671f18ff330e831b589e2542c
}