const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    grabCursor: true,
    mousewheel: true,
    keyboard: true,
    // effect: 'flip'
    effect: 'cards',
    cardsEffect: {
        // ...
    },
    
    // effect: 'coverflow',
    // coverflowEffect: {
    //     rotate: 30,
    //     slideShadows: false,
    // },
});