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
}