

function fullProject () {
    let quoteGeneratorObject = [
        {
            quotes: "সব দুঃখের মূল এই দুনিয়ার প্রতি অত্যাধিক আকর্ষণ।",
            author: "– হযরত আলী (রাঃ)"
        },
        {
            quotes: "একজন আহত ব্যক্তি তার যন্ত্রনা যত সহজে ভুলে যায়, একজন অপমানিত ব্যক্তি তত সহজে অপমান ভোলে না।",
            author: "– জর্জ লিললো"
        },
        {
            quotes: " অসহায়কে অবজ্ঞা করা উচিত নয়, কারণ মানুষ মাত্রেই জীবনের কোন না কোন সময় অসহায়তার শিকার হবে।",
            author: "– গোল্ড স্মিথ"
        },
        {
            quotes: "ভবিষ্যতে যার কাছ থেকে তুমি সবচেয়ে বড় কষ্টটি পাবে, আজ সে তোমার সবচেয়ে কাছের কোন একজন। ",
            author: "– রেদোয়ান মাসুদ"
        },
        {
            quotes: "প্রত্যেককে বিশ্বাস করা বিপদজনক; কিন্তু কাউকে বিশ্বাস না করা আরো বেশী বিপদজনক।",
            author: "– আব্রাহাম লিংকন"
        },
        {
            quotes: "অসৎ লোক কাউকে সৎ মনে করে না, সকলকেই সে নিজের মত ভাবে।",
            author: "– হজরত আলী (রাঃ)"
        },
        {
            quotes: "মানুষ প্রতিষ্ঠিত হওয়ার পরে যেই ব্যবহারটা করে সেটাই তার আসল চরিত্র। ",
            author: "– রেদোয়ান মাসুদ"
        },
        {
            quotes: "আমি আল্লাহকে সবচেয়ে বেশি ভয় পাই। তারপর সেই মানুষকে ভয় পাই যে আল্লাহকে মোটেই ভয় পায় না। ",
            author: "– শেখ সাদী"
        },
        {
            quotes: "যে দৃষ্টির সঙ্গে মনের যোগাযোগ নেই সে তো দেখা নয়, তাকানো।",
            author: "- যাযাবর"
        },
        {
            quotes: "পূর্ণ অর্জন অপেক্ষায়, পাপ বর্জন করা শ্রেষঠতর।",
            author: "- হজরত আলী (রাঃ)"
        },
        {
            quotes: " সে ব্যক্তি মুমিন নয় যে নিজে তৃপ্তি সহকারে আহার করে, অথচ তার প্রতিবেশী অনাহারে থাকে।",
            author: "- আল হাদিস"
        },
        {
            quotes: " প্রাপ্তি আর প্রত্যাশার পার্থক্য হল দুঃখ। তাই নিজের প্রত্যাশাটা একটু কমিয়ে ফেলুন, দেখবেন আপনার দুঃখও কমে গেছে।",
            author: "- রেদোয়ান মাসুদ"
        },
        {
            quotes: "যারা নিজেকে নিয়ে ব্যস্ত থাকে তারা কখনও অন্যের দুঃখ কষ্টকে উপলদ্ধি করতে পারেনা। ",
            author: "রেদোয়ান মাসুদ"
        },
        {
            quotes: "জীবনকে এক পেয়ালা চায়ের সাথে তুলনা করা যেতে পারে। যতই তৃপ্তির সাথে আমরা তা পান করি ততই দ্রুত তলার দিকে অগ্রসর হতে থাকি।",
            author: " - ক্রিনেট"
        },
        {
            quotes: "মানুষের সর্বোচ্চ সাফল্য সবটুকু করতে পারায় নয়, সাধ্যমত করতে পারায়।",
            author: "- সংগৃহীত"
        },
        {
            quotes: "বিপদে মোরে রক্ষা করো এ নহে মোর প্রার্থনা। ",
            author: "– রবীন্দ্রনাথ ঠাকুর"
        },
        {
            quotes: "যাকে শ্রদ্ধা করা যায় না, তাকে হৃদয় দিয়ে ভালবাসাও যায় না।",
            author: "– সুইফ্ট"
        },
    ];
    
    let quote = document.querySelector(".quote-Text");
    let author = document.querySelector(".author-name");
    let button = document.querySelector(".btn");
    
    
    let autoReloadGenerator = () => {
        let random = Math.floor(Math.random() * quoteGeneratorObject.length);
        quote.innerHTML ="`"+ quoteGeneratorObject[random].quotes;
        author.innerHTML = quoteGeneratorObject[random].author;
    }
    
    autoReloadGenerator();
    
    
    let quoteChanger = () => {
        button.addEventListener("click", () => {
        let random = Math.floor(Math.random() * quoteGeneratorObject.length);
        quote.innerHTML ="`"+ quoteGeneratorObject[random].quotes;
        author.innerHTML = quoteGeneratorObject[random].author;
        })
    
    }
    
    quoteChanger();
}

fullProject();