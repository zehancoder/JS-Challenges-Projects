let parent = document.querySelector(".parent");

let careers = ["You Tuber", "Content Creator", "Web Developer"];
let careersIndex = 0;// arrray index 3
let charIndex = 0; // array string index carrers

updateText();
function updateText(){
    parent.innerHTML = `<span class="span">Hello I'am ${
        careers[careersIndex].slice(0, charIndex)
    }</span>`;
    charIndex++;
    if(charIndex === careers[careersIndex].length + 1){
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