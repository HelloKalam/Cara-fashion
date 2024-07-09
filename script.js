const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('menu');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}