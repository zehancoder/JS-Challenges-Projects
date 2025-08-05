<<<<<<< HEAD
let mainOpitionContainer = document.querySelector("#mainOpitionContainer");
let container = document.querySelector(".container");
let allOptions = document.querySelectorAll(".options");
let mainImg = document.querySelector("#mainImg");
let textImg = document.querySelector("#TextImg");
let innerImgText = document.querySelector(".innerText");
let TextColorInput = document.querySelector("#TextColorInput");
let imgColorInput = document.querySelector("#imgColorInput");
let urlDiv = document.querySelector(".urlDiv")
let img = document.querySelector("#img")

if ((allOptions[0].selected = true)) {
  mainImg.style.height = "50px";
  mainImg.style.width = "100px";
  mainImg.style.backgroundColor = `${imgColorInput.value}`;
  mainImg.style.color = "white";
  TextColorInput.value = "#FAFAFA";
}

mainOpitionContainer.addEventListener("change", (e) => {
  e.preventDefault();
  changeSizes();
  console.log(mainImg.clientHeight);
//   let url = `http://via.placeholder.com/${mainImg.clientWidth}${mainImg.clientHeight}/${imgColorInput.value.slice(1, imgColorInput.value.length)}/${TextColorInput.value.slice(1, TextColorInput.value.length)}?text=${innerImgText.innerText}`
//   urlDiv.innerText = url;
//   img.src = url
});

let textContent = "";
let inputLength = 0;
textImg.addEventListener("input", (e) => {
  e.preventDefault();
  textContent = e.target.value;
  innerImgText.innerText = textContent;
  inputLength = inputLength + 1;
  if (allOptions[0].selected == true) {
    textImg.maxLength = 8;
  }
});

let changeSizes = () => {
  for (let val of allOptions) {
    if (val.selected == true) {
      // if(val.id == "medium"){
      //     console.log(val)
      // }
      switch (val.id) {
        case "small":
          mainImg.style.height = "50px";
          mainImg.style.width = "100px";

          break;
        case "mediumSqr":
          textImg.disabled = false;
          mainImg.style.height = "200px";
          mainImg.style.width = "200px";

          textImg.maxLength = 100;

          break;
        case "medium":
          textImg.disabled = false;
          mainImg.style.height = "150px";
          mainImg.style.width = "350px";
          textImg.maxLength = 110;
          break;
        case "largeSqr":
          textImg.disabled = false;
          mainImg.style.height = "400px";
          mainImg.style.width = "400px";
          textImg.maxLength = 235;
          break;
        case "large":
          textImg.disabled = false;
          mainImg.style.height = "350px";
          mainImg.style.width = "650px";
          textImg.maxLength = 340;
          break;
        case "xLarge":
          textImg.disabled = false;
          mainImg.style.height = "600px";
          mainImg.style.width = "800px";
          textImg.maxLength = 540;

          break;
        case "HD":
          textImg.disabled = false;
          mainImg.style.height = "1080px";
          mainImg.style.width = "1920px";
          textImg.maxLength = 1600;
          break;
      }
    }
  }
};

function changeColor() {
  imgColorInput.addEventListener("change", (e) => {
    e.preventDefault();
    mainImg.style.backgroundColor = `${imgColorInput.value}`;
  });
  TextColorInput.addEventListener("change", (e) => {
    e.preventDefault();
    mainImg.style.color = `${TextColorInput.value}`;
  });
}
changeColor();

function controltextSize() {
  let arrows = document.querySelector(".arrows");
  let trackFontSize = document.querySelector("#fontSize");

  let text = 17;
  trackFontSize.innerText = text;
  arrows.firstElementChild.addEventListener("click", (e) => {
    e.preventDefault();

    for (let val of allOptions) {
      if (val.selected == true) {
        if (val.id == "small") {
          text = 17;
          alert("Max Font size is 17 for this image");
          innerImgText.style.fontSize = `${text}px`;
          fontSize.innerText = text;
        } else if (val.id == "mediumSqr") {
          text < 20
            ? (text += 3)
            : (() => {
                text = 20;
                alert("Max Font size is 20 for this image");
              })();
          innerImgText.style.fontSize = `${text}px`;
          fontSize.innerText = text;
        } else if (val.id == "medium") {
          text < 23
            ? (text += 3)
            : (() => {
                text = 23;
                alert("Max Font size is 23 for this image");
              })();
          innerImgText.style.fontSize = `${text}px`;
          fontSize.innerText = text;
        } else if (val.id == "largeSqr") {
          text < 26
            ? (text += 3)
            : (() => {
                text = 26;
                alert("Max Font size is 26 for this image");
              })();
          innerImgText.style.fontSize = `${text}px`;
          fontSize.innerText = text;
        } else if (val.id == "large") {
          text < 29
            ? (text += 3)
            : (() => {
                text = 29;
                alert("Max Font size is 29 for this image");
              })();
          innerImgText.style.fontSize = `${text}px`;
          fontSize.innerText = text;
        } else if (val.id == "xLarge") {
          text < 31
            ? (text += 3)
            : (() => {
                text = 31;
                alert("Max Font size is 31 for this image");
              })();
          innerImgText.style.fontSize = `${text}px`;
          fontSize.innerText = text;
        } else if (val.id == "HD") {
          text < 40
            ? (text += 3)
            : (() => {
                text = 40;
                alert("Max Font size is 37 for this image");
              })();
          innerImgText.style.fontSize = `${text}px`;
          fontSize.innerText = text;
        }
      }
    }
  });

  arrows.lastElementChild.addEventListener("click", () => {
    if (text > 17) {
      text -= 3;
      innerImgText.style.fontSize = `${text}px`;
      fontSize.innerText = text;
    }
    if (text <= 17) {
      alert("Min Font size is 17 for this Image")
    }
  });
}
controltextSize();

=======
let mainOpitionContainer = document.querySelector("#mainOpitionContainer");
let container = document.querySelector(".container");
let allOptions = document.querySelectorAll(".options");
let mainImg = document.querySelector("#mainImg");
let textImg = document.querySelector("#TextImg");
let innerImgText = document.querySelector(".innerText");
let TextColorInput = document.querySelector("#TextColorInput");
let imgColorInput = document.querySelector("#imgColorInput");
let urlDiv = document.querySelector(".urlDiv")
let img = document.querySelector("#img")

if ((allOptions[0].selected = true)) {
  mainImg.style.height = "50px";
  mainImg.style.width = "100px";
  mainImg.style.backgroundColor = `${imgColorInput.value}`;
  mainImg.style.color = "white";
  TextColorInput.value = "#FAFAFA";
}

mainOpitionContainer.addEventListener("change", (e) => {
  e.preventDefault();
  changeSizes();
  console.log(mainImg.clientHeight);
//   let url = `http://via.placeholder.com/${mainImg.clientWidth}${mainImg.clientHeight}/${imgColorInput.value.slice(1, imgColorInput.value.length)}/${TextColorInput.value.slice(1, TextColorInput.value.length)}?text=${innerImgText.innerText}`
//   urlDiv.innerText = url;
//   img.src = url
});

let textContent = "";
let inputLength = 0;
textImg.addEventListener("input", (e) => {
  e.preventDefault();
  textContent = e.target.value;
  innerImgText.innerText = textContent;
  inputLength = inputLength + 1;
  if (allOptions[0].selected == true) {
    textImg.maxLength = 8;
  }
});

let changeSizes = () => {
  for (let val of allOptions) {
    if (val.selected == true) {
      // if(val.id == "medium"){
      //     console.log(val)
      // }
      switch (val.id) {
        case "small":
          mainImg.style.height = "50px";
          mainImg.style.width = "100px";

          break;
        case "mediumSqr":
          textImg.disabled = false;
          mainImg.style.height = "200px";
          mainImg.style.width = "200px";

          textImg.maxLength = 100;

          break;
        case "medium":
          textImg.disabled = false;
          mainImg.style.height = "150px";
          mainImg.style.width = "350px";
          textImg.maxLength = 110;
          break;
        case "largeSqr":
          textImg.disabled = false;
          mainImg.style.height = "400px";
          mainImg.style.width = "400px";
          textImg.maxLength = 235;
          break;
        case "large":
          textImg.disabled = false;
          mainImg.style.height = "350px";
          mainImg.style.width = "650px";
          textImg.maxLength = 340;
          break;
        case "xLarge":
          textImg.disabled = false;
          mainImg.style.height = "600px";
          mainImg.style.width = "800px";
          textImg.maxLength = 540;

          break;
        case "HD":
          textImg.disabled = false;
          mainImg.style.height = "1080px";
          mainImg.style.width = "1920px";
          textImg.maxLength = 1600;
          break;
      }
    }
  }
};

function changeColor() {
  imgColorInput.addEventListener("change", (e) => {
    e.preventDefault();
    mainImg.style.backgroundColor = `${imgColorInput.value}`;
  });
  TextColorInput.addEventListener("change", (e) => {
    e.preventDefault();
    mainImg.style.color = `${TextColorInput.value}`;
  });
}
changeColor();

function controltextSize() {
  let arrows = document.querySelector(".arrows");
  let trackFontSize = document.querySelector("#fontSize");

  let text = 17;
  trackFontSize.innerText = text;
  arrows.firstElementChild.addEventListener("click", (e) => {
    e.preventDefault();

    for (let val of allOptions) {
      if (val.selected == true) {
        if (val.id == "small") {
          text = 17;
          alert("Max Font size is 17 for this image");
          innerImgText.style.fontSize = `${text}px`;
          fontSize.innerText = text;
        } else if (val.id == "mediumSqr") {
          text < 20
            ? (text += 3)
            : (() => {
                text = 20;
                alert("Max Font size is 20 for this image");
              })();
          innerImgText.style.fontSize = `${text}px`;
          fontSize.innerText = text;
        } else if (val.id == "medium") {
          text < 23
            ? (text += 3)
            : (() => {
                text = 23;
                alert("Max Font size is 23 for this image");
              })();
          innerImgText.style.fontSize = `${text}px`;
          fontSize.innerText = text;
        } else if (val.id == "largeSqr") {
          text < 26
            ? (text += 3)
            : (() => {
                text = 26;
                alert("Max Font size is 26 for this image");
              })();
          innerImgText.style.fontSize = `${text}px`;
          fontSize.innerText = text;
        } else if (val.id == "large") {
          text < 29
            ? (text += 3)
            : (() => {
                text = 29;
                alert("Max Font size is 29 for this image");
              })();
          innerImgText.style.fontSize = `${text}px`;
          fontSize.innerText = text;
        } else if (val.id == "xLarge") {
          text < 31
            ? (text += 3)
            : (() => {
                text = 31;
                alert("Max Font size is 31 for this image");
              })();
          innerImgText.style.fontSize = `${text}px`;
          fontSize.innerText = text;
        } else if (val.id == "HD") {
          text < 40
            ? (text += 3)
            : (() => {
                text = 40;
                alert("Max Font size is 37 for this image");
              })();
          innerImgText.style.fontSize = `${text}px`;
          fontSize.innerText = text;
        }
      }
    }
  });

  arrows.lastElementChild.addEventListener("click", () => {
    if (text > 17) {
      text -= 3;
      innerImgText.style.fontSize = `${text}px`;
      fontSize.innerText = text;
    }
    if (text <= 17) {
      alert("Min Font size is 17 for this Image")
    }
  });
}
controltextSize();

>>>>>>> 805f7f21d4f3d96671f18ff330e831b589e2542c
