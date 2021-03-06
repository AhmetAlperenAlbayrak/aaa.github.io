// const {links} = require("express/lib/response");

const header = document.querySelector('header');

const hamburger = document.querySelector(".hamburger");

/* --------------------Sticky Navbar---------------------- */


function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

// Sticky Navbar on scroll
window.addEventListener('scroll', stickyNavbar);

/* --------------------Scrollreveal Animation---------------------- */

let sr = ScrollReveal({
    duration: 2500,
    distance: '60px',
});

sr.reveal(".showcase-info", {delay:600});
sr.reveal(".showcase-image", {origin:"top", delay:700});

/* --------------------Countdown---------------------- */
 
 
 const countdown = document.querySelector('.countdown');

//  Set launch date (ms)
 const launchDate = new Date('May 15, 2022 00:00:00').getTime();

    // Update every second
    setInterval(() => {
        // Get todays date and time (ms)
        const now = new Date().getTime();
        // Distance from now to the launch date (ms)
        const distance = launchDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display result
        countdown.innerHTML = `
            <div>${days}<span>Days</span></div>
            <div>${hours}<span>Hours</span></div>
            <div>${minutes}<span>Minutes</span></div>
            <div>${seconds}<span>Seconds</span></div>
        `;

        // If launch date passed
        if (distance < 0) {
            // Stop countdown
            clearInterval(x);
            // Style and output text
            countdown.style.color = '#17a2b8';
            countdown.innerHTML = 'Launched!';
        }
    });

/* --------------------Open & Close Navbar Menu---------------------- */

hamburger.addEventListener('click', () => {
    document.body.classList.toggle('open');
    document.body.classList.toggle('stopScrolling');
});

links.forEach(link => link.addEventListener('click', () => {
    document.body.classList.remove('open');
    document.body.classList.remove('stopScrolling');
}));