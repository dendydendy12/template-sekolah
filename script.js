
// Slider functionality
const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('[id^="dot-"]');

let currentIndex = 0;
const cardWidth = 320 + 32; // card width + gap
const visibleCards = Math.min(3, window.innerWidth < 768 ? 1 : 3);
const totalCards = 6;
const maxIndex = Math.max(0, totalCards - visibleCards);

function updateSlider() {
    const scrollAmount = currentIndex * cardWidth;
    slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });

    // Update dots
    dots.forEach((dot, index) => {
        if (index === Math.floor(currentIndex)) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-emerald-700');
        } else {
            dot.classList.remove('bg-emerald-700');
            dot.classList.add('bg-gray-300');
        }
    });

    // Update button states
    prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '0.8';
    nextBtn.style.opacity = currentIndex >= maxIndex ? '0.3' : '0.8';

    prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
    nextBtn.style.pointerEvents = currentIndex >= maxIndex ? 'none' : 'auto';
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateSlider();
    }
});

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = Math.min(index, maxIndex);
        updateSlider();
    });
});

// Initialize
updateSlider();

// Responsive behavior
function checkResponsive() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        // On mobile, hide navigation buttons and allow natural scrolling
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        slider.style.paddingLeft = '0';
        slider.style.paddingRight = '0';
    } else {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
        slider.style.paddingLeft = '3rem';
        slider.style.paddingRight = '3rem';
    }
}

window.addEventListener('resize', () => {
    checkResponsive();
    updateSlider();
});

checkResponsive();

// Touch/drag functionality for mobile
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationId = 0;

slider.addEventListener('touchstart', touchStart);
slider.addEventListener('touchend', touchEnd);
slider.addEventListener('touchmove', touchMove);

function touchStart(event) {
    if (window.innerWidth >= 768) return; // Only on mobile

    isDragging = true;
    startPos = getPositionX(event);
    animationId = requestAnimationFrame(animation);
    slider.style.cursor = 'grabbing';
}

function touchEnd() {
    if (window.innerWidth >= 768) return;

    isDragging = false;
    cancelAnimationFrame(animationId);

    const movedBy = currentTranslate - prevTranslate;

    // If moved enough, change slide
    if (movedBy < -100 && currentIndex < maxIndex) {
        currentIndex++;
    }

    if (movedBy > 100 && currentIndex > 0) {
        currentIndex--;
    }

    setSliderPosition();
    updateSlider();
    slider.style.cursor = 'grab';
}

function touchMove(event) {
    if (isDragging && window.innerWidth < 768) {
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
    }
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
    if (window.innerWidth < 768) {
        const translateX = currentTranslate;
        slider.scrollLeft = -translateX;
    }
}
// function utk mengatur posisi top blueBg agar dimulai tepat pada posisi #contactMessage
function alignBlueBackground() {
    const section = document.getElementById('contactSection');
    const blueBg = document.getElementById('blueBg');
    const message = document.getElementById('contactMessage');
    if (!section || !blueBg || !message) return;

    const messageRect = message.getBoundingClientRect();
    const sectionRect = section.getBoundingClientRect();

    // top relative to section
    const topRelativeToSection = Math.max(0, messageRect.top - sectionRect.top);

    // set top and height of blueBg
    blueBg.style.top = `${topRelativeToSection}px`;
    blueBg.style.height = `${sectionRect.height - topRelativeToSection}px`;
}

window.addEventListener('load', alignBlueBackground);
window.addEventListener('resize', () => {
    clearTimeout(window._blueTimer);
    window._blueTimer = setTimeout(alignBlueBackground, 80);
});



const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileOverlay = document.getElementById('mobileOverlay');
const closeOverlay = document.getElementById('closeOverlay');

hamburgerBtn.addEventListener('click', () => {
    mobileOverlay.classList.remove('-translate-x-full');
});

closeOverlay.addEventListener('click', () => {
    mobileOverlay.classList.add('-translate-x-full');
});