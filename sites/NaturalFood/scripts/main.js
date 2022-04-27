const freshOne = document.querySelector('#fresh_first_item');
const freshTwo = document.querySelector('#fresh_second_item');
const freshThree = document.querySelector('#fresh_third_item');
const hamburger = document.querySelector('#menu');
const nav = document.querySelector('#nav');
const body = document.querySelector('body');
const main = document.querySelector('main');


freshOne.addEventListener('click', () => {
    freshOne.classList.add('fresh-modify');
    freshTwo.classList.remove('fresh-modify');
    freshThree.classList.remove('fresh-modify');
});


freshTwo.addEventListener('click', () => {
    freshTwo.classList.add('fresh-modify');
    freshOne.classList.remove('fresh-modify');
    freshThree.classList.remove('fresh-modify');
});


freshThree.addEventListener('click', () => {
    freshThree.classList.add('fresh-modify');
    freshTwo.classList.remove('fresh-modify');
    freshOne.classList.remove('fresh-modify');
});


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
    body.classList.toggle('lock');
    main.classList.toggle('lock');
});
