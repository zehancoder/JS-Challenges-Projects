<<<<<<< HEAD
let imgContainer = document.querySelector(".imgContainer");
let slider = document.querySelector(".slider");
let images = document.querySelectorAll(".imgContainer img");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");

setInterval(() => {
  changeImg();
}, 2000);

let idx = 1;
let changeImg = () => {
  if (idx < images.length) {
    slider.style.transform = `translateX(-${idx * 400}px)`;

    idx++;
  } else {
    slider.style.transform = `translateX(0px)`;
    idx = 1;
  }

  if (idx == 1) {
    one.style.scale = "1.5";
    one.style.backgroundColor = "black";
    two.style.scale = "1";
    two.style.backgroundColor = "gray";
    three.style.scale = "1";
    three.style.backgroundColor = "gray";
  } else if (idx == 2) {
    two.style.scale = "1.5";
    two.style.backgroundColor = "black";
    one.style.scale = "1";
    one.style.backgroundColor = "gray";
    three.style.scale = "1";
    three.style.backgroundColor = "gray";
  } else if (idx == 3) {
    three.style.scale = "1.5";
    three.style.backgroundColor = "black";
    one.style.scale = "1";
    one.style.backgroundColor = "gray";
    two.style.scale = "1";
    two.style.backgroundColor = "gray";
  }
};

// setInterval(() => {
//     changeIdx()
// },400)

// let i = [1,2,3];
// let one = 1;
// let changeIdx = () => {
//     if(one <= i.length){
//         console.log("start");
//         one++
//     }else{
//         console.log("end");
//         one = 1;
//     }
// }
=======
let imgContainer = document.querySelector(".imgContainer");
let slider = document.querySelector(".slider");
let images = document.querySelectorAll(".imgContainer img");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");

setInterval(() => {
  changeImg();
}, 2000);

let idx = 1;
let changeImg = () => {
  if (idx < images.length) {
    slider.style.transform = `translateX(-${idx * 400}px)`;

    idx++;
  } else {
    slider.style.transform = `translateX(0px)`;
    idx = 1;
  }

  if (idx == 1) {
    one.style.scale = "1.5";
    one.style.backgroundColor = "black";
    two.style.scale = "1";
    two.style.backgroundColor = "gray";
    three.style.scale = "1";
    three.style.backgroundColor = "gray";
  } else if (idx == 2) {
    two.style.scale = "1.5";
    two.style.backgroundColor = "black";
    one.style.scale = "1";
    one.style.backgroundColor = "gray";
    three.style.scale = "1";
    three.style.backgroundColor = "gray";
  } else if (idx == 3) {
    three.style.scale = "1.5";
    three.style.backgroundColor = "black";
    one.style.scale = "1";
    one.style.backgroundColor = "gray";
    two.style.scale = "1";
    two.style.backgroundColor = "gray";
  }
};

// setInterval(() => {
//     changeIdx()
// },400)

// let i = [1,2,3];
// let one = 1;
// let changeIdx = () => {
//     if(one <= i.length){
//         console.log("start");
//         one++
//     }else{
//         console.log("end");
//         one = 1;
//     }
// }
>>>>>>> 805f7f21d4f3d96671f18ff330e831b589e2542c
