
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
                for(var i = 0; i < records.length; i++) {
                    var hexCode = data.records[i].hex;

                    console.log(hexCode);
                };
                
                // if(info.hasOwnProperty('next')) {
                //     colorUrl += "&page=2"
                // };

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

    var data = { 
        // labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], 
        datasets: [ { 
            data: [1,1,1,1,1,1,1,1,1,1,1], 
            backgroundColor: [ "#f79546", "#9bba57", "#4f81bb", "#5f497a", "#a94069", "#ff5f34", "#41774e", "#003663", "#49acc5", "#c0504e" ], 
            // data: colorData, 
            // backgroundColor: arr, 
            borderWidth: 0, 
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
    
    /*
    이벤트 참고- https://stackoverflow.com/questions/46672925/chart-js-onclick-event-with-a-mixed-chart-which-chart-did-i-click
    */
    function chartClickEvent(event, array){
        console.log(array);
        console.log("color hex code: " + array[0].element.options.backgroundColor);
    }
    
    /* tooltip 제거(2번째 방법)*/
    // Chart.defaults.plugins.tooltip.enabled = false;
    


