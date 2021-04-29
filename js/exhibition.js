//현재 전시 슬라이드

$(function(){
    $('.multiple_slider').bxSlider({
        minSlides:2,
        maxSlides:4,
        slideWidth:250,
        slideMargin:10,
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
            var tag = "";
            for(var i  =0; i < records.length; i++) {
                    // console.log(records[i].poster);
                    // console.log(records[i].title);
                    // console.log(records[i].begindate);
                    // console.log(records[i].enddate);

                    if (records[i].hasOwnProperty('poster')) {
                        var currentposter = records[i].poster.imageurl;
                    } else {
                        var currentposter = '"../images/preparing_img.svg"';
                    };
                    
                    var currentTitle = records[i].title;
                    var currentBegindate = records[i].begindate;
                    var currentEnddate = records[i].enddate;

                    tag += '<li class="exhibitionList">'
                    tag += '<img src=' + currentposter + '>';
                    tag += '<h2 class="title">' + currentTitle + '</h2>';
                    tag += '<p class="begindate">'+ currentBegindate +'</p>';
                    tag += '<p class="enddate">' + currentEnddate + '</p>';
                    tag += '</li>'

                    // console.log(tag);
                };
                
                $(".multiple_slider").append(tag);

        },
        error: function (request, status, error) {
            console.log("code:" + request.status);
            console.log("message:" + request.responseText);
            console.log("error:" + error);
        }
    });


    // 다가오는 전시 api 
    