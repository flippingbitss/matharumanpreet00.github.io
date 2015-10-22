// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 720;
canvas.height = 540;
document.body.appendChild(canvas);

// Background image
var backgroundReady = false;
var backgroundImage = new Image();
backgroundImage.onload = function () {
    backgroundReady = true;
};
backgroundImage.src = "leaf1.jpg";

// bug image
var bugReady = false;
var bugImage = new Image();
bugImage.onload = function () {
    bugReady = true;
};
bugImage.src = "bug.png";

// Game objects
var bug = {
    x: 200,
    y: 200
};
var bugsCaught = 0;
var bugDelay = 2000;


// checking mouse click and collision with bug
canvas.addEventListener("mousedown", function (e) {
    if (bug.x <= (e.pageX) && bug.y <= (e.pageY) && e.pageX <= (bug.x + 70) && e.pageY <= (bug.y + 70)) {
        bugMovement();
        bugDelay -= 100;
        ++bugsCaught;
    }
}, false);




// change the bug position when the player destroys one 
var bugMovement = function () {
    // Throw the bug somewhere on the screen randomly
    bug.x = (Math.random() * (canvas.width - 70));
    bug.y = (Math.random() * (canvas.height - 70));
};


function resetParam(param) {
    console.log("function called");
    switch (param.toString()) {
        case 'Score':
            this.bugsCaught = 0;
            console.log("score called");
            break;
        case 'Speed':
            this.bugDelay = 2000;
            console.log("speed called");
            break;
    }
}


// Draw everything
var render = function () {
    if (backgroundReady) {
        ctx.drawImage(backgroundImage, 0, 0);
    }

    if (bugReady) {
        ctx.drawImage(bugImage, bug.x, bug.y);
    }

    // Score
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Bugs caught: " + bugsCaught, 10, 10);
};

// The main game loop
var main = function () {
    var now = Date.now();
    var delta = now - then;
    if (delta > bugDelay) {
        bugMovement();
        then = now;
    }   
    render();
    // Request to do this again ASAP
    requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
bugMovement();
// Let's play this game!
var then = Date.now();
main();

