// 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
var infowindow = new kakao.maps.InfoWindow({zIndex:1});

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.45240609232767, 126.69969111326523), // 지도의 중심좌표
        level: 6 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places(); 

// 키워드로 장소를 검색합니다

//카페 매장검색
ps.keywordSearch('인천 스타벅스', placesSearchCB); 
ps.keywordSearch('인천 투썸플레이스', placesSearchCB); 
ps.keywordSearch('인천 이디야', placesSearchCB); 
ps.keywordSearch('인천 할리스', placesSearchCB); 

function insertHTML(list, place) {
    
    switch (place) {
        case "star": 
                // console.log("starList: " + JSON.stringify(list));
                var starPosition = [];
                for (var i=0; i < list.length; i++) {
                    starPosition.push(new kakao.maps.LatLng(list[i].y, list[i].x));
                }
                console.log(starPosition);

            break;
        case "twosome": 
                // console.log("twosomeList: " + JSON.stringify(list));
                var twosomePosition = [];
                
                for (var i=0; i < list.length; i++) {
                    twosomePosition.push(new kakao.maps.LatLng(list[i].y, list[i].x));
                }
                console.log(twosomePosition);
            break;
        case "ediya": 
                // console.log("ediyaList: " + JSON.stringify(list));
                var eidyaPosition = [];
                
                for (var i=0; i < list.length; i++) {
                    eidyaPosition.push(new kakao.maps.LatLng(list[i].y, list[i].x));
                }
                console.log(eidyaPosition);
            break;
        case "hollis": 
                // console.log("hollisList: " + JSON.stringify(list));
                var hollisPosition = [];
                
                for (var i=0; i < list.length; i++) {
                    hollisPosition.push(new kakao.maps.LatLng(list[i].y, list[i].x));
                }
                console.log(hollisPosition);
            break;

    }
}


// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {

        // // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // // LatLngBounds 객체에 좌표를 추가합니다
        // var bounds = new kakao.maps.LatLngBounds();
        // console.log(data);
        // for (var i=0; i<data.length; i++) {
        //     displayMarker(data[i]);    
        //     bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        // }    

            var placeNM = data[0].place_name;

            if (placeNM.indexOf('스타벅스') > -1) {
                insertHTML(data, "star");
            } else if (placeNM.indexOf('투썸') > -1) {
                insertHTML(data, "twosome");
            } else if (placeNM.indexOf('이디야') > -1) {
                insertHTML(data, "ediya");
            } else if (placeNM.indexOf('할리스') > -1) {
                insertHTML(data, "hollis");

            }

        // // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        // map.setBounds(bounds);

    } 
}

// // 지도에 마커를 표시하는 함수입니다
// function displayMarker(place) {
    
//     // 마커를 생성하고 지도에 표시합니다
//     var marker = new kakao.maps.Marker({
//         map: map,
//         position: new kakao.maps.LatLng(place.y, place.x) 
//     });

//     // 마커에 클릭이벤트를 등록합니다
//     kakao.maps.event.addListener(marker, 'click', function() {
//         // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
//         infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
//         infowindow.open(map, marker);
//     });
// }
