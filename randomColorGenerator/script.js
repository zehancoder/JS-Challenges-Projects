<<<<<<< HEAD
let parent = document.querySelector(".container");


for(let i = 0; i <= 50; i++){
    let newEle = document.createElement("div");
    newEle.classList.add("child")
    parent.appendChild(newEle)
}

let myChild = document.querySelectorAll(".child");
change();
function change() {
    myChild.forEach((val) => {
        let geneFunc = createNewCode();
        val.style.backgroundColor = "#" + geneFunc;
        val.innerText = "#" + geneFunc;
    })
}


function createNewCode(){
    let colorsCodes = "123456789abcdef";
    let colorCodeLenght = 6;
    let codeStr = "";
    for(let i = 0; i < colorCodeLenght; i++){
        
        let selectCodeIdx = Math.floor(Math.random() * colorsCodes.length);
        codeStr += colorsCodes.substring(selectCodeIdx, selectCodeIdx + 1);  
        
    }

    return codeStr;
}




=======
let parent = document.querySelector(".container");


for(let i = 0; i <= 50; i++){
    let newEle = document.createElement("div");
    newEle.classList.add("child")
    parent.appendChild(newEle)
}

let myChild = document.querySelectorAll(".child");
change();
function change() {
    myChild.forEach((val) => {
        let geneFunc = createNewCode();
        val.style.backgroundColor = "#" + geneFunc;
        val.innerText = "#" + geneFunc;
    })
}


function createNewCode(){
    let colorsCodes = "123456789abcdef";
    let colorCodeLenght = 6;
    let codeStr = "";
    for(let i = 0; i < colorCodeLenght; i++){
        
        let selectCodeIdx = Math.floor(Math.random() * colorsCodes.length);
        codeStr += colorsCodes.substring(selectCodeIdx, selectCodeIdx + 1);  
        
    }

    return codeStr;
}




>>>>>>> 805f7f21d4f3d96671f18ff330e831b589e2542c
