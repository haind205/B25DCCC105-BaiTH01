
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

const themeToggleBtn = document.getElementById('theme-toggle');
const toggleIcon = document.getElementById('toggle-icon');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.setAttribute('data-theme', 'dark');
    toggleIcon.textContent = '🌙';
} else {
    toggleIcon.textContent = '☀️';
}

themeToggleBtn.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        toggleIcon.textContent = '☀️';
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleIcon.textContent = '🌙';
    }
});

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}
window.addEventListener('scroll', reveal);
reveal();

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('message-error').textContent = '';

    if (name === '') {
        document.getElementById('name-error').textContent = 'Vui lòng nhập tên của bạn.';
        isValid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Email không hợp lệ.';
        isValid = false;
    }
    
    if (message === '') {
        document.getElementById('message-error').textContent = 'Vui lòng nhập tin nhắn.';
        isValid = false;
    }

    if (isValid) {
        alert('Cảm ơn ' + name + '! Tin nhắn của bạn đã được gửi thành công.');
        contactForm.reset();
    }
});

document.getElementById('current-year').textContent = new Date().getFullYear();

const searchInput = document.getElementById('search-input');
const projectCards = document.querySelectorAll('.project-card');

searchInput.addEventListener('input', function() {
    const searchValue = searchInput.value.toLowerCase().trim();
    
    projectCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const tags = card.getAttribute('data-tags').toLowerCase();

        if (title.includes(searchValue) || tags.includes(searchValue)) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none'; 
        }
    });
});