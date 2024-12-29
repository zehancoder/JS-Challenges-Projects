let imgContainer = document.querySelector(".imageContainer");
let loadBdtn = document.querySelector(".loadMore");
let idx = 5;
loadBdtn.addEventListener("click", () => {
    for(let i = 0; i <= idx; i++){
        let newImg = document.createElement("img");
        newImg.setAttribute("src", `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 2000)}`);
        imgContainer.append(newImg)
    }
})