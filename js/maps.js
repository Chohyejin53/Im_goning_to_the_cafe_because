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