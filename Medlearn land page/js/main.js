// 1. Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        const spans = menuToggle.getElementsByTagName('span');
        if (navMenu.classList.contains('open')) {
            spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// 2. Smooth Scroll
const links = document.querySelectorAll('.nav-menu a, .hero-buttons a, .footer-links a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#') && targetId.length > 1) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                if (navMenu && navMenu.classList.contains('open')) {
                    menuToggle.click();
                }
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// 3. Newsletter Submission
const newsletterForm = document.getElementById('newsletterForm');
const formFeedback = document.getElementById('formFeedback');

if (newsletterForm && formFeedback) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        
        if (emailInput && emailInput.value) {
            formFeedback.style.color = '#10B981'; 
            formFeedback.textContent = 'شكرًا لاشتراكك! تم تسجيل بريدك الإلكتروني بنجاح.';
            emailInput.value = '';
        } else {
            formFeedback.style.color = '#EF4444'; 
            formFeedback.textContent = 'عذراً، يرجى إدخال بريد إلكتروني صحيح.';
        }
    });
}