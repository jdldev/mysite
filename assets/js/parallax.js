
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mainText = document.getElementById('mainText');
let header = document.getElementById('header');

window.addEventListener('scroll', function(){
let value = window.scrollY;
stars.style.left = value * 0.25 + 'px';
moon.style.top = value * 1.05 + 'px';
mountains_behind.style.top = value * 0.5 + 'px';
mainText.style.marginBottom = value * 1.5 + 'px';
})
