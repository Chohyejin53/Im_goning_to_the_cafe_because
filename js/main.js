//스크롤바 내렸을떄, 메뉴바 고정
var headerHeight = $('#header_wrap').height();
$('#header_wrap').hide();
$(window).scroll ( function() {
	if ( $( this ).scrollTop() > 600 ) {
		$('#header_wrap').fadeIn();
        $('#header_wrap').css({
			'position':'fixed',
			'z-index' :'2'
		});
        $('content_wrap','footer_wrap').css('margin-top', headerHeight); 
	} else {
		if($(".mobile.close").is(":visible")) {
			$('#header_wrap').show();
		} 

	}

	// else { 
		// $('#header_wrap').fadeOut(); }
});

//메인비주얼 전체화면 
var visualHeight = $(window).height();
$('.visual_img').css('height',visualHeight);


// 윈도우  크기 바뀌면  자동으로 리사이즈 코드 넣기 