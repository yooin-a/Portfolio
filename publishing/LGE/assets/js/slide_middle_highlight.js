var slideMiddleHighlight = {
    //첫번째 element의 초기 left 값
    percentagePositionLeft: "-12.5%",
    //next 또는 prev 진행 시, 첫번째 element의 위치값
    percentageAnimationLeft: "-37.5%",
    sliderWrapper: $(".slider-middle-highlight .slider-wrapper"),
    sliderContent: $(".slider-middle-highlight .slider-content"),
    //애니메이션 진행중 여부 : 1 = 작동중, 0 = 작동 대기
    clicked: 0,
    touchStartPosition: 0,
    touchEndPosition: 0,
    differencePositionX: 0,
    removeClassOnAll: function(){
        $(".slider-middle-highlight .slider-content li").removeClass("on")
    },
    slideNext : function(){
        if( slideMiddleHighlight.clicked < 1 ) {

            slideMiddleHighlight.clicked++;
            
            slideMiddleHighlight.removeClassOnAll();
            $(".slider-middle-highlight .slider-content li").eq(3).addClass("on")

            slideMiddleHighlight.sliderContent.animate({"left":slideMiddleHighlight.percentageAnimationLeft}, 500, function(){
                $(".slider-middle-highlight .slider-content li").eq(0).appendTo(slideMiddleHighlight.sliderContent)
                slideMiddleHighlight.resetPosition();
                slideMiddleHighlight.clicked--;
            })

            slideMiddleHighlight.differencePositionX = 0;

        }
    },
    slidePrev : function(){
        if( slideMiddleHighlight.clicked < 1 ) {
            slideMiddleHighlight.clicked++;

            $(".slider-middle-highlight .slider-content li:last-child").prependTo(slideMiddleHighlight.sliderContent)

            slideMiddleHighlight.removeClassOnAll();
            $(".slider-middle-highlight .slider-content li").eq(2).addClass("on")

            slideMiddleHighlight.sliderContent.css(
                "left", "calc(" + slideMiddleHighlight.percentageAnimationLeft + " - " +
                slideMiddleHighlight.differencePositionX + "px)"
            )

            slideMiddleHighlight.sliderContent.animate({"left":slideMiddleHighlight.percentagePositionLeft}, 500, function(){
                slideMiddleHighlight.clicked--;
            })

            slideMiddleHighlight.differencePositionX = 0;

        }
    },
    //layout이 화면의 크기에 따라서 달라지도록 설정. 3번째 element가 중앙에 올 수 있도록 지정.
    setPercentageLeft : function(){
        if ( window.innerWidth <= 767 ) {

            slideMiddleHighlight.percentagePositionLeft = "-160%"
            slideMiddleHighlight.percentageAnimationLeft = "-244%"

        } else if ( window.innerWidth <= 1339 ) {

            slideMiddleHighlight.percentagePositionLeft = "-25%"
            slideMiddleHighlight.percentageAnimationLeft = "-55%"

        } else if ( window.innerWidth >= 1340 ){

            slideMiddleHighlight.percentagePositionLeft = "-12.5%";
            slideMiddleHighlight.percentageAnimationLeft = "-37.5%";
    
        }
    },
    resetPosition : function(){
        slideMiddleHighlight.sliderContent.css( "left", slideMiddleHighlight.percentagePositionLeft );
    },
}

//중앙(3번째)의 element에 class "on"을 추가
$(".slider-middle-highlight .slider-content li").eq(2).addClass("on")

slideMiddleHighlight.setPercentageLeft();
slideMiddleHighlight.resetPosition();


$(".slider-middle-highlight .btn-left").on("click", function(){
    slideMiddleHighlight.slidePrev();
})

$(".slider-middle-highlight .btn-right").on("click", function(){
    slideMiddleHighlight.slideNext();
})

$(window).on("resize", function(){
    slideMiddleHighlight.setPercentageLeft();
    slideMiddleHighlight.resetPosition();
})



slideMiddleHighlight.sliderWrapper.bind("touchstart", function( event ){
    slideMiddleHighlight.resetPosition()
    slideMiddleHighlight.touchStartPosition = event.originalEvent.changedTouches[0].clientX
})

slideMiddleHighlight.sliderWrapper.bind("touchend", function( event ){
    slideMiddleHighlight.touchEndPosition = event.originalEvent.changedTouches[0].clientX

    if ( slideMiddleHighlight.touchStartPosition > slideMiddleHighlight.touchEndPosition+5 ) {

        slideMiddleHighlight.slideNext();

    } else if ( slideMiddleHighlight.touchStartPosition+5 < slideMiddleHighlight.touchEndPosition ) {

        slideMiddleHighlight.slidePrev();

    }
})


//slide 에서 touchemove를 할 때 작동되는 애니메이션, 애니메이션 슬라이드 움직임 제한값 = +- 180px
slideMiddleHighlight.sliderWrapper.bind("touchmove", function( event ){
    if( slideMiddleHighlight.clicked < 1 ) {

        slideMiddleHighlight.differencePositionX = slideMiddleHighlight.touchStartPosition - event.originalEvent.changedTouches[0].clientX;

        if( Math.abs(slideMiddleHighlight.differencePositionX) > 180 ) {
    
            if( slideMiddleHighlight.differencePositionX > 0 ) {
                slideMiddleHighlight.differencePositionX = 180;
            } else if (slideMiddleHighlight.differencePositionX < 0){
                slideMiddleHighlight.differencePositionX = -180;
            }
            
        }
    
        if ( slideMiddleHighlight.differencePositionX < 0 ) {
            slideMiddleHighlight.sliderContent.css(
                "left", "calc(" + slideMiddleHighlight.percentagePositionLeft + " - " +
                slideMiddleHighlight.differencePositionX + "px)"
            )
        } else {
            slideMiddleHighlight.sliderContent.css(
                "left", "calc(" + slideMiddleHighlight.percentagePositionLeft + " - " +
                slideMiddleHighlight.differencePositionX + "px)"
            )
        }

    }

})