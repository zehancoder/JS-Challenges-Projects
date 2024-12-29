let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let calcButton = document.querySelector("#button");
let result = document.querySelector("#result");
let score = document.querySelector(".score");

calcButton.addEventListener("click", () => {
    let newHeight = parseFloat(height.value);
    let newWeight = parseFloat(weight.value);
    newHeight /= 100;
    let sqr = newHeight * newHeight;
    //work for weight
    let bmi = newWeight / sqr;
    // console.log(bmi.toFixed(2));
    score.textContent = bmi.toFixed(2);
    result.style.display = "block";

    if(score.textContent < 18.6){
        score.style.backgroundColor = "red";
    }else if(score.textContent < 24.9){
        score.style.backgroundColor = "green";
    }else{
        score.style.backgroundColor = "blue";
    }
});





let form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
})