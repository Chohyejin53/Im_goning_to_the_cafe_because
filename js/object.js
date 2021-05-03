
// //색 불러오기
// var colorUrl = "https://api.harvardartmuseums.org/color";
// colorUrl += "?apikey=a35af484-c468-4ceb-8054-5aa044a7f8b6";
// colorUrl += "&size=100";
// console.log("url: " + colorUrl);
    
//     $.ajax({
//         type: "GET",
//         url: colorUrl,
//         dataType: "json",
//         async: false,
//         success: function (data) {
//             console.log(data);
//             var records = data.records;
//             var info = data.info;
//             var hexCode = [];
//             var colorData = [];

//             //sort해서 hex기준 오름차순으로 정렬맞춰주기
//             records.sort(function (a, b) { 
//                 return a.hex < b.hex ? -1 : a.hex > b.hex ? 1 : 0;  
//             });

//                 for(var i = 0; i < records.length; i++) {
//                     hexCode[i] = data.records[i].hex;
//                     colorData[i] = 1;  // chart.js에 색 비율 1:1로 지정하기 위해서
//                     // console.log(hexCode);
                    
//                 };
//                 console.log(hexCode);
//                 console.log(colorData);

//                 //chart.js에 색 변경하기
//                 var data = { 
//                     labels: hexCode, 
//                     datasets: [ { 
//                         data: colorData, 
//                         backgroundColor: hexCode, 
//                         // data: colorData, 
//                         // backgroundColor: arr, 
//                         borderWidth: 0, 
//                         // label: "Dataset 1" 
//                         }
//                     ] 
//                 };
                
//                 var config = {
//                     type: 'pie',
//                     data: data,
//                     options: {
//                         responsive: true,
//                         plugins: {
//                             legend: false,
//                             title: {
//                                 display: false,
//                                 text: 'Chart.js Pie Chart'
//                             },
//                             tooltip: {
//                                 enabled: false
//                             }
//                         },
//                         onClick: chartClickEvent
//                     },
//                 };
                
//                 var myChart = new Chart(
//                     document.getElementById('myChart'),
//                     config
//                 );

                //컬러 인코딩 후 컬러 코드 사용하기
                // for(var i = 0; i <hexCode.length; i++) {
                //     var encodeColor = encodeURIComponent(hexCode[i]);  //컬러코드 인코딩
                    var objectUrl = "https://api.harvardartmuseums.org/object";
                    objectUrl += "?color=any";
                    objectUrl += "&apikey=a35af484-c468-4ceb-8054-5aa044a7f8b6";
                    objectUrl += "&size=100";
                    // console.log("color: " + encodeColor);
                    console.log("url: " + objectUrl);

                    $.ajax({
                        type: "GET",
                        url: objectUrl,
                        dataType: "json",
                        async: false,
                        success: function (objData) {
                            console.log(objData);
                            var objRecords = objData.records;
                            var allObjColor = [];
                            var objColor = [];
                            var colorData = [];
                            for(var i = 0; i < objRecords.length; i++) {
                                for(var j = 0; j < objRecords[i].colors.length; j++) {
                                    allObjColor[i] = objRecords[i].colors[j].color;
                                    var objImg = objRecords[i].url;
                                    console.log(objImg);
                                };
                                
                            };
                            console.log(objColor);
                            


                            //중복되는 색 제거 (마지막에 오기)
                            objColor = allObjColor.filter(function(item, pos, self) {
                                return self.indexOf(item) == pos;
                            });
                            
                            for(var i= 0; i < objColor.length; i++) {
                                colorData[i] = 1;  // chart.js에 색 비율 1:1로 지정하기 위해서
                            }
                            
                            //sort해서 hex기준 오름차순으로 정렬맞춰주기 
                            objColor.sort(function (a, b) { 
                                return a.hex < b.hex ? -1 : a.hex > b.hex ? 1 : 0;  
                            });  

                            //chart.js에 색 변경하기
                            var data = { 
                            labels: objColor, 
                            datasets: [ { 
                                data: colorData, 
                                backgroundColor: objColor, 
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

                
                        },
                        error: function (request, status, error) {
                            console.log("code:" + request.status);
                            console.log("message:" + request.responseText);
                            console.log("error:" + error);
                        }
                    });

                // }
                


    //     },
    //     error: function (request, status, error) {
    //         console.log("code:" + request.status);
    //         console.log("message:" + request.responseText);
    //         console.log("error:" + error);
    //     }
    // });        
        
        


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



