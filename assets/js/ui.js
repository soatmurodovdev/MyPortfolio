// ui.js — Preloader, Settings Panel, Live World Clock, Gallery Lightbox
// Website version: 3.0.0

/*==================== PRELOADER ====================*/
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => preloader.classList.add('is-hidden'), 350);
    }
});

/*==================== SETTINGS PANEL OPEN / CLOSE ====================*/
(function initSettingsPanel() {
    const toggleBtn = document.getElementById('settings-toggle');
    const closeBtn = document.getElementById('settings-close');
    const panel = document.getElementById('settings-panel');
    const overlay = document.getElementById('settings-overlay');

    if (!toggleBtn || !panel || !overlay) return;

    const openPanel = () => {
        panel.classList.add('is-open');
        overlay.classList.add('is-open');
        toggleBtn.classList.add('is-active');
    };

    const closePanel = () => {
        panel.classList.remove('is-open');
        overlay.classList.remove('is-open');
        toggleBtn.classList.remove('is-active');
    };

    toggleBtn.addEventListener('click', () => {
        panel.classList.contains('is-open') ? closePanel() : openPanel();
    });

    if (closeBtn) closeBtn.addEventListener('click', closePanel);
    overlay.addEventListener('click', closePanel);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePanel();
    });
})();

/*==================== LIVE CLOCK — header badge + world clock panel ====================*/
(function initLiveClocks() {
    const navClockTime = document.getElementById('nav-clock-time');
    const localTzName = document.getElementById('local-tz-name');
    const worldClockItems = document.querySelectorAll('.world-clock__item');

    if (!navClockTime && worldClockItems.length === 0) return;

    const userTimeZone = Intl.DateTimeFormat().resolvedTimeZone
        || Intl.DateTimeFormat().resolvedOptions().timeZone
        || 'UTC';

    if (localTzName) {
        localTzName.textContent = userTimeZone.split('/').pop().replace('_', ' ');
    }

    function formatTime(timeZone) {
        try {
            return new Intl.DateTimeFormat('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
                timeZone: timeZone === 'local' ? userTimeZone : timeZone
            }).format(new Date());
        } catch (err) {
            return '--:--';
        }
    }

    function tick() {
        if (navClockTime) {
            navClockTime.textContent = formatTime(userTimeZone);
        }
        worldClockItems.forEach(item => {
            const tz = item.getAttribute('data-tz');
            const timeEl = item.querySelector('.world-clock__time');
            if (timeEl) timeEl.textContent = formatTime(tz);
        });
    }

    tick();
    setInterval(tick, 30000);
})();

/*==================== GALLERY LIGHTBOX ====================*/
(function initLightbox() {
    const cards = document.querySelectorAll('.gallery__card');
    if (!cards.length) return;

    const images = Array.from(cards).map(card => ({
        src: card.querySelector('img') ? card.querySelector('img').getAttribute('src') : '',
        caption: card.querySelector('.gallery__info') ? card.querySelector('.gallery__info').innerText.replace('\n', ' — ') : ''
    }));

    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <i class="uil uil-times lightbox__close"></i>
        <i class="uil uil-angle-left-b lightbox__prev"></i>
        <img class="lightbox__img" src="" alt="Gallery preview">
        <i class="uil uil-angle-right-b lightbox__next"></i>
        <div class="lightbox__caption"></div>
    `;
    document.body.appendChild(lightbox);

    const imgEl = lightbox.querySelector('.lightbox__img');
    const captionEl = lightbox.querySelector('.lightbox__caption');
    let currentIndex = 0;

    function showImage(index) {
        currentIndex = (index + images.length) % images.length;
        imgEl.src = images[currentIndex].src;
        captionEl.textContent = images[currentIndex].caption;
    }

    function openLightbox(index) {
        showImage(index);
        lightbox.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    cards.forEach((card, index) => {
        card.addEventListener('click', () => openLightbox(index));
    });

    lightbox.querySelector('.lightbox__close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox__prev').addEventListener('click', () => showImage(currentIndex - 1));
    lightbox.querySelector('.lightbox__next').addEventListener('click', () => showImage(currentIndex + 1));
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('is-open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    });
})();

/*==================== GENERIC SCROLL-REVEAL ====================*/
(function initScrollReveal() {
    const targets = document.querySelectorAll(
        '.about__container > *, .pathway__group, .skills__content, .testimonial__container, .gallery__card, .contact__hub, .footer__content'
    );
    if (!targets.length || !('IntersectionObserver' in window)) {
        targets.forEach(t => t.classList.add('reveal-up', 'in-view'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(t => {
        t.classList.add('reveal-up');
        observer.observe(t);
    });
})();
