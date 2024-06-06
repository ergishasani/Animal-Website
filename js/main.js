// JavaScript to toggle the burger menu

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');
    const logo = document.querySelector('header a img');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        logo.classList.toggle('logo');
    });
});
