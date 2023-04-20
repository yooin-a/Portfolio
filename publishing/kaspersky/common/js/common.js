
/* title */
$(document).ready(function(){
	$(window).scroll(function(){
			if($(window).scrollTop() > 1) {
				$('header').addClass('active');
			} else {
				$('header').removeClass('active');
			}
	});
});



//전체메뉴보기
$('.gnb .overlay').hide();
$('.gnb .menu').hide();
$('.btnToggle').click(function(){
	$('.gnb .overlay').slideToggle(0);
	$('.gnb .menu').slideToggle(0);
});

//레이어팝업
$('.layerPopup').hide();
$('.btnPopup').click(function(){
	$('.layerPopup').slideToggle(0);
});

//계좌이체 - 충전 금액 버튼
$('.btnMoney button').click(function(){
	$(this).toggleClass('active');
});


//공지사항
$('.listBox .con').hide();
$('.listBox .title ').click(function(){
	$(this).toggleClass('active');
	$(this).siblings('.listBox .con').slideToggle();
});

