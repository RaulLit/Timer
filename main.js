var container = document.getElementById('container');
var popcontainer = document.getElementById('popcontainer');
var noOfExercisesInput = document.getElementById('numberOfExercises');
var timePerExerciseInput = document.getElementById('timePerExercise');
var restTimeBetweenExerciseInput = document.getElementById('restTimeBetweenExercise');
var totalWorkoutTime = document.getElementById('totalWorkoutTime');

const startbtn = document.getElementById('startbtn');
const resetbtn = document.getElementById('resetbtn');

var noOfExercise;
var timePerExercise;
var restTimeBetweenExercise;
var totalTime;

function run() {
    noOfExercise = noOfExercisesInput.value;
    timePerExercise = timePerExerciseInput.value;
    restTimeBetweenExercise = restTimeBetweenExerciseInput.value;
    if(noOfExercise>1) {
        totalTime = (noOfExercise * timePerExercise) + ((noOfExercise-1) * restTimeBetweenExercise);
    } else {
        totalTime = timePerExercise;
    }

    var minutes = Math.floor(totalTime/60);
    var seconds = totalTime % 60;

    totalWorkoutTime.innerHTML = `Total Workout Time: ${minutes} : ${seconds}`;
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
    totalWorkoutTime.innerHTML = `Total Workout Time: ${minutes} : ${seconds}`;
    var myInterval = setInterval(updateTime, 1000);

    function updateTime () {
        minutes = Math.floor(time/60);
        seconds = time % 60;
    
        totalWorkoutTime.innerHTML = `${minutes} : ${seconds}`;
        time--;
        if(time<=0) {
            clearInterval(myInterval);
            totalWorkoutTime.innerHTML = "TIME UP!!!";
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
    timePerExerciseInput.value = '';
    restTimeBetweenExerciseInput.value = '';
}
