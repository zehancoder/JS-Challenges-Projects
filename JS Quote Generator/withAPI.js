let quote = document.querySelector(".quote-Text");
let author = document.querySelector(".author-name");
let button = document.querySelector(".btn");
const API = "https://api.api-ninjas.com/v1/quotes?category={}";

let keyAPI = "olgkKeo9Erm9l4jRuRAdDQ==ahpUcktrUDramjXV";

let getQuote = () => {
  fetch(urlAPI, {
    headers: {
      "X-Api-Key": keyAPI,
    },
  })
    .then((data) => data.json())
    .then((item) => {
        console.log(item)
    });
};

getQuote();
