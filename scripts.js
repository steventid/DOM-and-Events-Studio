// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    let takeOff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let height = document.getElementById("spaceShuttleHeight");
    let landing = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");
    let rocket = document.getElementById("rocket");
    rocket.style.position = 'absolute';

    //keep rocket inside window
    let groundLevel = 252;
    let topOfWindow = 10;
    let leftOfWindow = -20;
    let rightOfWindow = shuttleBackground.offsetWidth - 64;

    //center rocket
    centerRocket();

    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");

    takeOff.addEventListener("click", event => {
        let retval = confirm("Confirm that the shuttle is ready for takeoff.");
        if (retval) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            changeHeight(10000);
        }
    });

    landing.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        onGround();
    });

    missionAbort.addEventListener("click", event => {
        let retval = confirm("Confirm that you want to abort the mission.");
        if (retval) {
            flightStatus.innerHTML = "Mission aborted.";
            onGround();
        }
    });

    up.addEventListener("click", event => {
        let myPos = rocket.offsetTop;
        if (myPos <= topOfWindow) {
            return;
        }
        rocket.style.top = `${myPos - 10}px`;
        changeHeight(10000);
    });

    down.addEventListener("click", event => {
        let myPos = rocket.offsetTop;
        if (myPos === groundLevel) {
            return;
        }
        rocket.style.top = `${myPos + 10}px`;
        changeHeight(-10000);
    });

    left.addEventListener("click", event => {
        let myPos = rocket.offsetLeft;
        if (myPos <= leftOfWindow) {
            return;
        }
        rocket.style.left = `${myPos - 10}px`;
    });

    right.addEventListener("click", event => {
        let myPos = rocket.offsetLeft;
        console.log(myPos, rightOfWindow);
        if (myPos >= rightOfWindow) {
            return;
        }
        rocket.style.left = `${myPos + 10}px`;
    });

    

    window.addEventListener('resize', event => {
       centerRocket();
    });


    //keep code DRY
    function onGround() {
        shuttleBackground.style.backgroundColor = "green";
        height.innerHTML = 0;
        centerRocket();
    }

    function changeHeight(newHeight) {
        let heightVal = parseInt(height.innerHTML) + newHeight;
        height.innerHTML = heightVal;
    }

    function centerRocket() {
        //center the rocket in the div
        rocket.style.top = `${groundLevel}px`;
        rocket.style.left = `${shuttleBackground.offsetWidth / 2 - 37.5}px`;
        rightOfWindow = shuttleBackground.offsetWidth - 64;
    }
}


window.addEventListener("load", init);