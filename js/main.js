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
$(function(){
    $('.bxSlider').bxSlider({
        options: fade,
        minSlides:1,
        maxSlides:1,
        slideWidth:400,
        slideMargin:10,
        captions:false,
        moveSlides:0,
        pager:false,
        controls:true,
        autoHover: true,  
        
    });
});