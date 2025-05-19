// alert("helo")
$(function(){
    $('.btn1').on('click',function(){
        $('.btn1')
        .css({backgroundColor:"#FFA600", color:"white",});
    })

     $('.btn2').on('click',function(){
        $('.btn2')
        .css({backgroundColor:"#FFA600", color:"white",});
    })

     $('.btn3').on('click',function(){
        $('.btn3')
        .css({backgroundColor:"#FFA600", color:"white",});
    })

     $('.btn4').on('click',function(){
        $('.btn4')
        .css({backgroundColor:"#FFA600", color:"white",});
    })

     $('.btn5').on('click',function(){
        $('.btn5')
        .css({backgroundColor:"#FFA600", color:"white",});
    })

     $('.btn6').on('click',function(){
        $('.btn6')
        .css({backgroundColor:"#FFA600", color:"white",});
    })

     $('.btn7').on('click',function(){
        $('.btn7')
        .css({backgroundColor:"#FFA600", color:"white",});
    })

     $('.nameErr').hide();
    $('.numerr').hide();
    $('.mailErr').hide();
     $('.name').on('input',function(){
        let data3=$('.name').val();
        if(data3.length<1)
        {
            $('.nameErr').show();
            $('.nameErr').html("Required Field")
        }
        else{
            $('.nameErr').hide();
        }
    })
      $('.number').on('input',function(){
        let data4=$('.number').val();
        if(data4.length<1)
        {
            $('.numerr').show();
            $('.numerr').html("REquired Field")
        }
        else if(data4.length>10)
        {
            $('.numerr').show();
            $('.numerr').html("Number Is Incorrect")
        }
        else{
            $('.numerr').hide();
        }
    })
    $(".mail").on("input", function(){
        // alert("The paragraph was clicked.");
        let data=$('.mail').val();
        if(data.length<1)
        {
            // console.log("Required Field");
            $('.mailErr').show()
            $('.mailErr').html("Required Field")
        }
        else if(data.length<10)
        {
            // console.log("Minimum 10 Characters Required")
            $('.mailErr').show()
            $('.mailErr').html("Minimum 10 Characters Required")
        }
        else{
            // console.log("No Error")
            $('.mailErr').hide()
        }
      })

      $('.submit').on('click',function(){
        alert("Process Successful");
      })


      $('.angle1').on('click',function(){
        $('.para1').slideDown();
        $(this).hide();
        $('.angleUp1').show();
      })
       $('.angleUp1').on('click',function(){
        $('.para1').slideUp();
        $(this).hide();
        $('.angle1').show();
      })

       $('.angle2').on('click',function(){
        $('.para2').slideDown();
        $(this).hide();
        $('.angleUp2').show();
      })
       $('.angleUp2').on('click',function(){
        $('.para2').slideUp();
        $(this).hide();
        $('.angle2').show();
      })

       $('.angle3').on('click',function(){
        $('.para3').slideDown();
        $(this).hide();
        $('.angleUp3').show();
      })
       $('.angleUp3').on('click',function(){
        $('.para3').slideUp();
        $(this).hide();
        $('.angle3').show();
      })

       $('.angle4').on('click',function(){
        $('.para4').slideDown();
        $(this).hide();
        $('.angleUp4').show();
      })
       $('.angleUp4').on('click',function(){
        $('.para4').slideUp();
        $(this).hide();
        $('.angle4').show();
      })

       $('.angle5').on('click',function(){
        $('.para5').slideDown();
        $(this).hide();
        $('.angleUp5').show();
      })
       $('.angleUp5').on('click',function(){
        $('.para5').slideUp();
        $(this).hide();
        $('.angle5').show();
      })

       $('.angle6').on('click',function(){
        $('.para6').slideDown();
        $(this).hide();
        $('.angleUp6').show();
      })
       $('.angleUp6').on('click',function(){
        $('.para6').slideUp();
        $(this).hide();
        $('.angle6').show();
      })

       $('.angle7').on('click',function(){
        $('.para7').slideDown();
        $(this).hide();
        $('.angleUp7').show();
      })
       $('.angleUp7').on('click',function(){
        $('.para7').slideUp();
        $(this).hide();
        $('.angle7').show();
      })

       $('.angle8').on('click',function(){
        $('.para8').slideDown();
        $(this).hide();
        $('.angleUp8').show();
      })
       $('.angleUp8').on('click',function(){
        $('.para8').slideUp();
        $(this).hide();
        $('.angle8').show();
      })
      $('.angle9').on('click',function(){
        $('.para9').slideDown();
        $(this).hide();
        $('.angleUp9').show();
      })
       $('.angleUp9').on('click',function(){
        $('.para9').slideUp();
        $(this).hide();
        $('.angle9').show();
      })


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