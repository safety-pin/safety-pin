angular.module('safetyPinApp', [])


.controller('safetyPinCtrl', function($scope, $http) {

  $scope.tab = 1;

  $scope.isSet = function(checkTab) {
    return $scope.tab === checkTab;
  };

  $scope.setTab = function(setTab) {
    $scope.tab = setTab;
  };



  $http.get("http://localhost:8081/open-data/api/statistics/all").success(function(response) {
      $scope.newData = response;

      $scope.chartYear = AmCharts.makeChart("chartYear", {
        "type": "serial",
        "theme": "amCustomTheme",
        "dataProvider": [ {
          "year": $scope.newData.yearStatistics[0].year,
          "accidents": $scope.newData.yearStatistics[0].numberOfAccidents,
        }, {
          "year": $scope.newData.yearStatistics[1].year,
          "accidents": $scope.newData.yearStatistics[1].numberOfAccidents,
        }, {
          "year": $scope.newData.yearStatistics[2].year,
          "accidents": $scope.newData.yearStatistics[2].numberOfAccidents,
        }],
        "valueAxes": [ {
          "gridColor": "#FFFFFF",
          "gridAlpha": 0.2,
          "dashLength": 0
        } ],
        "gridAboveGraphs": true,
        "startDuration": 1,
        "graphs": [ {
          "balloonText": "[[year]]: <b>[[accidents]]</b>",
          "fillAlphas": 0.8,
          "lineAlpha": 0.2,
          "type": "column",
          "valueField": "accidents"
        } ],
        "chartCursor": {
          "categoryBalloonEnabled": false,
          "cursorAlpha": 0,
          "zoomable": false
        },
        "categoryField": "year",
        "categoryAxis": {
          "gridPosition": "start",
          "gridAlpha": 0,
          "tickPosition": "start",
          "tickLength": 20
        },
        "export": {
          "enabled": true
        }
      });

      $scope.chartMonth = AmCharts.makeChart( "chartMonth", {
          "type": "serial",
          "theme": "amCustomTheme",
          "dataProvider": [ {
            "month": "Jan",
            "accidents": $scope.newData.monthStatistics[0].numberOfAccidents
          }, {
            "month": "Feb",
            "accidents": $scope.newData.monthStatistics[1].numberOfAccidents
          }, {
            "month": "Mart",
            "accidents": $scope.newData.monthStatistics[2].numberOfAccidents
          }, {
            "month": "April",
            "accidents": $scope.newData.monthStatistics[3].numberOfAccidents
          }, {
            "month": "Maj",
            "accidents": $scope.newData.monthStatistics[4].numberOfAccidents
          }, {
            "month": "Jun",
            "accidents": $scope.newData.monthStatistics[5].numberOfAccidents
          }, {
            "month": "Jul",
            "accidents": $scope.newData.monthStatistics[6].numberOfAccidents
          }, {
            "month": "Avg",
            "accidents": $scope.newData.monthStatistics[7].numberOfAccidents
          }, {
            "month": "Sep",
            "accidents": $scope.newData.monthStatistics[8].numberOfAccidents
          }, {
            "month": "Okt",
            "accidents": $scope.newData.monthStatistics[9].numberOfAccidents
          }, {
            "month": "Nov",
            "accidents": $scope.newData.monthStatistics[10].numberOfAccidents
          }, {
            "month": "Dec",
            "accidents": $scope.newData.monthStatistics[11].numberOfAccidents
          }],
          "valueAxes": [ {
            "gridColor": "#FFFFFF",
            "gridAlpha": 0.2,
            "dashLength": 0
          } ],
          "gridAboveGraphs": true,
          "startDuration": 1,
          "graphs": [ {
            "balloonText": "[[month]]: <b>[[accidents]]</b>",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "type": "column",
            "valueField": "accidents"
          } ],
          "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
          },
          "categoryField": "month",
          "categoryAxis": {
            "gridPosition": "start",
            "gridAlpha": 0,
            "tickPosition": "start",
            "tickLength": 20
          },
          "export": {
            "enabled": true
          }
      });

      $scope.chartMonth = AmCharts.makeChart( "chartQuartal", {
          "type": "serial",
          "theme": "amCustomTheme",
          "dataProvider": [ {
            "quartal": "I kvartal",
            "accidents": $scope.newData.quarterStatistics[0].numberOfAccidents
          }, {
            "quartal": "II kvartal",
            "accidents": $scope.newData.quarterStatistics[1].numberOfAccidents
          }, {
            "quartal": "III kvartal",
            "accidents": $scope.newData.quarterStatistics[2].numberOfAccidents
          }, {
            "quartal": "IV kvartal",
            "accidents": $scope.newData.quarterStatistics[3].numberOfAccidents
          }],
          "valueAxes": [ {
            "gridColor": "#FFFFFF",
            "gridAlpha": 0.2,
            "dashLength": 0
          } ],
          "gridAboveGraphs": true,
          "startDuration": 1,
          "graphs": [ {
            "balloonText": "[[quartal]]: <b>[[accidents]]</b>",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "type": "column",
            "valueField": "accidents"
          } ],
          "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
          },
          "categoryField": "quartal",
          "categoryAxis": {
            "gridPosition": "start",
            "gridAlpha": 0,
            "tickPosition": "start",
            "tickLength": 20
          },
          "export": {
            "enabled": true
          }
      });

      $scope.chartMonth = AmCharts.makeChart( "chartDay", {
          "type": "serial",
          "theme": "amCustomTheme",
          "dataProvider": [{
            "day": "Ponedeljak",
            "accidents": $scope.newData.dayStatistics[0].numberOfAccidents
          }, {
            "day": "Utorak",
            "accidents": $scope.newData.dayStatistics[1].numberOfAccidents
          }, {
            "day": "Sreda",
            "accidents": $scope.newData.dayStatistics[2].numberOfAccidents
          }, {
            "day": "Cetvrtak",
            "accidents": $scope.newData.dayStatistics[3].numberOfAccidents
          }, {
            "day": "Petak",
            "accidents": $scope.newData.dayStatistics[4].numberOfAccidents
          }, {
            "day": "Subota",
            "accidents": $scope.newData.dayStatistics[5].numberOfAccidents
          }, {
            "day": "Nedelja",
            "accidents": $scope.newData.dayStatistics[6].numberOfAccidents
          }],
          "valueAxes": [ {
            "gridColor": "#FFFFFF",
            "gridAlpha": 0.2,
            "dashLength": 0
          } ],
          "gridAboveGraphs": true,
          "startDuration": 1,
          "graphs": [ {
            "balloonText": "[[day]]: <b>[[accidents]]</b>",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "type": "column",
            "valueField": "accidents"
          } ],
          "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
          },
          "categoryField": "day",
          "categoryAxis": {
            "gridPosition": "start",
            "gridAlpha": 0,
            "tickPosition": "start",
            "tickLength": 20
          },
          "export": {
            "enabled": true
          }
      });

      $scope.chart = AmCharts.makeChart("chartHour", {
          "type": "serial",
          "theme": "light",
          "marginRight": 80,
          "colors": ["#AC2023"],
          "autoMarginOffset": 20,
          "valueAxes": [{
              "id": "v1",
              "axisAlpha": 0,
              "position": "left"
          }],
          "balloon": {
              "borderThickness": 1,
              "shadowAlpha": 0
          },
          "graphs": [{
              "id": "g1",
              "bullet": "round",
              "bulletBorderAlpha": 1,
              "bulletColor": "#FFFFFF",
              "bulletSize": 5,
              "hideBulletsCount": 50,
              "lineThickness": 2,
              "title": "red line",
              "useLineColorForBulletBorder": true,
              "valueField": "value",
              "balloonText": "<div style='margin:5px; font-size:19px;'><span style='font-size:13px;'>[[category]]</span><br>[[value]]</div>"
          }],
          "chartCursor": {
              "pan": true,
              "valueLineEnabled": true,
              "valueLineBalloonEnabled": true,
              "cursorAlpha":0,
              "valueLineAlpha":0.2
          },
          "categoryField": "hour",
          "categoryAxis": {
              "dashLength": 1,
              "minorGridEnabled": true
          },
          "export": {
              "enabled": true
          },
          "dataProvider": [{
              "hour": "00:00",
              "value": $scope.newData.hourStatistics[0].numberOfAccidents
          }, {
              "hour": "01:00",
              "value": $scope.newData.hourStatistics[1].numberOfAccidents
          }, {
              "hour": "02:00",
              "value": $scope.newData.hourStatistics[2].numberOfAccidents
          }, {
              "hour": "03:00",
              "value": $scope.newData.hourStatistics[3].numberOfAccidents
          }, {
              "hour": "04:00",
              "value": $scope.newData.hourStatistics[4].numberOfAccidents
          }, {
              "hour": "05:00",
              "value": $scope.newData.hourStatistics[5].numberOfAccidents
          }, {
              "hour": "06:00",
              "value": $scope.newData.hourStatistics[6].numberOfAccidents
          }, {
              "hour": "07:00",
              "value": $scope.newData.hourStatistics[7].numberOfAccidents
          }, {
              "hour": "08:00",
              "value": $scope.newData.hourStatistics[8].numberOfAccidents
          }, {
              "hour": "09:00",
              "value": $scope.newData.hourStatistics[9].numberOfAccidents
          }, {
              "hour": "10:00",
              "value": $scope.newData.hourStatistics[10].numberOfAccidents
          }, {
              "hour": "11:00",
              "value": $scope.newData.hourStatistics[11].numberOfAccidents
          }, {
              "hour": "12:00",
              "value": $scope.newData.hourStatistics[12].numberOfAccidents
          }, {
              "hour": "13:00",
              "value": $scope.newData.hourStatistics[13].numberOfAccidents
          }, {
              "hour": "14:00",
              "value": $scope.newData.hourStatistics[14].numberOfAccidents
          }, {
              "hour": "15:00",
              "value": $scope.newData.hourStatistics[15].numberOfAccidents
          }, {
              "hour": "16:00",
              "value": $scope.newData.hourStatistics[16].numberOfAccidents
          }, {
              "hour": "17:00",
              "value": $scope.newData.hourStatistics[17].numberOfAccidents
          }, {
              "hour": "18:00",
              "value": $scope.newData.hourStatistics[18].numberOfAccidents
          }, {
              "hour": "19:00",
              "value": $scope.newData.hourStatistics[19].numberOfAccidents
          }, {
              "hour": "20:00",
              "value": $scope.newData.hourStatistics[20].numberOfAccidents
          }, {
              "hour": "21:00",
              "value": $scope.newData.hourStatistics[21].numberOfAccidents
          }, {
              "hour": "22:00",
              "value": $scope.newData.hourStatistics[22].numberOfAccidents
          }, {
              "hour": "23:00",
              "value": $scope.newData.hourStatistics[23].numberOfAccidents
          }]
      });

      $scope.chartMonth = AmCharts.makeChart( "chartType", {
        "type": "pie",
        "theme": "none",
        "dataProvider": [ {
          "title": "Materijalna šteta",
          "value": $scope.newData.typeStatistics[0].numberOfAccidents
        }, {
          "title": "Povređeni",
          "value": $scope.newData.typeStatistics[1].numberOfAccidents
        }, {
          "title": "Poginuli",
          "value": $scope.newData.typeStatistics[2].numberOfAccidents
        }],
        "titleField": "title",
        "valueField": "value",
        "colors": ["#292D71", "#AC2023", "#353131"],
        "labelRadius": 5,

        "radius": "42%",
        "innerRadius": "60%",
        "labelText": "[[title]]",
        "export": {
          "enabled": true
        }
      });

      $scope.chartMonth = AmCharts.makeChart( "chartWeather", {
        "type": "pie",
        "theme": "none",
        "fieldColor": "blue",
        "dataProvider": [ {
          "title": "Kiša",
          "value": $scope.newData.weatherStatistics[0].numberOfAccidents
        }, {
          "title": "Sneg",
          "value": $scope.newData.weatherStatistics[1].numberOfAccidents
        }, {
          "title": "Bez padavina",
          "value": $scope.newData.weatherStatistics[2].numberOfAccidents
        }],
        "titleField": "title",
        "valueField": "value",
        "labelRadius": 5,
        "colors": ["#778bab", "#ccc8c8", "#fffab1"],
        "radius": "42%",
        "innerRadius": "60%",
        "labelText": "[[title]]",
        "export": {
          "enabled": true
        }
      });

      $scope.chartMonth = AmCharts.makeChart( "chartSummaryType", {
          "type": "serial",
          "theme": "amCustomTheme",
          "dataProvider": [{
            "day": "Vedro",
            "accidents": $scope.newData.summaryTypeStatistics[0].numberOfAccidents
          }, {
            "day": "Mestimično oblačno",
            "accidents": $scope.newData.summaryTypeStatistics[1].numberOfAccidents
          }, {
            "day": "Pretežno oblačno",
            "accidents": $scope.newData.summaryTypeStatistics[2].numberOfAccidents
          }, {
            "day": "Oblačno",
            "accidents": $scope.newData.summaryTypeStatistics[3].numberOfAccidents
          }, {
            "day": "Maglovito",
            "accidents": $scope.newData.summaryTypeStatistics[4].numberOfAccidents
          }, {
            "day": "Vetrovito",
            "accidents": $scope.newData.summaryTypeStatistics[5].numberOfAccidents
          }, {
            "day": "Nepoznato",
            "accidents": $scope.newData.summaryTypeStatistics[6].numberOfAccidents
          }],
          "valueAxes": [ {
            "gridColor": "#FFFFFF",
            "gridAlpha": 0.2,
            "dashLength": 0
          } ],
          "gridAboveGraphs": true,
          "startDuration": 1,
          "graphs": [ {
            "balloonText": "[[day]]: <b>[[accidents]]</b>",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "type": "column",
            "valueField": "accidents"
          } ],
          "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
          },
          "categoryField": "day",
          "categoryAxis": {
            "gridPosition": "start",
            "gridAlpha": 0,
            "tickPosition": "start",
            "tickLength": 20
          },
          "export": {
            "enabled": true
          }
      });
  });

  $http.get("http://localhost:8081/open-data/api/statistics/temperature?tempStep=10&min=-20&max=40").success(function(response) {
      $scope.newData = response;

      $scope.chartMonth = AmCharts.makeChart( "chartTemperature", {
          "type": "serial",
          "theme": "amCustomTheme",
          "dataProvider": [{
            "day": "-20 do -10",
            "accidents": $scope.newData[0].count
          }, {
            "day": "-10 do 0",
            "accidents": $scope.newData[1].count
          }, {
            "day": "0 do 10",
            "accidents": $scope.newData[2].count
          }, {
            "day": "10 do 20",
            "accidents": $scope.newData[3].count
          }, {
            "day": "20 do 30",
            "accidents": $scope.newData[4].count
          }, {
            "day": "30 do 40",
            "accidents": $scope.newData[5].count
          }],
          "valueAxes": [ {
            "gridColor": "#FFFFFF",
            "gridAlpha": 0.2,
            "dashLength": 0
          } ],
          "gridAboveGraphs": true,
          "startDuration": 1,
          "graphs": [ {
            "balloonText": "[[day]]: <b>[[accidents]]</b>",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "type": "column",
            "valueField": "accidents"
          } ],
          "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
          },
          "categoryField": "day",
          "categoryAxis": {
            "gridPosition": "start",
            "gridAlpha": 0,
            "tickPosition": "start",
            "tickLength": 20
          },
          "export": {
            "enabled": true
          }
      });

  });

});
