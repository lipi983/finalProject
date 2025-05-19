$(function(){
    $('.mailerr').hide();
    $('.passerr').hide();

    $('.mail').on('input',function(){
        let data=$('.mail').val();
        if(data.length<1)
        {
            $('.mailerr').show();
            $('.mailerr').html("Required Field");
        }
        else if(data.length<10)
        {
            $('.mailerr').show();
            $('.mailerr').html("Minimum 10 characters");
        }
        else{
            $('.mailerr').hide();
        }
    })

    $('.password').on('input',function(){
        let data=$('.password').val();
        if(data.length<1)
        {
            $('.passerr').show();
            $('.passerr').html("Required Field");
        }
        else if(data.length<8)
        {
            $('.passerr').show();
            $('.passerr').html("Minimum 8 characters");
        }
        else{
            $('.passerr').hide();
        }
    })

    $('.loginDone').on('click',function(){
        alert("Login Successful");
    })

})