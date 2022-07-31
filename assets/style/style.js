//Parallax Effect 

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let logo = document.getElementById('logo');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    mountains_behind.style.top = value * 0.50 + 'px';
    mountains_front.style.top = value * 0.15 + 'px';
    moon.style.marginLeft = value * 0.75 + 'px';
    moon.style.marginTop = value * 0.75 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    logo.style.marginTop = value * 0.75 + 'px';
    btn.style.marginTop = value * 2.5 + 'px';
})

//Navbar Transparent Scroll 

window.addEventListener('scroll', function () {
    const nav = this.document.querySelector('nav');
    nav.classList.toggle('active-nav', window.scrollY >= 700);
})

