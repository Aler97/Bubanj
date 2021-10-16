/* Getting the elements */
const keyQ = document.querySelector(".qKey");
const keyW = document.querySelector(".wKey");
const keyE = document.querySelector(".eKey");
const keyA = document.querySelector(".aKey");
const keyS = document.querySelector(".sKey");
const keyD = document.querySelector(".dKey");
const keyZ = document.querySelector(".zKey");
const keyX = document.querySelector(".xKey");
const keyC = document.querySelector(".cKey");
const on = document.querySelector('.on');
const off = document.querySelector('.off');
const bankOne = document.querySelector(".bankOne");
const bankTwo = document.querySelector(".bankTwo");
var volumeSlider = document.querySelector("#volumeSlider");
const allAudio = document.querySelectorAll("audio");
var keyVolume = document.querySelector("#Value")

var count = 2;
var bank = 2;


/* Turn On/Off */
function isOn() {
    if (document.querySelector('.off').classList.contains("offColor")) {
        on.classList.add("onColor");
        off.classList.remove("offColor");
    }
    count = 1;
}

function isOff() {
    if (!document.querySelector('.off').classList.contains("offColor")) {
        on.classList.remove("onColor");
        off.classList.add("offColor");
    }
    count = 2;
}

/* Bank One/Two */
function bankNoTwo() {
    if (bankOne.classList.contains("bankOneColor")) {
        bankTwo.classList.add("bankTwoColor");
        bankOne.classList.remove("bankOneColor");
    }
    bank = 1;
}

function bankNoOne() {
    if (!bankOne.classList.contains("bankOneColor")) {
        bankOne.classList.add("bankOneColor");
        bankTwo.classList.remove("bankTwoColor");
    }
    bank = 2;
}

on.addEventListener("click", isOn);
off.addEventListener("click", isOff);
bankOne.addEventListener("click", bankNoOne);
bankTwo.addEventListener("click", bankNoTwo);

/* Play Sound */
function playQ() {
    if (count === 1 && bank === 2) {
        var x = document.getElementById("sound1");
        x.setAttribute("src", "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
        x.play();
        document.querySelector(".soundName").innerHTML = "Heater-1";
    } else if (count === 1 && bank === 1) {
        var x = document.getElementById("sound1");
        x.setAttribute("src", "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3");
        x.play();
        document.querySelector(".soundName").innerHTML = "Heater-1";
    }
}
function playW() {
    if (count === 1 && bank === 2) {
        var x = document.getElementById("sound2");
        x.setAttribute("src", "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
        x.play();
        document.querySelector(".soundName").innerHTML = "Heater-2";
    } else if (count === 1 && bank === 1) {
        var x = document.getElementById("sound2");
        x.setAttribute("src", "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3");
        x.play();
        document.querySelector(".soundName").innerHTML = "Chord-2";
    }
}
function playE() {
    if (count === 1 && bank === 2) {
        var x = document.getElementById("sound3");
        x.setAttribute("src", "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3");
        x.play();
        document.querySelector(".soundName").innerHTML = "Heater-3";
    } else if (count === 1 && bank === 1) {
        var x = document.getElementById("sound3");
        x.setAttribute("src", "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3");
        x.play();
        document.querySelector(".soundName").innerHTML = "Chord-3";
    }
}
function playA() {
    if (count === 1 && bank === 2) {
        var x = document.getElementById("sound4");
        x.setAttribute("src", "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3");
        x.play();
        document.querySelector(".soundName").innerHTML = "Heater-4";
    } else if (count === 1 && bank === 1) {
        var x = document.getElementById("sound4");
        x.setAttribute("src", "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3");
        x.play();
        document.querySelector(".soundName").innerHTML = "Shaker";
    }
}
function playS() {
    if (count === 1 && bank === 2) {
        var x = document.getElementById("sound5");
        x.setAttribute("src", "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3");
        x.play();
        document.querySelector(".soundName").innerHTML = "Clap";
    } else if (count === 1 && bank === 1) {
        var x = document.getElementById("sound5");
        x.setAttribute("src", "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3");
        x.play();
        document.querySelector(".soundName").innerHTML = "Open-HH";
    }
}
function playD() {
    if (count === 1 && bank === 2) {
        var x = document.getElementById("sound6");
        x.setAttribute("src", "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3");
        x.play();
        document.querySelector(".soundName").innerHTML = "Open-HH";
    } else if (count === 1 && bank === 1) {
        var x = document.getElementById("sound6");
        x.setAttribute("src", "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3");
        x.play();
        document.querySelector(".soundName").innerHTML = "Closed-HH";
    }
}
function playZ() {
    if (count === 1 && bank === 2) {
        var x = document.getElementById("sound7");
        x.setAttribute("src", "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
        x.play();
        document.querySelector(".soundName").innerHTML = "Kick-n'-Hat";
    } else if (count === 1 && bank === 1) {
        var x = document.getElementById("sound7");
        x.setAttribute("src", "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3");
        x.play();
        document.querySelector(".soundName").innerHTML = "Punchy-Kick";
    }
}
function playX() {
    if (count === 1 && bank === 2) {
        var x = document.getElementById("sound8");
        x.setAttribute("src", "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
        x.play();
        document.querySelector(".soundName").innerHTML = "Kick";
    } else if (count === 1 && bank === 1) {
        var x = document.getElementById("sound8");
        x.setAttribute("src", "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3");
        x.play();
        document.querySelector(".soundName").innerHTML = "Side-Stick";
    }
}
function playC() {
    if (count === 1 && bank === 2) {
        var x = document.getElementById("sound9");
        x.setAttribute("src", "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3");
        x.play();
        document.querySelector(".soundName").innerHTML = "Closed-HH";

    } else if (count === 1 && bank === 1) {
        var x = document.getElementById("sound9");
        x.setAttribute("src", "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3");
        x.play();
        document.querySelector(".soundName").innerHTML = "Snare";
    }
}

keyQ.addEventListener("click", playQ);
keyW.addEventListener("click", playW);
keyE.addEventListener("click", playE);
keyA.addEventListener("click", playA);
keyS.addEventListener("click", playS);
keyD.addEventListener("click", playD);
keyZ.addEventListener("click", playZ);
keyX.addEventListener("click", playX);
keyC.addEventListener("click", playC);

/* Keyboard Play Sound */

function keyboardPlay(key) {
    switch (key.keyCode) {
        case 81:
            playQ();
            break;
        case 87:
            playW();
            break;
        case 69:
            playE();
            break;
        case 65:
            playA();
            break;
        case 83:
            playS();
            break;
        case 68:
            playD();
            break;
        case 90:
            playZ();
            break;
        case 88:
            playX();
            break;
        case 67:
            playC();
            break;

    }
};

addEventListener("keydown", keyboardPlay);

/* Set Volume */

function changeVolume() {
    allAudio.forEach(function (element) {
        element.volume = volumeSlider.value / 100;
    });
}


volumeSlider.addEventListener("mousemove", changeVolume);

volumeSlider.oninput = function () {
    keyVolume.innerHTML = this.value;
}

