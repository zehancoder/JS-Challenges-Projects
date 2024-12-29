let userImg = document.querySelector(".userImg");
let userText = document.querySelector(".userText");
let userName = document.querySelector(".userName");
let nextBtn = document.querySelector(".nextBtn");

let allInfor = [
  {
    srcL: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&              ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Editing a Philosophical Transactions B issue was well worth the effort - the staff members were helpful, professional and efficient and our issue has had real impact on the field.",
    name: "-Professor Tecumseh Fitch",
  },
  {
    srcL: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "The entire review and production process for Proceedings A has been handled with remarkable professionalism and efficiency. As the editor of an ISI journal, I can appreciate the enormous organizational effort and discipline hidden behind this procedure.",
    name: "-Alexander M Puzrin",
  },
  {
    srcL: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "If a man does not keep pace with his companions, perhaps it is because he hears a different drummer. Let him step to the music which he hears, however measured or far away.",
    name: "-Henry Devid",
  },
  {
    srcL: "https://images.unsplash.com/photo-1678286742832-26543bb49959?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    text: "If you don’t have time to read, you don’t have the time (or the tools) to write. Simple as that",
    name: "–Stephen King",
  },
  {
    srcL: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    text: "“We write to taste life twice, in the moment and in retrospect.”",
    name: "–Anaïs Nin",
  },
  {
    srcL: "https://plus.unsplash.com/premium_photo-1675626487177-c3d2f8d9ccf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    text: "“One day I will find the right words, and they will be simple.”",
    name: "–Jack Kerouac, The Dharma Bums",
  },
  {
    srcL: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    text: "“Either write something worth reading or do something worth writing.”",
    name: "–Benjamin Franklin",
  },
];

let idx = 0;

// for(let i = 0; i < idx.length; i++){
//     idx++;

// }

let imgEle = document.createElement("img");
userImg.append(imgEle);
imgEle.src =
  "https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHx8MHx8fDA%3D";

nextBtn.addEventListener("click", () => {
  changeFunc();
});

setInterval(() => {
  changeFunc();
}, 5000);

let changeFunc = () => {
  let autoSelect =
    allInfor[Math.floor(Math.random(allInfor) * allInfor.length)];
  imgEle.src = autoSelect.srcL;
  userText.innerText = autoSelect.text;
  userName.innerText = autoSelect.name;
};
