
  AOS.init();

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      //  pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
       navigation: {
        nextEl: ".arow1",
        prevEl: ".arow2",
      },
      
       breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    991: {
       slidesPerView: 2,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  },
  

  });
      
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      //  pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
      //  navigation: {
      //   nextEl: ".arow1",
      //   prevEl: ".arow2",
      // },
      
       breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    991: {
       slidesPerView: 2,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  },
  

   navigation: {
        nextEl: ".arow3",
        prevEl: ".arow4",
      },
   

  });

    

    


$(function(){
    let stickyNavTop=$('nav').offset().top;
    // console.log(stickyNavTop)
    function stickyNav(){
        let scrollTop=$(window).scrollTop();
       
        if (scrollTop > stickyNavTop) {
            $('nav').addClass('sticky');
       
        } else {
            $('nav').removeClass('sticky');
        }
    }

    stickyNav();
    // and run it again whenever scrolling is done
    $(window).scroll(function(){
        stickyNav();
      
    })

    $('.bar').on('click',function(){
      $('nav')
      .css({backgroundColor:"rgb(63, 63, 63)"});
    })
})