// api키 : db59e351dc7a480f1b625120d3f9f2d9

var markerImageSrc = '../images/css_sprites.png';  // 마커이미지의 주소입니다. 스프라이트 이미지 입니다
    starMarkers = [], // 스타벅스 마커 객체를 가지고 있을 배열입니다
    twosomeMarkers = [], //투썸플레이스 마커 객체를 가지고 있을 배열입니다
    ediyaMarkers = []; // 이디야 마커 객체를 가지고 있을 배열입니다
    hollisMarkers = []; // 할리스 마커 객체를 가지고 있을 배열입니다

    
createStarMarkers(); // 스타벅스 마커를 생성하고 스타벅스 마커 배열에 추가합니다
createTwosomeMarkers(); //투썸플레이스 마커를 생성하고투썸플레이스 마커 배열에 추가합니다
creatEdiyaMarkers(); // 이디야 마커를 생성하고 이디야 마커 배열에 추가합니다
createHollisMarkers();

changeMarker('star'); // 지도에 스타벅스 마커가 보이도록 설정합니다    


// 마커이미지의 주소와, 크기, 옵션으로 마커 이미지를 생성하여 리턴하는 함수입니다
function createMarkerImage(src, size, options) {
    var markerImage = new kakao.maps.MarkerImage(src, size, options);
    return markerImage;            
}

// 좌표와 마커이미지를 받아 마커를 생성하여 리턴하는 함수입니다
function createMarker(position, image) {
    var marker = new kakao.maps.Marker({
        position: position,
        image: image
    });
    
    return marker;  
}   
// 스타벅스 마커를 생성하고 스타벅스 마커 배열에 추가하는 함수입니다
function createStarMarkers() {
    
    for (var i = 0; i < starPositions.length; i++) {  
        
        var imageSize = new kakao.maps.Size(22, 26),
            imageOptions = {  
                spriteOrigin: new kakao.maps.Point(10, 0),    
                spriteSize: new kakao.maps.Size(36, 98)  
            };     
        
        // 마커이미지와 마커를 생성합니다
        var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),    
            marker = createMarker(starPositions[i], markerImage);  
        
        // 생성된 마커를 스타벅스 마커 배열에 추가합니다
        starMarkers.push(marker);
    }     
}

// 스타벅스 마커들의 지도 표시 여부를 설정하는 함수입니다
function setStarMarkers(map) {        
    for (var i = 0; i < starMarkers.length; i++) {  
        starMarkers[i].setMap(map);
    }        
}

//투썸플레이스 마커를 생성하고투썸플레이스 마커 배열에 추가하는 함수입니다
function createTwosomeMarkers() {
    for (var i = 0; i < twosomePositions.length; i++) {
        
        var imageSize = new kakao.maps.Size(22, 26),
            imageOptions = {   
                spriteOrigin: new kakao.maps.Point(10, 36),    
                spriteSize: new kakao.maps.Size(36, 98)  
            };       
     
        // 마커이미지와 마커를 생성합니다
        var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),    
            marker = createMarker(twosomePositions[i], markerImage);  

        // 생성된 마커를투썸플레이스 마커 배열에 추가합니다
        twosomeMarkers.push(marker);    
    }        
}

//투썸플레이스 마커들의 지도 표시 여부를 설정하는 함수입니다
function setTwosomeMarkers(map) {        
    for (var i = 0; i < twosomeMarkers.length; i++) {  
        twosomeMarkers[i].setMap(map);
    }        
}

// 이디야 마커를 생성하고 이디야 마커 배열에 추가하는 함수입니다
function createEdiyaMarkers() {
    for (var i = 0; i < ediyaPositions.length; i++) {
        
        var imageSize = new kakao.maps.Size(22, 26),
            imageOptions = {   
                spriteOrigin: new kakao.maps.Point(10, 72),    
                spriteSize: new kakao.maps.Size(36, 98)  
            };       
     
        // 마커이미지와 마커를 생성합니다
        var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),    
            marker = createMarker(ediyaPositions[i], markerImage);  

        // 생성된 마커를 이디야 마커 배열에 추가합니다
        ediyaMarkers.push(marker);        
    }                
}

// 이디야 마커들의 지도 표시 여부를 설정하는 함수입니다
function setEdiyaMarkers(map) {        
    for (var i = 0; i < ediyaMarkers.length; i++) {  
        ediyaMarkers[i].setMap(map);
    }        
}

// 할리스 마커를 생성하고 할리스 마커 배열에 추가하는 함수입니다
function createHollisMarkers() {
    for (var i = 0; i < hollisPositions.length; i++) {
        
        var imageSize = new kakao.maps.Size(22, 26),
            imageOptions = {   
                spriteOrigin: new kakao.maps.Point(10, 72),    
                spriteSize: new kakao.maps.Size(36, 98)  
            };       
     
        // 마커이미지와 마커를 생성합니다
        var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),    
            marker = createMarker(hollisPositions[i], markerImage);  

        // 생성된 마커를 할리스 마커 배열에 추가합니다
        hollisMarkers.push(marker);        
    }                
}

// 할리스 마커들의 지도 표시 여부를 설정하는 함수입니다
function setHollisMarkers(map) {        
    for (var i = 0; i < hollisMarkers.length; i++) {  
        hollisMarkers[i].setMap(map);
    }        
}

// 카테고리를 클릭했을 때 type에 따라 카테고리의 스타일과 지도에 표시되는 마커를 변경합니다
function changeMarker(type){
    
    var starMenu = document.getElementById('starMenu');
    var towsomeMenu = document.getElementById('towsomeMenu');
    var ediyaMenu = document.getElementById('ediyaMenu');
    var hollisMenu = document.getElementById('hollisMenu');
    
    // 스타벅스 카테고리가 클릭됐을 때
    if (type === 'star') {
    
        // 스타벅스 카테고리를 선택된 스타일로 변경하고
        starMenu.className = 'menu_selected';
        
        //투썸플레이스과 주차장 카테고리는 선택되지 않은 스타일로 바꿉니다
        twosomeMenu.className = '';
        ediyaMenu.className = '';
        hollisMenu.className = '';
        
        // 스타벅스 마커들만 지도에 표시하도록 설정합니다
        setStarMarkers(map);
        setTwosomeMarkers(null);
        setEdiyaMarkers(null);
        setHollisMarkers(null);
        
    } else if (type === 'twosome') { //투썸플레이스 카테고리가 클릭됐을 때
    
        //투썸플레이스 카테고리를 선택된 스타일로 변경하고
        starMenu.className = '';
        twosomeMenu.className = 'menu_selected';
        ediyaMenu.className = '';
        hollisMenu.className = '';
        
        //투썸플레이스 마커들만 지도에 표시하도록 설정합니다
        setStarMarkers(null);
        setTwosomeMarkers(map);
        setEdiyaMarkers(null);
        setHollisMarkers(null);
        
    }  else if (type === 'ediya') { //이디야 카테고리가 클릭됐을 때
    
        //이디야 카테고리를 선택된 스타일로 변경하고
        starMenu.className = '';
        twosomeMenu.className = '';
        ediyaMenu.className = 'menu_selected';
        hollisMenu.className = '';
        
        //이디야 마커들만 지도에 표시하도록 설정합니다
        setStarMarkers(null);
        setTwosomeMarkers(null);
        setEdiyaMarkers(map);
        setHollisMarkers(null);
        
    }
    else if (type === 'hollis') { //할리스 카테고리가 클릭됐을 때
    
        //할리스 카테고리를 선택된 스타일로 변경하고
        starMenu.className = '';
        twosomeMenu.className = '';
        ediyaMenu.className = '';
        hollisMenu.className = 'menu_selected';
        
        //할리스 마커들만 지도에 표시하도록 설정합니다
        setStarMarkers(null);
        setTwosomeMarkers(null);
        setEdiyaMarkers(null);
        setHollisMarkers(map);
        
    }
} 





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



var starPosition = [];
var twosomePosition = [];
var eidyaPosition = [];
var hollisPosition = [];

function insertHTML(list, place) {
    
    switch (place) {
        case "star": 
                // console.log("starList: " + JSON.stringify(list));
                for (var i=0; i < list.length; i++) {
                    starPosition[i] = new kakao.maps.LatLng(list[i].y, list[i].x);
                }
            break;
        case "twosome": 
                // console.log("twosomeList: " + JSON.stringify(list));
                for (var i=0; i < list.length; i++) {
                    twosomePosition[i] = new kakao.maps.LatLng(list[i].y, list[i].x);
                }
            break;
        case "ediya": 
                // console.log("ediyaList: " + JSON.stringify(list));
                for (var i=0; i < list.length; i++) {
                    eidyaPosition[i] = new kakao.maps.LatLng(list[i].y, list[i].x);
                }
            break;
        case "hollis": 
                // console.log("hollisList: " + JSON.stringify(list));
                for (var i=0; i < list.length; i++) {
                    hollisPosition[i] = new kakao.maps.LatLng(list[i].y, list[i].x);
                }
            break;
    }
}


////////////
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
                createCoffeeMarkers(starPosition);
            break;
        case "twosome": 
                // console.log("twosomeList: " + JSON.stringify(list));
                var twosomePosition = [];
                
                for (var i=0; i < list.length; i++) {
                    twosomePosition.push(new kakao.maps.LatLng(list[i].y, list[i].x));
                }
                console.log(twosomePosition);
                createCoffeeMarkers(twosomePosition);

            break;
        case "ediya": 
                // console.log("ediyaList: " + JSON.stringify(list));
                var eidyaPosition = [];
                
                for (var i=0; i < list.length; i++) {
                    eidyaPosition.push(new kakao.maps.LatLng(list[i].y, list[i].x));
                }
                console.log(eidyaPosition);
                createCoffeeMarkers(eidyaPosition);

            break;
        case "hollis": 
                // console.log("hollisList: " + JSON.stringify(list));
                var hollisPosition = [];
                
                for (var i=0; i < list.length; i++) {
                    hollisPosition.push(new kakao.maps.LatLng(list[i].y, list[i].x));
                }
                console.log(hollisPosition);
                createCoffeeMarkers(hollisPosition);
    
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

            changeMarker('coffee'); 

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





// var markerImageSrc = '../images/css_sprites.png';  // 마커이미지의 주소입니다. 스프라이트 이미지 입니다
//     starMarkers = [], // 스타벅스 마커 객체를 가지고 있을 배열입니다
//     twosomeMarkers = [], //투썸플레이스 마커 객체를 가지고 있을 배열입니다
//     ediyaMarkers = []; // 이디야 마커 객체를 가지고 있을 배열입니다
//     hollisMarkers = []; // 할리스 마커 객체를 가지고 있을 배열입니다    

var markerImageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png';  // 마커이미지의 주소입니다. 스프라이트 이미지 입니다
    coffeeMarkers = [], // 커피숍 마커 객체를 가지고 있을 배열입니다
    storeMarkers = [], // 편의점 마커 객체를 가지고 있을 배열입니다
    carparkMarkers = []; // 주차장 마커 객체를 가지고 있을 배열입니다

    
// createCoffeeMarkers(); // 커피숍 마커를 생성하고 커피숍 마커 배열에 추가합니다
// createStoreMarkers(); // 편의점 마커를 생성하고 편의점 마커 배열에 추가합니다
// createCarparkMarkers(); // 주차장 마커를 생성하고 주차장 마커 배열에 추가합니다

// 지도에 커피숍 마커가 보이도록 설정합니다    


// 마커이미지의 주소와, 크기, 옵션으로 마커 이미지를 생성하여 리턴하는 함수입니다
function createMarkerImage(src, size, options) {
    var markerImage = new kakao.maps.MarkerImage(src, size, options);
    return markerImage;            
}

// 좌표와 마커이미지를 받아 마커를 생성하여 리턴하는 함수입니다
function createMarker(position, image) {
    var marker = new kakao.maps.Marker({
        position: position,
        image: image
    });
    
    return marker;  
}   
   
// 커피숍 마커를 생성하고 커피숍 마커 배열에 추가하는 함수입니다
function createCoffeeMarkers(coffeePositions) {
    
    for (var i = 0; i < coffeePositions.length; i++) {  
        
        var imageSize = new kakao.maps.Size(22, 26),
            imageOptions = {  
                spriteOrigin: new kakao.maps.Point(10, 0),    
                spriteSize: new kakao.maps.Size(36, 98)  
            };     
        
        // 마커이미지와 마커를 생성합니다
        var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),    
            marker = createMarker(coffeePositions[i], markerImage);  
        
        // 생성된 마커를 커피숍 마커 배열에 추가합니다
        coffeeMarkers.push(marker);
    }     
}

// 커피숍 마커들의 지도 표시 여부를 설정하는 함수입니다
function setCoffeeMarkers(map) {        
    for (var i = 0; i < coffeeMarkers.length; i++) {  
        coffeeMarkers[i].setMap(map);
    }        
}

// 편의점 마커를 생성하고 편의점 마커 배열에 추가하는 함수입니다
function createStoreMarkers() {
    for (var i = 0; i < storePositions.length; i++) {
        
        var imageSize = new kakao.maps.Size(22, 26),
            imageOptions = {   
                spriteOrigin: new kakao.maps.Point(10, 36),    
                spriteSize: new kakao.maps.Size(36, 98)  
            };       
     
        // 마커이미지와 마커를 생성합니다
        var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),    
            marker = createMarker(storePositions[i], markerImage);  

        // 생성된 마커를 편의점 마커 배열에 추가합니다
        storeMarkers.push(marker);    
    }        
}

// 편의점 마커들의 지도 표시 여부를 설정하는 함수입니다
function setStoreMarkers(map) {        
    for (var i = 0; i < storeMarkers.length; i++) {  
        storeMarkers[i].setMap(map);
    }        
}

// 주차장 마커를 생성하고 주차장 마커 배열에 추가하는 함수입니다
function createCarparkMarkers() {
    for (var i = 0; i < carparkPositions.length; i++) {
        
        var imageSize = new kakao.maps.Size(22, 26),
            imageOptions = {   
                spriteOrigin: new kakao.maps.Point(10, 72),    
                spriteSize: new kakao.maps.Size(36, 98)  
            };       
     
        // 마커이미지와 마커를 생성합니다
        var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),    
            marker = createMarker(carparkPositions[i], markerImage);  

        // 생성된 마커를 주차장 마커 배열에 추가합니다
        carparkMarkers.push(marker);        
    }                
}

// 주차장 마커들의 지도 표시 여부를 설정하는 함수입니다
function setCarparkMarkers(map) {        
    for (var i = 0; i < carparkMarkers.length; i++) {  
        carparkMarkers[i].setMap(map);
    }        
}

// 카테고리를 클릭했을 때 type에 따라 카테고리의 스타일과 지도에 표시되는 마커를 변경합니다
function changeMarker(type){
    
    var coffeeMenu = document.getElementById('coffeeMenu');
    var storeMenu = document.getElementById('storeMenu');
    var carparkMenu = document.getElementById('carparkMenu');
    
    // 커피숍 카테고리가 클릭됐을 때
    if (type === 'coffee') {
    
        // 커피숍 카테고리를 선택된 스타일로 변경하고
        coffeeMenu.className = 'menu_selected';
        
        // 편의점과 주차장 카테고리는 선택되지 않은 스타일로 바꿉니다
        storeMenu.className = '';
        carparkMenu.className = '';
        
        // 커피숍 마커들만 지도에 표시하도록 설정합니다
        setCoffeeMarkers(map);
        setStoreMarkers(null);
        setCarparkMarkers(null);
        
    } else if (type === 'store') { // 편의점 카테고리가 클릭됐을 때
    
        // 편의점 카테고리를 선택된 스타일로 변경하고
        coffeeMenu.className = '';
        storeMenu.className = 'menu_selected';
        carparkMenu.className = '';
        
        // 편의점 마커들만 지도에 표시하도록 설정합니다
        setCoffeeMarkers(null);
        setStoreMarkers(map);
        setCarparkMarkers(null);
        
    } else if (type === 'carpark') { // 주차장 카테고리가 클릭됐을 때
     
        // 주차장 카테고리를 선택된 스타일로 변경하고
        coffeeMenu.className = '';
        storeMenu.className = '';
        carparkMenu.className = 'menu_selected';
        
        // 주차장 마커들만 지도에 표시하도록 설정합니다
        setCoffeeMarkers(null);
        setStoreMarkers(null);
        setCarparkMarkers(map);  
    }    
} 
