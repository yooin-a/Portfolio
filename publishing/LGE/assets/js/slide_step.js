var slideStep = {
    slideWrapper: $(".slide-step"),
    slideAnimateTarget: $(".slide-step .slide li").eq(0),
    arrSlide: $(".slide-step .slide li"),
    arrButton: $(".tablist button"),
    arrContentText: [
        'ThinQ 앱 접속 후, 마이홈 리포트<span>▶</span> <br class="mobile-show"/>가전 에너지 모니터링을 선택합니다.',
        '에너지절약미션(DR) 참여하러 가기를 선택합니다.',
        '안내에 따라 진행하여 계정 연결하기를 선택합니다.',
        '에챌 계정을 연결합니다.',
        '에너지절약미션(DR)에 참여할 기기를 등록합니다.'
    ],
    clickedTime:0,
    indexButtonActive: function(){
        var returnIndex;
        slideStep.arrButton.each(
            function(index, element){
                if ( $(element).hasClass("active") ) {
                    returnIndex=index;
                }
            }
        )
        return returnIndex
    },
    changeButtonActive: function( element ){
        slideStep.arrButton.removeClass("active")
        element.addClass("active")
    },
    displayButtonArrow: function(){

        $(".slider-arrow button").removeClass("off")

        if( slideStep.indexButtonActive() == 0 ){
            $(".slider-arrow button.btn-left").addClass("off")
        }

        if( slideStep.indexButtonActive() == slideStep.arrButton.length - 1 ){
            $(".slider-arrow button.btn-right").addClass("off")
        }

    },
    changeSlide: function(){

        slideStep.displayButtonArrow();

        $(".stepWrap .info").html(slideStep.arrContentText[slideStep.indexButtonActive()])
        slideStep.slideAnimateTarget.css("margin-left", ( slideStep.indexButtonActive() * -100 ) + "%")
        
    },
    slidePrev: function(){
        slideStep.scrollToSlide();
        if ( slideStep.indexButtonActive() > 0){
            slideStep.changeButtonActive(slideStep.arrButton.eq( slideStep.indexButtonActive()-1) );
            slideStep.changeSlide();
        }
    },
    slideNext: function(){
        slideStep.scrollToSlide();
        if ( slideStep.indexButtonActive() < slideStep.arrButton.length - 1 ){
            slideStep.changeButtonActive(slideStep.arrButton.eq( slideStep.indexButtonActive()+1) );
            slideStep.changeSlide();
        }
    },
    scrollToSlide: function(){
        if ( slideStep.clickedTime === 0 ){
            slideStep.clickedTime++;
            $("html, body").animate({scrollTop: $(".slide-frame").offset().top}, 500);
        }
    },
    touchStartPosition: 0,
    touchEndPosition: 0,

}

slideStep.displayButtonArrow();

slideStep.arrButton.on("click", function(){
    slideStep.changeButtonActive($(this));
    slideStep.changeSlide();
})

$(".slide-step .btn-left").on("click", function(){
    slideStep.slidePrev();
})

$(".slide-step .btn-right").on("click", function(){
    slideStep.slideNext();
})

slideStep.slideWrapper.bind("touchstart", function( event ){
    slideStep.touchStartPosition = event.originalEvent.changedTouches[0].clientX
})

slideStep.slideWrapper.bind("touchend", function( event ){
    slideStep.touchEndPosition = event.originalEvent.changedTouches[0].clientX

    if ( slideStep.touchStartPosition > slideStep.touchEndPosition+5 ) {

        slideStep.slideNext();

    } else if ( slideStep.touchStartPosition+5 < slideStep.touchEndPosition ) {

        slideStep.slidePrev();

    }
})