const body = document.querySelector('body');
const landingPage = document.getElementById('landing-page');
const studyImg = document.querySelector('.study-img');
const workoutImg = document.querySelector('.workout-img');
const backgroundTitle = document.getElementById('background-title');
const backButton = document.querySelector('.back-button');
const backHomeButton = document.querySelector('#back-home');

studyImg.addEventListener('click', () => {
    // make another timer for study and then make it visible here
    if(body.classList.contains('green-theme')) return;
    body.classList += 'green-theme';
    landingPage.style.display = "none";
    landingPage.style.visibility = "hidden";
    container.style.display = "block";
    container.style.visibility = "visible";
    backgroundTitle.innerText = "Study"
    backgroundTitle.classList += "study";
    backButton.style.display = "block";
    backButton.style.visibility = "visible";
    backHomeButton.style.display = "none";
    backHomeButton.style.visibility = "hidden";
});

workoutImg.addEventListener('click', () => {
    if(body.classList.contains('blue-theme')) return;
    body.classList += 'blue-theme';
    landingPage.style.display = "none";
    landingPage.style.visibility = "hidden";
    container.style.display = "block";
    container.style.visibility = "visible";
    backgroundTitle.innerText = "Workout"
    backgroundTitle.classList += "workout";
    backButton.style.display = "block";
    backButton.style.visibility = "visible";
    backHomeButton.style.display = "none";
    backHomeButton.style.visibility = "hidden";
});

backButton.addEventListener('click', () => {
    if(body.classList.contains('blue-theme')) {
        container.style.display = "none";
        container.style.visibility = "hidden";
        popcontainer.style.display = "none";
        popcontainer.style.visibility = "hidden";
    } else {
        container.style.display = "none";
        container.style.visibility = "hidden";
        popcontainer.style.display = "none";
        popcontainer.style.visibility = "hidden";
    }
    body.classList = "";
    backgroundTitle.innerText = "Choose";
    backgroundTitle.classList = "";
    landingPage.style.display = "flex";
    landingPage.style.visibility = "visible";

    backButton.style.display = "none";
    backButton.style.visibility = "hidden";

    backHomeButton.style.display = "block";
    backHomeButton.style.visibility = "visible";
});