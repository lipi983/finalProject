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
})