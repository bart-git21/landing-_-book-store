const swiper = new Swiper('.book-slider', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    mousewheel: true,
    centeredSlides: false,
    // autoplay: {
    //     delay: 9500,
    //     disableOnInteraction: false,
    // },
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    }
});
  
const swiper2 = new Swiper('.featured-slider', {
    loop: true,
    // mousewheel: true,
    grabCursor: true,
    centeredSlides: false,
    // autoplay: {
    //     delay: 9500,
    //     disableOnInteraction: false,
    // },
    // slidesPerView: 3,
    spaceBetween: 80,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
        1300: {
            slidesPerView: 4,
        },
        1500: {
            slidesPerView: 5,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const swiper3 = new Swiper('.arrivals-slider', {
    loop: true,
    // mousewheel: true,
    centeredSlides: false,
    // autoplay: {
    //     delay: 9500,
    //     disableOnInteraction: false,
    // },
    slidesPerView: 3,
    spaceBetween: 50,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 4,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const swiper4 = new Swiper('.reviews__slider', {
    loop: true,
    // mousewheel: true,
    grabCursor: true,
    centeredSlides: false,
    // autoplay: {
    //     delay: 9500,
    //     disableOnInteraction: false,
    // },
    slidesPerView: 3,
    spaceBetween: 50,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 4,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const swiper5 = new Swiper('.blogs__slider', {
    loop: true,
    // mousewheel: true,
    grabCursor: true,
    centeredSlides: false,
    // autoplay: {
    //     delay: 9500,
    //     disableOnInteraction: false,
    // },
    slidesPerView: 3,
    spaceBetween: 50,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 4,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});