//현재 전시 슬라이드

$(function(){
    $('.multiple_slider').bxSlider({
        minSlides:2,
        maxSlides:5,
        slideWidth:200,
        slideMargin:5,
        captions:false,
        moveSlides:1,
        pager:false,
        controls:true,
        
    });
});


// 현재 전시 api 
    var url = "https://api.harvardartmuseums.org/exhibition";
    var currentStatus = "current";
    url += "?status=" + currentStatus;
    url += "&apikey=a35af484-c468-4ceb-8054-5aa044a7f8b6";
    console.log("url: " + url);
    
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        async: false,
        success: function (data) {
            console.log(data);
            var records = data.records;

            $('.slider_wrap li').find('h2').each(function(i, e){
                for(var i=0; i<records.length; i++) {
                    console.log(records[i].title);
                    var title = records[i].title;
                    var shift = title.shift;

                    $('.slider_wrap li').find('h2').append(shift);
                };  
            });
            
            
            
            for(var i=0; i<records.length; i++) {
                console.log(records[i].title);
                for(var j=0; j < records.length; j++) {
                    $('.slider_wrap li').find('h2').eq(j).append(records[i].title);
                    console.log($('.slider_wrap li').find('h2'));
                    // $(".slider_wrap li h2").eq(j).append(records[i].title);
                };
                $(currentExTitle).append(records[i].title);
            };    
        },
        error: function (request, status, error) {
            console.log("code:" + request.status);
            console.log("message:" + request.responseText);
            console.log("error:" + error);
        }
    });

    // $.ajax({
    //     type: "GET",
    //     url: "https://api.harvardartmuseums.org/object?color/34838386&century/37525806&apikey=a35af484-c468-4ceb-8054-5aa044a7f8b6",
    //     dataType: "json",
    //     async: false,
    //     success: function (data) {
    //         console.log(data.records[0].images);
    //         $(".img_obj").append("<img src ='" + data.records[0].images+ "' />");
    //     },
    //     error: function (request, status, error) {
    //         console.log("code:" + request.status);
    //         console.log("message:" + request.responseText);
    //         console.log("error:" + error);
    //     }
    // });


//     /* 객체 선언 */
// function Forecast() {  
//     this.url = "http://api.openweathermap.org/data/2.5/weather";
//     this.url += "?units=" + "metric";
//     this.url += "&lang=" + "kr";
//     this.url += "&APPID=" + "f98e648c60dee9415bd3b65e176b86ca";  // 본인의 api key 사용
//     this.url += "&q=";
// }

// /* 현재 날씨의 모든 정보 얻어오기 */

// Forecast.prototype.getCurrentWeather = function(city){
//     var dataObj;
//     var openWeatherAPI = this.url; // q가 계속 붙으므로 url 초기화를 위해 반드시 넣어준다

//     $.ajax({
//         type: "GET",
//         url: openWeatherAPI += city,
//         dataType: "json",
//         async: false,  // 동기형식으로 지정(data값을 return해주기 위해)
//         success:function(data) {
//             dataObj = data;
//         },
//         error:function(request,status,error) {
//             console.log("code:" + request.status);
//             console.log("message:" + request.responseText);
//             console.log("error:" + error);
//         }
//     });

//     return dataObj;
// };