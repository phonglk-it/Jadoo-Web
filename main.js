new Swiper('.slider-sell', {
    loop: true,
    grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0:{
            slidesPerView: 1,
            spaceBetween: 20
        },
        1024:{
            slidesPerView: 3,
            spaceBetween: 190
        }
    }
 });

new Swiper('.slider-client', {
    loop: true,
    grabCursor: true,
  
    pagination: {
        el: '.client-point',
        clickable: true,
        dynamicBullets: true
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.custom-prev',
      prevEl: '.custom-next',
    },

    breakpoints: {
        0:{
            slidesPerView: 1,
            spaceBetween: 20
        },
        1024:{
            slidesPerView: 1,
            spaceBetween: 100,
            direction: 'vertical'
        }
    }
 });

new Swiper('.slider-logo', {
    loop: true,
    grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.custom-point',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.custom-right',
      prevEl: '.custom-left',
    },

    breakpoints: {
        0:{
            slidesPerView: 1,
            spaceBetween: 10
        },
        1024:{
            slidesPerView: 5,
            spaceBetween: 10
        }
    }
 });

  
