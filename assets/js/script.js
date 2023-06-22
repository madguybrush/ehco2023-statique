
$(window).load(function(){
  // PAGE IS FULLY LOADED  
  // FADE OUT YOUR OVERLAYING DIV

  //$('.container-loader').css('opacity', '0'); 
  //$('.container-loader').css('display', 'none'); 

  $('.loader').addClass('d-none ');
  $('header').removeClass('d-none ');
  $('.navbar').removeClass('d-none ');
  $('main').removeClass('d-none ');
  $('footer').removeClass('d-none ');

 //$('.container').css('opacity', '1');  
   
 
});



var swiper_hp_sejours = new Swiper('.swiper_hp_sejours', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView : 1.2,
  spaceBetween: 24,
  centeredSlides: false,
  breakpoints: {
    900: {
      slidesPerView: 1.5,
  },  
      /*992: {
          slidesPerView: 2,
        
      },*/
      1200: {
          slidesPerView: 2.5,
          //spaceBetween: 28,
          //centeredSlides: false,
      },
      1400: {
        slidesPerView: 3.3,
        spaceBetween: 40,
        //centeredSlides: false,
    },


  },
  // Navigation arrows
  navigation: {
      nextEl: '.next_hp_sejours',
      prevEl: '.prev_hp_sejours',
  },
});

var swiper_hp_habitats = new Swiper('.swiper_hp_habitats', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView : 1.2,
  spaceBetween: 24,
  centeredSlides: false,
  breakpoints: {
    1000: {
      slidesPerView: 1.5,
      //spaceBetween: 28,
      //centeredSlides: false,
  },
      1200: {
          slidesPerView: 2.2,
          //spaceBetween: 28,
          //centeredSlides: false,
      },
      1400: {
        slidesPerView: 2.5,
        spaceBetween: 38,
        //centeredSlides: false,
    },
    1600: {
      slidesPerView: 3.05,
      spaceBetween: 45,
      //centeredSlides: false,
  },



  },
  // Navigation arrows
  navigation: {
      nextEl: '.next_hp_habitats',
      prevEl: '.prev_hp_habitats',
  },
});




/*
const swiper_hp_sejours = new Swiper('.swiper', {

    slidesPerView: 3,
    direction: 'horizontal',
    loop: true,
  

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });*/