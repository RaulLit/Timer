var container = document.getElementById('container');
var popcontainer = document.getElementById('popcontainer');
var noOfExercisesInput = document.getElementById('numberOfExercises');
// var timePerExerciseInput = document.getElementById('timePerExercise');
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


function run() {
    timePerExerciseInput = timePerExerciseMin.value*60 + timePerExerciseSec.value;
    if(noOfExercisesInput.value>1) {
        totalTime = (noOfExercisesInput.value * timePerExerciseInput) + ((noOfExercisesInput.value-1) * restTimeBetweenExerciseInput.value);
    } else {
        totalTime = timePerExerciseInput;
    }
    var minutes = Math.floor(totalTime/60);
    var seconds = totalTime % 60;

    totalWorkoutTime.innerHTML = `Total Workout Time: <br> ${minutes} : ${seconds}`;
    container.style.display = "none";
    container.style.visibility = "hidden";
    popcontainer.style.display = "block";
    popcontainer.style.visibility = "visible";
    resetbtn.style.display = "block";
    resetbtn.style.visibility = "visible";
    startbtn.style.display = "block";
    startbtn.style.visibility = "visible";
}

function start() {
    startbtn.style.display = 'none';
    startbtn.style.visibility = 'hidden';
    resetbtn.style.display = 'none';
    resetbtn.style.visibility = 'hidden';
    let time = totalTime;
    var minutes = Math.floor(time/60);
    var seconds = time % 60;
    totalWorkoutTime.innerHTML = `Total Workout Time: <br> ${minutes} : ${seconds}`;
    var myInterval = setInterval(updateTime, 1000);
    let sum = 0;
    function updateTime () {
        if(sum==timePerExerciseInput) {
            beep.play();
            sum=0;
        }
        minutes = Math.floor(time/60);
        seconds = time % 60;
        ++sum;
        totalWorkoutTime.innerHTML = `${minutes} : ${seconds}`;
        time--;
        if(time<=0) {
            clearInterval(myInterval);
            totalWorkoutTime.innerHTML = "TIME UP!!!";
            finishSound.play();
            stopbtn.style.visibility = 'visible';
            stopbtn.style.display = 'block';
            resetbtn.style.display = 'block';
            resetbtn.style.visibility = 'visible';
        }
    }
}
function reset() {
    resetbtn.style.display = "none";
    resetbtn.style.visibility = "hidden";
    startbtn.style.display = "none";
    startbtn.style.visibility = "hidden";
    popcontainer.style.display = 'none';
    popcontainer.style.visibility = 'hidden';
    container.style.display = 'block';
    container.style.visibility = 'visible';

    noOfExercisesInput.value = '';
    timePerExerciseMin.value = '';
    timePerExerciseSec.value = '';
    restTimeBetweenExerciseInput.value = '';
}

function stopSound() {
    finishSound.pause();
}
