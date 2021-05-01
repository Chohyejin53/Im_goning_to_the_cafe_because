
//색 불러오기
var colorUrl = "https://api.harvardartmuseums.org/color";
colorUrl += "?apikey=a35af484-c468-4ceb-8054-5aa044a7f8b6";
colorUrl += "&size=100";
console.log("url: " + colorUrl);
    
    $.ajax({
        type: "GET",
        url: colorUrl,
        dataType: "json",
        async: false,
        success: function (data) {
            console.log(data);
            var records = data.records;
            var info = data.info;
            var hexCode = [];
            var colorData = [];

            //sort해서 hex기준 오름차순으로 정렬맞춰주기
            records.sort(function (a, b) { 
                return a.hex < b.hex ? -1 : a.hex > b.hex ? 1 : 0;  
            });

                for(var i = 0; i < records.length; i++) {
                    hexCode[i] = data.records[i].hex;
                    colorData[i] = 1;  // chart.js에 색 비율 1:1로 지정하기 위해서
                    // console.log(hexCode);
                    
                };
                console.log(hexCode);
                console.log(colorData);

                //chart.js에 색 변경하기
                var data = { 
                    labels: hexCode, 
                    datasets: [ { 
                        data: colorData, 
                        backgroundColor: hexCode, 
                        // data: colorData, 
                        // backgroundColor: arr, 
                        borderWidth: 1, 
                        // label: "Dataset 1" 
                        }
                    ] 
                };
                
                var config = {
                    type: 'pie',
                    data: data,
                    options: {
                        responsive: true,
                        plugins: {
                            legend: false,
                            title: {
                                display: false,
                                text: 'Chart.js Pie Chart'
                            },
                            tooltip: {
                                enabled: false
                            }
                        },
                        onClick: chartClickEvent
                    },
                };
                
                var myChart = new Chart(
                    document.getElementById('myChart'),
                    config
                );


        },
        error: function (request, status, error) {
            console.log("code:" + request.status);
            console.log("message:" + request.responseText);
            console.log("error:" + error);
        }
    });        
        
        
//컬러 인코딩 후 컬러 코드 사용하기
var encodeColor = encodeURIComponent("#c8af96");  //컬러코드 인코딩
var url = "https://api.harvardartmuseums.org/object";
url += "?color=" + encodeColor;
url += "&apikey=a35af484-c468-4ceb-8054-5aa044a7f8b6";
console.log("color: " + encodeColor);
console.log("url: " + url);

    //color 코드 넣기
    // var arr = [];
    // for(var i=0; i<obj.length; i++) {
    //     arr[i] = obj[i].color;
    // }

    // obj.length를 이용해서 갯수 세기
    // var colorData = [];
    // for(var i=0; i<obj.length; i++) {
    //     colorData[i] = 1;
    // }


    



    /*
    이벤트 참고- https://stackoverflow.com/questions/46672925/chart-js-onclick-event-with-a-mixed-chart-which-chart-did-i-click
    */
    function chartClickEvent(event, array){
        console.log(array);
        console.log("color hex code: " + array[0].element.options.backgroundColor);
    }



