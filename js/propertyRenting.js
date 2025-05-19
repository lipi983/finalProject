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
    
// city
     $('.dropDown1').on('click',function(){
        $('.cityProperty').slideUp();
        $(this).hide();
        $('.angleUp1').show();
    })

     $('.angleUp1').on('click',function(){
        $('.cityProperty').slideDown();
        $(this).hide();
        $('.dropDown1').show();
        $('.wraper').hide();
        $('.more').show();
    })

    $('.more').on('click',function(){
        $('.wraper').slideDown();
        $(this).hide();
    })

// property Type
     $('.dropDown2').on('click',function(){
        $('.flat').slideUp();
        $(this).hide();
        $('.angleUp2').show();
    })

     $('.angleUp2').on('click',function(){
        $('.flat').slideDown();
        $(this).hide();
        $('.dropDown2').show();
    })

// bhk
     $('.dropDown3').on('click',function(){
        $('.bedHallkit').slideUp();
        $(this).hide();
        $('.angleUp3').show();
    })

     $('.angleUp3').on('click',function(){
        $('.bedHallkit').slideDown();
        $(this).hide();
        $('.dropDown3').show();
        $('.bhk6').hide();
        $('.moreBhk').show();
    })

    $('.moreBhk').on('click',function(){
        $('.bhk6').slideDown();
        $(this).hide();
    })


    // Budget
     $('.dropDown4').on('click',function(){
        $('.maxRange').slideUp();
        $(this).hide();
        $('.angleUp4').show();
    })

     $('.angleUp4').on('click',function(){
        $('.maxRange').slideDown();
        $(this).hide();
        $('.dropDown4').show();
    })

    // Area
     $('.dropDown5').on('click',function(){
        $('.areaSq').slideUp();
        $(this).hide();
        $('.angleUp5').show();
    })

     $('.angleUp5').on('click',function(){
        $('.areaSq').slideDown();
        $(this).hide();
        $('.dropDown5').show();
    })

    // Posted By
      $('.dropDown6').on('click',function(){
        $('.posted').slideUp();
        $(this).hide();
        $('.angleUp6').show();
    })

     $('.angleUp6').on('click',function(){
        $('.posted').slideDown();
        $(this).hide();
        $('.dropDown6').show();
    })

    // Aminities
     $('.dropDown7').on('click',function(){
        $('.aminities').slideUp();
        $(this).hide();
        $('.angleUp7').show();
    })

     $('.angleUp7').on('click',function(){
        $('.aminities').slideDown();
        $(this).hide();
        $('.dropDown7').show();
         $('.moream').hide();
         $('.aminitiesMore').show();
    })

     $('.aminitiesMore').on('click',function(){
        $('.moream').slideDown();
        $(this).hide();
    })

    // Bathroom
     $('.dropDown8').on('click',function(){
        $('.bathroom').slideUp();
        $(this).hide();
        $('.angleUp8').show();
    })

     $('.angleUp8').on('click',function(){
        $('.bathroom').slideDown();
        $(this).hide();
        $('.dropDown8').show();
    })

    // Furnising
     $('.dropDown9').on('click',function(){
        $('.furnising').slideUp();
        $(this).hide();
        $('.angleUp9').show();
    })

     $('.angleUp9').on('click',function(){
        $('.furnising').slideDown();
        $(this).hide();
        $('.dropDown9').show();
    })
})