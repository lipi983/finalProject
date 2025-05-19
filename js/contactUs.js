// console.log($)
$(document).ready(function(){
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
            $('.numerr').html("Required Field")
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
  
    $('#send').on('click',function(){
        alert("Message was Successfully Send");
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