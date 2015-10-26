var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 750;

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "leaf.png";

// Game JSON objects
var hero = {
    speed: 256, // movement in pixels per second
    x: 0,
    y: 0
};
var monster = {
    x: 0,
    y: 0
};
var monstersCaught = 0;