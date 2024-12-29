let parent = document.querySelector(".parent");

let careers = ["You Tuber", "Web Developer", "Frelancer", "Designer"];
let careersIndex = 0;// arrray index 3
let charIndex = 0; // array string index carrers

updateText();
function updateText(){
    parent.innerHTML = `<span class="span">Hello I'am ${
        careers[careersIndex].slice(0, charIndex + 1)
    }</span>`;
    charIndex++;
    if(charIndex === careers[careersIndex].length){
         careersIndex++;
        charIndex = 0;
    }
    if(careersIndex === careers.length){
        careersIndex= 0;
    }
    setTimeout(() => {
        updateText();
    }, 300)
}