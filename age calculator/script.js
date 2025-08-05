<<<<<<< HEAD
let calcbtn = document.querySelector(".calculateBtn");
let inputs = document.querySelector(".input");
let age = document.querySelector(".ageNum");

calcbtn.addEventListener("click", () => {
    let inputVal = inputs.value;
    if(inputVal == ""){
        alert("please enter your birthday")
    }else{
        let newDate = new Date();
        let myDate = new Date(inputVal);
        let year = newDate.getFullYear() - myDate.getFullYear();
        let month = newDate.getMonth() - myDate.getMonth()
        if(month < 0 || (month === 0 && newDate.getDate() < myDate.getDate())){
            year--;
        }
        age.innerHTML = `your age is ${year}`
    }
    
})
=======
let calcbtn = document.querySelector(".calculateBtn");
let inputs = document.querySelector(".input");
let age = document.querySelector(".ageNum");

calcbtn.addEventListener("click", () => {
    let inputVal = inputs.value;
    if(inputVal == ""){
        alert("please enter your birthday")
    }else{
        let newDate = new Date();
        let myDate = new Date(inputVal);
        let year = newDate.getFullYear() - myDate.getFullYear();
        let month = newDate.getMonth() - myDate.getMonth()
        if(month < 0 || (month === 0 && newDate.getDate() < myDate.getDate())){
            year--;
        }
        age.innerHTML = `your age is ${year}`
    }
    
})
>>>>>>> 805f7f21d4f3d96671f18ff330e831b589e2542c
