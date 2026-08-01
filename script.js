// ===============================
// PAGE NAVIGATION
// ===============================

let currentPage = 1;

function nextPage(page){

    document
    .getElementById("page"+currentPage)
    .classList.remove("active");

    document
    .getElementById("page"+page)
    .classList.add("active");

    currentPage = page;

}

// ===============================
// MUSIC
// ===============================

const music = document.getElementById("music");

let playing = false;

function toggleMusic(){

    if(playing){

        music.pause();

        playing = false;

        document.querySelector(".music-btn").innerHTML="🔇";

    }

    else{

        music.play();

        playing = true;

        document.querySelector(".music-btn").innerHTML="🔊";

    }

}

// Auto Play After First Click

document.body.addEventListener("click",function(){

    if(!playing){

        music.play();

        playing=true;

        document.querySelector(".music-btn").innerHTML="🔊";

    }

},{once:true});


// ===============================
// RANDOM BIRTHDAY WISH
// ===============================

const wishes=[

"🎂 Happy Birthday Mamali ❤️",

"🌹 May all your dreams come true.",

"💖 Stay happy forever.",

"🥰 You deserve endless love.",

"🎉 Wishing you joy and success.",

"🌸 Keep smiling always.",

"❤️ You are my favorite person.",

"🎁 Have the most wonderful birthday."

];

function showWish(){

    let random=Math.floor(Math.random()*wishes.length);

    document.getElementById("wishText").innerHTML=wishes[random];

}

// ===============================
// LIGHT CANDLE
// ===============================

function lightCandle(){

    alert("🕯️ Candles are now glowing!");

    nextPage(8);

}

// ===============================
// BLOW CANDLE
// ===============================

function blowCandle(){

    alert("🎉 Happy Birthday Mamali ❤️");

    nextPage(9);

}

// ===============================
// CONFETTI EFFECT
// ===============================

function createConfetti(){

    for(let i=0;i<120;i++){

        let confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.animationDuration=

        (Math.random()*3+2)+"s";

        confetti.style.opacity=Math.random();

        confetti.style.transform=

        "rotate("+Math.random()*360+"deg)";

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },5000);

    }

}

// ===============================
// FINAL PAGE CONFETTI
// ===============================

const observer=new MutationObserver(()=>{

if(currentPage===9){

createConfetti();

}

});

observer.observe(document.body,{

attributes:true,

subtree:true,

childList:true

});

// ===============================
// KEYBOARD SUPPORT
// ===============================

document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowRight"){

if(currentPage<9){

nextPage(currentPage+1);

}

}

});

// ===============================
// MOBILE VIBRATION
// ===============================

function vibrate(){

if(navigator.vibrate){

navigator.vibrate(200);

}

}

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",vibrate);

});

// ===============================
// COUNTDOWN (OPTIONAL)
// ===============================

let seconds=5;

function countdown(){

const timer=document.getElementById("count");

if(timer){

timer.innerHTML=seconds;

seconds--;

if(seconds>=0){

setTimeout(countdown,1000);

}

}

}

// ===============================
// END
// ===============================
