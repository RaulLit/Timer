const body = document.querySelector('body');
const landingPage = document.getElementById('landing-page');
const studyImg = document.querySelector('.study-img');
const workoutImg = document.querySelector('.workout-img');
const backgroundTitle = document.getElementById('background-title');
const backButton = document.querySelector('.back-button');
const backHomeButton = document.querySelector('#back-home');
const studyContainer = document.getElementById('study-container');

studyImg.addEventListener('click', () => {
    // make another timer for study and then make it visible here
    if(body.classList.contains('green-theme')) return;
    body.classList += 'green-theme';
    disappear(landingPage);
    appear(studyContainer); 
    backgroundTitle.innerText = "Study"
    backgroundTitle.classList += "study";
    appear(backButton);
    disappear(backHomeButton);
});

workoutImg.addEventListener('click', () => {
    if(body.classList.contains('blue-theme')) return;
    body.classList += 'blue-theme';
    disappear(landingPage);
    appear(container);
    backgroundTitle.innerText = "Workout";
    backgroundTitle.classList += "workout";
    appear(backButton);
    disappear(backHomeButton);
});

backButton.addEventListener('click', () => {
    if(body.classList.contains('blue-theme')) {
        disappear(container);
        disappear(popcontainer);
    } else {
        disappear(studyContainer);
        disappear(popcontainer);
    }
    body.classList = "";
    backgroundTitle.innerText = "Choose";
    backgroundTitle.classList = "";
    landingPage.style.display = "flex";
    landingPage.style.visibility = "visible";

    disappear(backButton);

    appear(backHomeButton);
});
