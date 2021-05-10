//스크롤바 내렸을떄, 메뉴바 고정
var headerHeight = $('#header_wrap').height();
$(window).scroll( function() {
	if ( $( this ).scrollTop() > 600 ) {
		$('#header_wrap').fadeIn();
        $('#header_wrap').css('position','fixed');
        $('content_wrap','footer_wrap').css('margin-top', headerHeight); 
	} else {
		$('#header_wrap').fadeOut();
	}
});

//메인비주얼 전체화면 
var visualHeight = $(window).height();
$('.visual_img').css('height',visualHeight);
