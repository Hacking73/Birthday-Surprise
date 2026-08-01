// ==========================
// Current Page
// ==========================

let currentPage = 1;

// ==========================
// Next Page
// ==========================

function nextPage(page){

    document.getElementById("page"+currentPage).classList.remove("active");

    document.getElementById("page"+page).classList.add("active");

    currentPage = page;

}

// ==========================
// Music
// ==========================

const music = document.getElementById("music");

let playing = false;

function toggleMusic(){

    if(playing){

        music.pause();

        playing = false;

        document.querySelector(".music-btn").innerHTML = "🔇";

    }else{

        music.play();

        playing = true;

        document.querySelector(".music-btn").innerHTML = "🔊";

    }

}

// Auto Play

document.body.addEventListener("click",function(){

    if(!playing){

        music.play();

        playing = true;

    }

},{once:true});

// ==========================
// Birthday Wishes
// ==========================

const wishes=[

"🎂 Happy Birthday Mamali ❤️",

"🌹 May God bless you.",

"💖 Stay Happy Forever.",

"🥰 You are very Special.",

"🎉 Enjoy Your Beautiful Day.",

"🌸 Keep Smiling Always.",

"❤️ Wishing You Endless Love.",

"🎁 Lots Of Happiness For You."

];

function lightCandle(){

    document.getElementById("cakeImage").src = "images/Light on.png";

    alert("🕯️ Candles are now glowing!");

    nextPage(8);

}

function blowCandle(){

    alert("🎉 Happy Birthday Mamali ❤️");

    createConfetti();

    nextPage(9);

}

// ==========================
// Confetti
// ==========================

function createConfetti(){

    for(let i=0;i<100;i++){

        let confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.animationDuration=(Math.random()*3+2)+"s";

        document.body.appendChild(confetti);

        setTimeout(function(){

            confetti.remove();

        },5000);

    }

}

// ==========================
// Keyboard Support
// ==========================

document.addEventListener("keydown",function(e){

    if(e.key==="ArrowRight"){

        if(currentPage<9){

            nextPage(currentPage+1);

        }

    }

});

// ==========================
// Button Vibration
// ==========================

if(navigator.vibrate){

    document.querySelectorAll("button").forEach(function(btn){

        btn.addEventListener("click",function(){

            navigator.vibrate(100);

        });

    });

}
