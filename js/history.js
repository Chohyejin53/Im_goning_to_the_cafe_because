// 배경
$("document").ready(function(){                
    var options = {
        videoId : 'NfLTCEfxEFE',
        start: 6,
    };
    $("#wrapper").tubular(options);
});


// // 슬라이드

// $(document).ready(function(){
//     var boxs;
//     var box_count;
//     var box_position = 1;

//     boxs = $(".slide .slide_box");
//     box_count = boxs.children().length;

//     //버튼을 클릭했을 때 함수 실행 

//     $('#back').click(function(){
//         next();
//     });
//     $('#next').click(function(){
//         back();
//     });

//     function back() {
//         if(1 <  box_position) {
//             boxs.animate ({
//                 left:'+=1024px'
//             });
//             box_position--;
//         }
//     }
//     function next() {
//         if(box_count > box_position) {
//             boxs.animate ({
//                 left:'-=1024px'
//             });
//             box_position++;
//         }
//     }
// });
