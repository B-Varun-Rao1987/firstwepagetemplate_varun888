const navLinks = document.getElementById("navLinks");
const slideEventOff = document.querySelector('.fa-times');
const slideEventOn = document.querySelector('.fa-bars');

slideEventOff.addEventListener('click', () => {
    navLinks.style.transform = 'translateX(100%)';
});
slideEventOn.addEventListener('click', () => {
    navLinks.style.transform = 'translateX(0%)';
});

const allNavLinks = document.querySelectorAll('.nav-links a');
const baseURL = `http://${allNavLinks[0].host}/`;
const allLinks = ['home', 'about', 'course', 'blog', 'contact'];





