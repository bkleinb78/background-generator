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
