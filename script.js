var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var buttonC = document.querySelector(".randColor");

function randHexColor() {
    var letters = "0123456789ABCDEF";
    var colorHex = "#";
    for (var i = 0; i < 6; i++) {
        colorHex += letters[Math.floor(Math.random() * 16)];
    }
    return colorHex;
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

function randGradient() {
    var hex1 = randHexColor();
    var hex2 = randHexColor();

    body.style.background = "linear-gradient(to right, " + hex1 + ", " + hex2 + ")";

    css.textContent = body.style.background + ";";

    color1.value = hex1;
    color2.value = hex2;
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

buttonC.addEventListener("click", randGradient);