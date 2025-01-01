let dayEle = document.querySelector(".day");
let hourEle = document.querySelector(".hour");
let minuteEle = document.querySelector(".Minute");
let secondEle = document.querySelector(".second");
let parentContainer = document.querySelector(".parentContainer");

let myDate = new Date("jan 1, 2026 00:00:00").getTime();


setInterval(() => {
    decress();
}, 1000);

let decress = () => {
  let presendDate = new Date().getTime();
  let count = myDate - presendDate;

  if(myDate > presendDate){
    let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let d = Math.floor(count / day);
  let h = Math.floor((count % day) / hour);
  let m = Math.floor((count % hour) / minute);
  let s = Math.floor((count % minute) / second);

  if (s < 10) {
    s = "0" + s;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (h < 10) {
    h = "0" + h;
  }
  if (d < 10) {
    d = "0" + d;
  }

//   h = "00";
//   m = "00";
//   d = "00";
//   s = "00";

  dayEle.innerText = d;
  hourEle.innerText = h;
  minuteEle.innerText = m;
  secondEle.innerText = s;
  
  }
  
};


console.log(Math.floor(1500 % 60));

