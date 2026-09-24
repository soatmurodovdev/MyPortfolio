// Copyright: Murodjon Soatmurodov
// Website version: 1.2.0



/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== TESTIMONIAL SWIPER ====================*/
if (document.querySelector('.testimonial__container')) {
    let swiperTestimonial = new Swiper('.testimonial__container', {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
        },
        autoplay: {
            delay: 4500,
            disableOnInteraction: true,
        },
        pagination: {
            el: ".testimonial__container .swiper-pagination",
            clickable: true,
        },
    });
}


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')
        const navLinkEl = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        if (!navLinkEl) return

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinkEl.classList.add('active-link')
        } else {
            navLinkEl.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
        // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/
const themeButtons = [document.getElementById('theme-button'), document.getElementById('theme-button-panel')].filter(Boolean)
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const setButtonsIcon = (isDark) => {
    themeButtons.forEach(btn => btn.classList.toggle(iconTheme, isDark))
}

// We validate if the user previously chose a topic
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    setButtonsIcon(selectedIcon === 'uil-moon' ? true : selectedTheme === 'dark')
}

function toggleSiteTheme() {
    document.body.classList.toggle(darkTheme)
    const isDark = document.body.classList.contains(darkTheme)
    setButtonsIcon(isDark)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', isDark ? 'uil-sun' : 'uil-moon')
}

themeButtons.forEach(btn => btn.addEventListener('click', toggleSiteTheme))




const skillItems = document.querySelectorAll('.skill__item');

const animateSkills = () => {
    skillItems.forEach(item => {
        const target = item.getAttribute('data-target');
        const fill = item.querySelector('.skill__fill');
        const countText = item.querySelector('.skill__count');
        
        // Bar fill
        fill.style.width = target + '%';
        
        // Counter logic
        let count = 0;
        let speed = 2000 / target; // Barcha barlar bir xil vaqtda tugashi uchun
        
        let counter = setInterval(() => {
            if(count >= target) {
                clearInterval(counter);
            } else {
                count++;
                countText.innerText = count + '%';
            }
        }, speed);
    });
}

// Scroll bo'lganda ishga tushirish
let skillAnimated = false;
window.addEventListener('scroll', () => {
    const section = document.getElementById('skills');
    const pos = section.getBoundingClientRect().top;
    const screen = window.innerHeight / 1.2;

    if(pos < screen && !skillAnimated) {
        animateSkills();
        skillAnimated = true;
    }
});


const slider = document.querySelector('.gallery__container');
if (slider) {
    let isDown = false;
    let startX;
    let scrollLeft;
    let dragged = false;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        dragged = false;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => { isDown = false; });
    slider.addEventListener('mouseup', () => { isDown = false; });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Tezlikni oshirish
        if (Math.abs(walk) > 5) dragged = true;
        slider.scrollLeft = scrollLeft - walk;
    });
    // Sudralganda (drag) lightbox tasodifan ochilib qolmasligi uchun
    slider.addEventListener('click', (e) => {
        if (dragged) { e.stopPropagation(); dragged = false; }
    }, true);
}






/*==================== EXPERIENCE CARD SCROLL REVEAL ====================*/
const expCards = document.querySelectorAll('.exp-card');

if (expCards.length && 'IntersectionObserver' in window) {
    const expObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                expObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -60px 0px' });

    expCards.forEach(card => expObserver.observe(card));
} else {
    // Fallback: if IntersectionObserver isn't supported, just show the cards
    expCards.forEach(card => card.classList.add('in-view'));
}


/*==================== EMAILJS INTEGRATION ====================*/
const contactForm = document.getElementById('contact-form');
const sendBtn = document.getElementById('send-btn');

if (contactForm && sendBtn && typeof emailjs !== 'undefined') {
    emailjs.init("UISAlP0j6bgOdbVQZ");
    const btnText = sendBtn.querySelector('.btn-text');
    const originalBg = 'linear-gradient(135deg, var(--accent-color), var(--accent-color-deep))';

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const sendingLabel = (window.i18n && window.i18n.t('form_sending')) || 'Sending...';
        const sentLabel = (window.i18n && window.i18n.t('form_sent')) || 'Message Sent!';
        const errorLabel = (window.i18n && window.i18n.t('form_error')) || 'Error! Try Again';
        const idleLabel = (window.i18n && window.i18n.t('form_send')) || 'Send';

        btnText.innerText = sendingLabel;
        sendBtn.style.opacity = "0.7";
        sendBtn.disabled = true;

        emailjs.sendForm('service_qdhcs9j', 'template_0efx9sb', this)
            .then(function() {
                btnText.innerText = sentLabel;
                sendBtn.style.background = "#25d366";
                contactForm.reset();

                setTimeout(() => {
                    btnText.innerText = idleLabel;
                    sendBtn.style.background = originalBg;
                    sendBtn.style.opacity = "1";
                    sendBtn.disabled = false;
                }, 4000);
            }, function(error) {
                console.error('EmailJS error:', error);
                btnText.innerText = errorLabel;
                sendBtn.style.background = "#f44336";
                sendBtn.style.opacity = "1";
                sendBtn.disabled = false;

                setTimeout(() => {
                    btnText.innerText = idleLabel;
                    sendBtn.style.background = originalBg;
                }, 4000);
            });
    });
}