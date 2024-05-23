$(document).ready(function() {
    // 새로 고침 시 상단 이동
    $("html, body").animate({ scrollTop: 0 }); 

    // scroll에 따른 애니메이션 동작
    $(window).scroll( function(){
            
        $('.thinQ_app_img').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 5;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).addClass('animated fadeInUp');
            }
            
        }); 

        $('.thinQ_step_img').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('ol li').addClass('animated fadeIn');
            }            
        }); 
    });
});