const words = ["Hi guys!", "I'm Vivian Dai!", "Welcome to my website!", 
    "This typing effect was fun to make :)"];
let iterator = 0;
let currentChar = 0;
let alpha = 0;
let deltaAlpha = 0.1;
let output = "";
let del = false;

var typing = document.getElementById("typing");
var root = document.documentElement;

function refreshWords() {
    if (del) {
        if (output.length > 0) {
            output = output.substring(0, output.length - 1);
            typing.innerHTML = output;
            root.style.setProperty('--char-count', output.length);
            root.style.setProperty('--char-width', output.length + "ch");
        } else {
            del = false;
        }
        setTimeout(refreshWords, 20);
    } else {
        const word = words[iterator];
        document.getElementById("typing").innerHTML = word;
        if (currentChar >= word.length) {
            currentChar = 0;
            iterator++;
            iterator%=words.length;
            del = true;
        } else {
            output += word.split("")[currentChar];
            typing.innerHTML = output;
            root.style.setProperty('--char-count', output.length);
            root.style.setProperty('--char-width', output.length + "ch");
            currentChar++;
        }
        setTimeout(refreshWords, 150);
    }
}

function flashCursor() {
    typing.style = `border-right: 4px solid rgba(238, 238, 238, ${alpha})`;
    alpha += deltaAlpha;
    if ((alpha >= 1) || (alpha <= 0)) {
        deltaAlpha *= -1;
    }
    setTimeout(flashCursor, 10);
}
