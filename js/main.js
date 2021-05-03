//메인 로고 작품 이미지

var mainImgUrl = "https://api.harvardartmuseums.org/image";
mainImgUrl += "?apikey=a35af484-c468-4ceb-8054-5aa044a7f8b6";
mainImgUrl += "&size=100";
console.log("url: " + mainImgUrl);

$.ajax({
    type: "GET",
    url: mainImgUrl,
    dataType: "json",
    async: false,
    success: function (data) {
        console.log(data);
        
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


// // var random = Math.floor(Math.random() * $('.item').length);
// // $('.item').hide().eq(random).show();

// // https://api.harvardartmuseums.org/object?color=beige