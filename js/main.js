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

//소개 스크롤애니메이션
var imgHeight = $(window).height();
    $(".img img").css('height', imgHeight + 'px' );
    $(".msg").css('height', imgHeight + 'px');

            
    var txt_1 = $('.txt_1'); 
    var txt_2 = $('.txt_2'); 
    var txt_3 = $('.txt_3'); 
            


    var t1_Y = txt_1.offset().top;
    var t2_Y = txt_2.offset().top;
    var t3_Y = txt_3.offset().top;
        
    $(window).scroll ( function() {
        var scrollY = $(window).scrollTop(); 
        if( scrollY  <  t2_Y ) {
    		$(".img_1").addClass('animation');
        } else if ( scrollY  <  t3_Y) {
            $(".img_2").addClass('animation');
        // } else if ( scrollY < t3_Y) {
        //     $(".img_3").addClass('animation');
        }
        
	});