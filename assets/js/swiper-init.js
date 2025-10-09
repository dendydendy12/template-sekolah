// assets/js/swiper-init.js
document.addEventListener('DOMContentLoaded', function () {
  // Pastikan Swiper sudah diload
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper not found. Include swiper-bundle.min.js before swiper-init.js');
    return;
  }

  // ---------------------------
  // Swiper untuk Partner / Mitra
  // ---------------------------
  const partnerEl = document.querySelector('.partnerSwiper');
  if (partnerEl) {
    const partnerSwiper = new Swiper(partnerEl, {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      allowTouchMove: true,
      grabCursor: true,
      freeMode: true,
      freeModeMomentum: false,
      speed: 6000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: { slidesPerView: 2, spaceBetween: 20 },
        640: { slidesPerView: 3, spaceBetween: 25 },
        1024: { slidesPerView: 4, spaceBetween: 30 },
      },
    });

    // Pause/resume animasi CSS (jika ada .animate-scroll)
    const wrapper = partnerEl.querySelector('.animate-scroll');
    if (wrapper) {
      partnerSwiper.on('touchStart', function () {
        wrapper.style.animationPlayState = 'paused';
      });
      partnerSwiper.on('touchEnd', function () {
        setTimeout(function () {
          wrapper.style.animationPlayState = 'running';
        }, 1000);
      });
    }
  }

  // ---------------------------
  // Swiper untuk Kompetensi Keahlian
  // ---------------------------
  const keahlianEl = document.querySelector('.mySwiperKeahlian');
  if (keahlianEl) {
    const paginationEl = keahlianEl.querySelector('.swiper-pagination');

    const keahlianSwiper = new Swiper(keahlianEl, {
      slidesPerView: 1.2,
      spaceBetween: 20,
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      pagination: paginationEl ? { el: paginationEl, clickable: true } : undefined,
      breakpoints: {
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }

  // ---------------------------
  // Swiper untuk Artikel Terbaru
  // ---------------------------
  const articleEl = document.querySelector('.articleSwiper');
  if (articleEl) {
    const articleSwiper = new Swiper(articleEl, {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 20,
      grabCursor: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
});

  // ---------------------------
  // Swiper untuk Fasilitas
  // ---------------------------
  const fasilitasEl = document.querySelector('.fasilitasSwiper');
  if (fasilitasEl) {
    const fasilitasSwiper = new Swiper(fasilitasEl, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      pagination: {
        el: fasilitasEl.querySelector('.swiper-pagination'),
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 1.2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2.5 },
      },
    });
  }

