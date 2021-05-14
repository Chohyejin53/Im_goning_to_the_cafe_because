//스크롤바 내렸을떄, 메뉴바 고정
var headerHeight = $('#header_wrap').height();
$(window).scroll ( function() {
        $('#header_wrap').css({
			'position':'fixed',
			'z-index' :'2'
		});
        $('#content_wrap','#footer_wrap').css('margin-top', headerHeight); 
});

//메인비주얼 전체화면 
var visualHeight = $(window).height();
$('.visual_img').css('height',visualHeight);


//resize 이벤트
$(window).resize(function() {
	var height = $(window).height();
	$('.visual_img').css('height',height);
});

// 윈도우  크기 바뀌면  자동으로 리사이즈 코드 넣기 

//슬라이드

$(document).ready(function(){
    $('.bxslider').bxSlider(
    );
});

$('.bxslider').bxSlider({
    mode: 'fade',
    auto: true,
    autoControls: false,
    stopAutoOnClick: true,
    pager: false,
    slideWidth: 500
});