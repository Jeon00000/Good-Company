$(function(){
    $('.gnb').hover(function(){
        $('.lnb').stop().slideToggle(200);
        $('.background').stop().slideToggle(200); 
        // $('header').css('backgroundColor','white');
    });

    
    // $('.gnb').mouseenter(function(){
    //     $('header').css('backgroundColor','white');
    // })
    // $('.gnb').mouseleave(function(){
    //     $('header').css('backgroundColor','');
    // })

    $('.box').mouseenter(function(){
        $(this).css('box-shadow', '5px 20px 20px 0 rgba(0,0,0,0.2)');
    });
    $('.box').mouseleave(function(){
        $(this).css('box-shadow', '');
    });

    


});//jquery

$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function(){
        scroll_pos = $(this).scrollTop();
        if(scroll_pos>120){
            $('header').css('background-color', 'white');
            $('header').css('border-bottom', '1px solid #ddd');
        }else if(scroll_pos<120){
            $('header').css('background-color', '');
            $('header').css('border-bottom', '');
        }
    });
});


$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function(){
        scroll_pos = $(this).scrollTop();
        if(scroll_pos>250){
            $('.topup').show();

        }else if(scroll_pos<300){
            $('.topup').hide();
        }
    });
});

$(document).ready(function(){
    $('body').smoothWheel();
});

