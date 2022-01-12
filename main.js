var container = document.getElementById('container');
var popcontainer = document.getElementById('popcontainer');
var noOfExercisesInput = document.getElementById('numberOfExercises');
var timePerExerciseMin = document.getElementById('timePerExercise-min');
var timePerExerciseSec = document.getElementById('timePerExercise-sec');
var restTimeBetweenExerciseInput = document.getElementById('restTimeBetweenExercise');
var totalWorkoutTime = document.getElementById('totalWorkoutTime');
const startbtn = document.getElementById('startbtn');
const resetbtn = document.getElementById('resetbtn');
const stopbtn = document.getElementById('stopbtn');

// ***VARIABLES***
var timePerExerciseInput;
var totalTime;
var beep = new Audio("sound/beep.wav");
var finishSound = document.getElementById('finish-sound');

function appear(container) {
    container.style.display = "block";
    container.style.visibility = "visible";
}

function disappear(container) {
    container.style.display = "none";
    container.style.visibility = "hidden";
}

function reset() {
    disappear(stopbtn);
    disappear(resetbtn);
    disappear(startbtn);
    disappear(popcontainer);
    appear(container);

    noOfExercisesInput.value = '';
    timePerExerciseMin.value = '';
    timePerExerciseSec.value = '';
    restTimeBetweenExerciseInput.value = '';
}

function stopSound() {
    finishSound.pause();
}

function run() {
    if(timePerExerciseSec.value<1) timePerExerciseSec.value = "";
    timePerExerciseInput = ((timePerExerciseMin.value*60) + timePerExerciseSec.value);
    if(noOfExercisesInput.value>=1) {
        totalTime = noOfExercisesInput.value * timePerExerciseInput;
    } else {
        totalTime = timePerExerciseInput;
    }
    var minutes = Math.floor(totalTime/60);
    var seconds = totalTime % 60;
    seconds = (seconds<10)? "0"+seconds : seconds;
    totalWorkoutTime.innerHTML = `Total Workout Time: <br> ${minutes} : ${seconds}`;
    disappear(container);
    appear(popcontainer);
    appear(resetbtn);
    appear(startbtn);
}
function start() {
    disappear(startbtn);
    disappear(resetbtn);
    let workouts = noOfExercisesInput.value;
    initiate();
    function initiate() {
        workouts--;
        var timer1 = new Timer(timePerExerciseInput, printTimer, afterFunc);
        timer1.runTimer();
    }
    function afterFunc () {
        if(workouts <= 0) {
            totalWorkoutTime.innerHTML = "TIME UP!!!";
            finishSound.play();
            appear(stopbtn);
            appear(resetbtn);
            return;
        }
        beep.play();
        totalWorkoutTime.innerHTML = "Take a break";
        rest();
    }
    function printTimer(time) {
        let min = Math.floor(time/60);
        let sec = time % 60;
        sec = (sec<10)? "0"+sec : sec;
        if(min <= 0) {
            totalWorkoutTime.innerHTML = `Do the Workout!! <br> ${sec}`;
        } else {
            totalWorkoutTime.innerHTML = `Do the Workout!! <br> ${min} : ${sec}`;
        }
    }
    function printRest(time) {
        let min = Math.floor(time/60);
        let sec = time % 60;
        sec = (sec<10)? "0"+sec : sec;
        if(min <= 0) {
            totalWorkoutTime.innerHTML = `Take a Break! <br> ${sec}`;
        } else {
            totalWorkoutTime.innerHTML = `Take a Break! <br> ${min} : ${sec}`;
        }
    }
    function rest() {
        var restTime = new Timer(restTimeBetweenExerciseInput.value, printRest, 
            ()=>{
                beep.play();
                totalWorkoutTime.innerHTML = "Start!!";
                initiate();
            });
        restTime.runTimer();
    }
}

class Timer {
    constructor(timeInSec, printTime, afterFunction) {
        this.time = timeInSec;
        this.printTime = printTime;
        this.afterFunc = afterFunction;
    }

    runTimer() {
        let timer = this.time;
        var myInterval = setInterval(()=>{
            this.printTime(timer);
            timer--;
            if(timer<0) {
                clearInterval(myInterval);
                this.afterFunc();
            }
        }, 1000);
    }
}
