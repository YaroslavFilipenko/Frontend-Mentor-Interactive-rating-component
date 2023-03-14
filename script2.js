const ratingCircles = document.querySelectorAll('.rating__circle');
const mainWrapper = document.querySelector('.main-wrapper');
const stateWrapper = document.querySelector('.state-wrapper');
const stateSelectedInfo = document.querySelector('.state-selected-info');

ratingCircles.forEach(circle => {
    circle.addEventListener('click', () => {
        ratingCircles.forEach(otherCircle => {
            otherCircle.classList.toggle('active', otherCircle === circle);
        });
    });
});

document.querySelector('.submit').addEventListener('click', () => {
    mainWrapper.style.display = 'none';
    stateWrapper.style.display = 'flex';

    const activeCircle = document.querySelector('.rating__circle.active');
    const ratingValue = activeCircle ? activeCircle.value : 0;

    stateSelectedInfo.textContent = 'You selected ' + ratingValue + ' out of 5';
});