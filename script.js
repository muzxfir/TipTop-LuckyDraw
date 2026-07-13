const prizes = [

    "🎁 Gift Voucher",
    "☕ Free Coffee",
    "🍫 Chocolate Box",
    "🎧 Surprise Gift",
    "💰 Cash Prize",
    "🍔 Free Lunch",
    "🎟 Movie Ticket",
    "⌚ Premium Gift",
    "⭐ Better Luck Next Time"

];



function playSound(){

    let audio = new AudioContext();

    let oscillator = audio.createOscillator();

    let gain = audio.createGain();


    oscillator.connect(gain);

    gain.connect(audio.destination);


    oscillator.frequency.value = 700;

    gain.gain.value = 0.2;


    oscillator.start();


    setTimeout(()=>{

        oscillator.stop();

    },200);

}




function createConfetti(){

    for(let i=0;i<80;i++){

        let confetti = document.createElement("div");


        confetti.style.position="fixed";

        confetti.style.width="10px";

        confetti.style.height="20px";

        confetti.style.left=Math.random()*100+"%";

        confetti.style.top="-20px";


        confetti.style.background =
        "hsl("+Math.random()*360+",100%,50%)";


        confetti.style.zIndex="999";


        confetti.style.transition="3s";


        document.body.appendChild(confetti);



        setTimeout(()=>{

            confetti.style.transform =
            "translateY(100vh) rotate(720deg)";


        },100);



        setTimeout(()=>{

            confetti.remove();

        },3000);


    }

}




function playGame(number,button){


    button.classList.add("active");


    playSound();


    let randomPrize =
    prizes[Math.floor(Math.random()*prizes.length)];



    setTimeout(()=>{


        document.getElementById("winnerPrize").innerHTML =

        "Your Number : "+number+
        "<br><br>"+
        randomPrize;



        document.getElementById("popup").style.display="block";


        createConfetti();



        button.classList.remove("active");



    },1000);



}




function closePopup(){


    document.getElementById("popup").style.display="none";


}
