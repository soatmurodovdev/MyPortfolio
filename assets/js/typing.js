/*================== TYPED.JS — til almashtirishga moslashgan ==================*/

let typedInstance = null;

function startTypedAnimation(strings) {
    const target = document.querySelector('.type_js');
    if (!target || typeof Typed === 'undefined') return;

    if (typedInstance) {
        typedInstance.destroy();
    }

    typedInstance = new Typed('.type_js', {
        strings: strings && strings.length ? strings : [
            'MURODJON SOATMURODOV',
            'Hospitality Professional',
            'Room Service Specialist',
            'Guest Service Expert',
            'International Waiter'
        ],
        typeSpeed: 85,
        backSpeed: 50,
        backDelay: 1400,
        loop: true
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const initialStrings = (window.i18n && window.i18n.getTypedStrings) ? window.i18n.getTypedStrings() : null;
    startTypedAnimation(initialStrings);
});

// Til o'zgarganda typing matnlarini ham yangilaymiz
window.addEventListener('languagechange:site', (e) => {
    if (e.detail && e.detail.typedStrings) {
        startTypedAnimation(e.detail.typedStrings);
    }
});
