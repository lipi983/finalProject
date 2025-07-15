// console.log($)
$(document).ready(function(){
    $('.nameErr').hide();
    $('.numerr').hide();
    $('.mailErr').hide();
    $('.passwErr').hide();
    $('.conpassErr').hide();
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
    $('.passw').on('input',function(){
        let data1=$('.passw').val();
        if(data1.length<1)
        {
            $('.passwErr').show()
            $('.passwErr').html("Required Field")
        }
        else if(data1.length<8)
        {
            $('.passwErr').show()
            $('.passwErr').html("Minimum 8 Characters Required") 
        }
        else{
            $('.passwErr').hide()
        }
    })
    $('.cop').on('input',function(){
        let data2=$('.cop').val();
        let data1=$('.passw').val();
        if(data1==data2)
        {
            $('.conpassErr').show();
            $('.conpassErr').html("Password Matched")
        } else{
            $('.conpassErr').show();
            $('.conpassErr').html("Password is Incorrect");
        }
    })
    $('.creatAcc').on('click',function(){
        alert("Registered Successful");
    })
})