angular.module('safetyPinApp', [])

// .config(['$routeProvider', function($routeProvider) {
//     $routeProvider.
//     when('/mapa', {
//         templateUrl: 'pages/mapa.html',
//         controller: 'safetyPinCtrl'
//     }).
//     when('/putanja', {
//         templateUrl: 'pages/putanja.html',
//         controller: 'safetyPinCtrl'
//     }).
//     when('/dodaj-nezgodu', {
//         templateUrl: 'pages/dodaj-nezgodu.html',
//         controller: 'safetyPinCtrl'
//     }).
//     when('/statistika', {
//         templateUrl: 'pages/statistika.html',
//         controller: 'safetyPinCtrl'
//     }).
//     when('/savetnik', {
//         templateUrl: 'pages/savetnik.html',
//         controller: 'safetyPinCtrl'
//     }).
//     otherwise({
//         redirectTo: '/mapa'
//     });
// }])

.controller('safetyPinCtrl', function($scope, $http) {

  // $scope.isActivePage = function(route) {
  //     return route === $location.path();
  // };

  $scope.tab = 1;

  $scope.isSet = function(checkTab) {
    return $scope.tab === checkTab;
  };

  $scope.setTab = function(setTab) {
    $scope.tab = setTab;
  };

  $http.get("http://10.120.192.2:8081/open-data/api/statistics/all").success(function(response) {
      $scope.newData = response;

      $scope.year2013 = $scope.newData.yearStatistics[0].year;
      $scope.year2014 = $scope.newData.yearStatistics[1].year;
      $scope.year2015 = $scope.newData.yearStatistics[2].year;
      $scope.numberOfAccidentsPerYear2013 = $scope.newData.yearStatistics[0].numberOfAccidents;
      $scope.numberOfAccidentsPerYear2014 = $scope.newData.yearStatistics[1].numberOfAccidents;
      $scope.numberOfAccidentsPerYear2015 = $scope.newData.yearStatistics[2].numberOfAccidents;
      console.log($scope.year2015);

      $scope.chartYear = AmCharts.makeChart("chartYear", {
        "type": "serial",
        "theme": "light",
        "dataProvider": [ {
          "year": $scope.year2013,
          "accidents": $scope.numberOfAccidentsPerYear2013
        }, {
          "year": $scope.year2014,
          "accidents": $scope.numberOfAccidentsPerYear2014
        }, {
          "year": $scope.year2015,
          "accidents": $scope.numberOfAccidentsPerYear2015
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

      $scope.numberOfAccidentsPerMonth1 = $scope.newData.monthStatistics[0].numberOfAccidents;
      $scope.numberOfAccidentsPerMonth2 = $scope.newData.monthStatistics[1].numberOfAccidents;
      $scope.numberOfAccidentsPerMonth3 = $scope.newData.monthStatistics[2].numberOfAccidents;
      $scope.numberOfAccidentsPerMonth4 = $scope.newData.monthStatistics[3].numberOfAccidents;
      $scope.numberOfAccidentsPerMonth5 = $scope.newData.monthStatistics[4].numberOfAccidents;
      $scope.numberOfAccidentsPerMonth6 = $scope.newData.monthStatistics[5].numberOfAccidents;
      $scope.numberOfAccidentsPerMonth7 = $scope.newData.monthStatistics[6].numberOfAccidents;
      $scope.numberOfAccidentsPerMonth8 = $scope.newData.monthStatistics[7].numberOfAccidents;
      $scope.numberOfAccidentsPerMonth9 = $scope.newData.monthStatistics[8].numberOfAccidents;
      $scope.numberOfAccidentsPerMonth10 = $scope.newData.monthStatistics[9].numberOfAccidents;
      $scope.numberOfAccidentsPerMonth11 = $scope.newData.monthStatistics[10].numberOfAccidents;
      $scope.numberOfAccidentsPerMonth12 = $scope.newData.monthStatistics[11].numberOfAccidents;

      $scope.chartMonth = AmCharts.makeChart( "chartMonth", {
          "type": "serial",
          "theme": "light",
          "dataProvider": [ {
            "month": "Jan",
            "accidents": $scope.numberOfAccidentsPerMonth1
          }, {
            "month": "Feb",
            "accidents": $scope.numberOfAccidentsPerMonth2
          }, {
            "month": "Mart",
            "accidents": $scope.numberOfAccidentsPerMonth3
          }, {
            "month": "April",
            "accidents": $scope.numberOfAccidentsPerMonth4
          }, {
            "month": "Maj",
            "accidents": $scope.numberOfAccidentsPerMonth5
          }, {
            "month": "Jun",
            "accidents": $scope.numberOfAccidentsPerMonth6
          }, {
            "month": "Jul",
            "accidents": $scope.numberOfAccidentsPerMonth7
          }, {
            "month": "Avg",
            "accidents": $scope.numberOfAccidentsPerMonth8
          }, {
            "month": "Sep",
            "accidents": $scope.numberOfAccidentsPerMonth9
          }, {
            "month": "Okt",
            "accidents": $scope.numberOfAccidentsPerMonth10
          }, {
            "month": "Nov",
            "accidents": $scope.numberOfAccidentsPerMonth11
          }, {
            "month": "Dec",
            "accidents": $scope.numberOfAccidentsPerMonth12
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

      $scope.numberOfAccidentsPerQuartal1 = $scope.newData.quarterStatistics[0].numberOfAccidents;
      $scope.numberOfAccidentsPerQuartal2 = $scope.newData.quarterStatistics[1].numberOfAccidents;
      $scope.numberOfAccidentsPerQuartal3 = $scope.newData.quarterStatistics[2].numberOfAccidents;
      $scope.numberOfAccidentsPerQuartal4 = $scope.newData.quarterStatistics[3].numberOfAccidents;

      $scope.chartMonth = AmCharts.makeChart( "chartQuartal", {
          "type": "serial",
          "theme": "light",
          "dataProvider": [ {
            "quartal": "I kvartal",
            "accidents": $scope.numberOfAccidentsPerQuartal1
          }, {
            "quartal": "II kvartal",
            "accidents": $scope.numberOfAccidentsPerQuartal2
          }, {
            "quartal": "III kvartal",
            "accidents": $scope.numberOfAccidentsPerQuartal3
          }, {
            "quartal": "IV kvartal",
            "accidents": $scope.numberOfAccidentsPerQuartal4
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

      $scope.numberOfAccidentsPerDay1 = $scope.newData.dayStatistics[0].numberOfAccidents;
      $scope.numberOfAccidentsPerDay2 = $scope.newData.dayStatistics[1].numberOfAccidents;
      $scope.numberOfAccidentsPerDay3 = $scope.newData.dayStatistics[2].numberOfAccidents;
      $scope.numberOfAccidentsPerDay4 = $scope.newData.dayStatistics[3].numberOfAccidents;
      $scope.numberOfAccidentsPerDay5 = $scope.newData.dayStatistics[4].numberOfAccidents;
      $scope.numberOfAccidentsPerDay6 = $scope.newData.dayStatistics[5].numberOfAccidents;
      $scope.numberOfAccidentsPerDay7 = $scope.newData.dayStatistics[6].numberOfAccidents;

      $scope.chartMonth = AmCharts.makeChart( "chartDay", {
          "type": "serial",
          "theme": "light",
          "dataProvider": [{
            "day": "Ponedeljak",
            "accidents": $scope.numberOfAccidentsPerDay1
          }, {
            "day": "Utorak",
            "accidents": $scope.numberOfAccidentsPerDay2
          }, {
            "day": "Srijeda",
            "accidents": $scope.numberOfAccidentsPerDay3
          }, {
            "day": "Cetvrtak",
            "accidents": $scope.numberOfAccidentsPerDay4
          }, {
            "day": "Petak",
            "accidents": $scope.numberOfAccidentsPerDay5
          }, {
            "day": "Subota",
            "accidents": $scope.numberOfAccidentsPerDay6
          }, {
            "day": "Nedelja",
            "accidents": $scope.numberOfAccidentsPerDay7
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

      $scope.numberOfAccidentsPerHour0 = $scope.newData.hourStatistics[0].numberOfAccidents;
      $scope.numberOfAccidentsPerHour1 = $scope.newData.hourStatistics[1].numberOfAccidents;
      $scope.numberOfAccidentsPerHour2 = $scope.newData.hourStatistics[2].numberOfAccidents;
      $scope.numberOfAccidentsPerHour3 = $scope.newData.hourStatistics[3].numberOfAccidents;
      $scope.numberOfAccidentsPerHour4 = $scope.newData.hourStatistics[4].numberOfAccidents;
      $scope.numberOfAccidentsPerHour5 = $scope.newData.hourStatistics[5].numberOfAccidents;
      $scope.numberOfAccidentsPerHour6 = $scope.newData.hourStatistics[6].numberOfAccidents;
      $scope.numberOfAccidentsPerHour7 = $scope.newData.hourStatistics[7].numberOfAccidents;
      $scope.numberOfAccidentsPerHour8 = $scope.newData.hourStatistics[8].numberOfAccidents;
      $scope.numberOfAccidentsPerHour9 = $scope.newData.hourStatistics[9].numberOfAccidents;
      $scope.numberOfAccidentsPerHour10 = $scope.newData.hourStatistics[10].numberOfAccidents;
      $scope.numberOfAccidentsPerHour11 = $scope.newData.hourStatistics[11].numberOfAccidents;
      $scope.numberOfAccidentsPerHour12 = 0;
      $scope.numberOfAccidentsPerHour13 = $scope.newData.hourStatistics[12].numberOfAccidents;
      $scope.numberOfAccidentsPerHour14 = $scope.newData.hourStatistics[13].numberOfAccidents;
      $scope.numberOfAccidentsPerHour15 = $scope.newData.hourStatistics[14].numberOfAccidents;
      $scope.numberOfAccidentsPerHour16 = $scope.newData.hourStatistics[15].numberOfAccidents;
      $scope.numberOfAccidentsPerHour17 = $scope.newData.hourStatistics[16].numberOfAccidents;
      $scope.numberOfAccidentsPerHour18 = $scope.newData.hourStatistics[17].numberOfAccidents;
      $scope.numberOfAccidentsPerHour19 = $scope.newData.hourStatistics[18].numberOfAccidents;
      $scope.numberOfAccidentsPerHour20 = $scope.newData.hourStatistics[19].numberOfAccidents;
      $scope.numberOfAccidentsPerHour21 = $scope.newData.hourStatistics[20].numberOfAccidents;
      $scope.numberOfAccidentsPerHour22 = $scope.newData.hourStatistics[21].numberOfAccidents;
      $scope.numberOfAccidentsPerHour23 = $scope.newData.hourStatistics[22].numberOfAccidents;

      $scope.chartMonth = AmCharts.makeChart( "chartHour", {
        "type": "serial",
        "theme": "light",
        "rotate": true,
        "marginBottom": 50,
        "dataProvider": [{
          "age": "11",
          "beforeNoon": -$scope.numberOfAccidentsPerHour11,
          "afterNoon": $scope.numberOfAccidentsPerHour23
        }, {
          "age": "10",
          "beforeNoon": -$scope.numberOfAccidentsPerHour10,
          "afterNoon": $scope.numberOfAccidentsPerHour22
        }, {
          "age": "9",
          "beforeNoon": -$scope.numberOfAccidentsPerHour9,
          "afterNoon": $scope.numberOfAccidentsPerHour21
        }, {
          "age": "8",
          "beforeNoon": -$scope.numberOfAccidentsPerHour8,
          "afterNoon": $scope.numberOfAccidentsPerHour20
        }, {
          "age": "7",
          "beforeNoon": -$scope.numberOfAccidentsPerHour7,
          "afterNoon": $scope.numberOfAccidentsPerHour19
        }, {
          "age": "6",
          "beforeNoon": -$scope.numberOfAccidentsPerHour6,
          "afterNoon": $scope.numberOfAccidentsPerHour18
        }, {
          "age": "5",
          "beforeNoon": -$scope.numberOfAccidentsPerHour5,
          "afterNoon": $scope.numberOfAccidentsPerHour17
        }, {
          "age": "4",
          "beforeNoon": -$scope.numberOfAccidentsPerHour4,
          "afterNoon": $scope.numberOfAccidentsPerHour16
        }, {
          "age": "3",
          "beforeNoon": -$scope.numberOfAccidentsPerHour3,
          "afterNoon": $scope.numberOfAccidentsPerHour15
        }, {
          "age": "2",
          "beforeNoon": -$scope.numberOfAccidentsPerHour2,
          "afterNoon": $scope.numberOfAccidentsPerHour14
        }, {
          "age": "1",
          "beforeNoon": -$scope.numberOfAccidentsPerHour1,
          "afterNoon": $scope.numberOfAccidentsPerHour13
        }, {
          "age": "0",
          "beforeNoon": -$scope.numberOfAccidentsPerHour0,
          "afterNoon": $scope.numberOfAccidentsPerHour12
        }],
        "startDuration": 1,
        "graphs": [{
          "fillAlphas": 0.8,
          "lineAlpha": 0.2,
          "type": "column",
          "valueField": "beforeNoon",
          "title": "beforeNoon",
          "labelText": "[[value]]",
          "clustered": false,
          "labelFunction": function(item) {
            return Math.abs(item.values.value);
          },
          "balloonFunction": function(item) {
            return item.category + ": " + Math.abs(item.values.value);
          }
        }, {
          "fillAlphas": 0.8,
          "lineAlpha": 0.2,
          "type": "column",
          "valueField": "afterNoon",
          "title": "afterNoon",
          "labelText": "[[value]]",
          "clustered": false,
          // "labelFunction": function(item) {
          //   return Math.abs(item.values.value);
          // },
          "balloonFunction": function(item) {
            return item.category + ": " + Math.abs(item.values.value);
          }
        }],
        "categoryField": "age",
        "categoryAxis": {
          "gridPosition": "start",
          "gridAlpha": 0.2,
          "axisAlpha": 0
        },
        "valueAxes": [{
          "gridAlpha": 0,
          "ignoreAxisWidth": true,
          // "labelFunction": function(value) {
          //   return Math.abs(value) + '%';
          // },
          "guides": [{
            "value": 0,
            "lineAlpha": 0.2
          }]
        }],
        "balloon": {
          "fixedPosition": true
        },
        "chartCursor": {
          "valueBalloonsEnabled": false,
          "cursorAlpha": 0.05,
          "fullWidth": true
        },
        "allLabels": [{
          "text": "Pre podne",
          "x": "28%",
          "y": "97%",
          "bold": true,
          "align": "middle"
        }, {
          "text": "Posle podne",
          "x": "75%",
          "y": "97%",
          "bold": true,
          "align": "middle"
        }],
        "export": {
          "enabled": true
        }
      });

      $scope.numberOfAccidentsPerType1 = $scope.newData.typeStatistics[0].numberOfAccidents;
      $scope.numberOfAccidentsPerType2 = $scope.newData.typeStatistics[1].numberOfAccidents;
      $scope.numberOfAccidentsPerType3 = $scope.newData.typeStatistics[2].numberOfAccidents;

      $scope.chartMonth = AmCharts.makeChart( "chartType", {
        "type": "pie",
        "theme": "light",
        "dataProvider": [ {
          "title": "Materijalna šteta",
          "value": $scope.numberOfAccidentsPerType1
        }, {
          "title": "Povređeni",
          "value": $scope.numberOfAccidentsPerType2
        }, {
          "title": "Poginuli",
          "value": $scope.numberOfAccidentsPerType3
        }],
        "titleField": "title",
        "valueField": "value",
        "labelRadius": 5,

        "radius": "42%",
        "innerRadius": "60%",
        "labelText": "[[title]]",
        "export": {
          "enabled": true
        }
      });

      $scope.numberOfAccidentsPerWeather1 = $scope.newData.weatherStatistics[0].numberOfAccidents;
      $scope.numberOfAccidentsPerWeather2 = $scope.newData.weatherStatistics[1].numberOfAccidents;
      $scope.numberOfAccidentsPerWeather3 = $scope.newData.weatherStatistics[2].numberOfAccidents;

      $scope.chartMonth = AmCharts.makeChart( "chartWeather", {
        "type": "pie",
        "theme": "light",
        "dataProvider": [ {
          "title": "Kiša",
          "value": $scope.numberOfAccidentsPerWeather1
        }, {
          "title": "Sneg",
          "value": $scope.numberOfAccidentsPerWeather2
        }, {
          "title": "Bez padavina",
          "value": $scope.numberOfAccidentsPerWeather3
        }],
        "titleField": "title",
        "valueField": "value",
        "labelRadius": 5,

        "radius": "42%",
        "innerRadius": "60%",
        "labelText": "[[title]]",
        "export": {
          "enabled": true
        }
      });

      $scope.numberOfAccidentsPerSummaryType1 = $scope.newData.summaryTypeStatistics[0].numberOfAccidents;
      $scope.numberOfAccidentsPerSummaryType2 = $scope.newData.summaryTypeStatistics[1].numberOfAccidents;
      $scope.numberOfAccidentsPerSummaryType3 = $scope.newData.summaryTypeStatistics[2].numberOfAccidents;
      $scope.numberOfAccidentsPerSummaryType4 = $scope.newData.summaryTypeStatistics[3].numberOfAccidents;
      $scope.numberOfAccidentsPerSummaryType5 = $scope.newData.summaryTypeStatistics[4].numberOfAccidents;
      $scope.numberOfAccidentsPerSummaryType6 = $scope.newData.summaryTypeStatistics[5].numberOfAccidents;
      $scope.numberOfAccidentsPerSummaryType7 = $scope.newData.summaryTypeStatistics[6].numberOfAccidents;

      $scope.chartMonth = AmCharts.makeChart( "chartSummaryType", {
          "type": "serial",
          "theme": "light",
          "dataProvider": [{
            "day": "Vedro",
            "accidents": $scope.numberOfAccidentsPerSummaryType1
          }, {
            "day": "Mestimično oblačno",
            "accidents": $scope.numberOfAccidentsPerSummaryType2
          }, {
            "day": "Pretežno oblačno",
            "accidents": $scope.numberOfAccidentsPerSummaryType3
          }, {
            "day": "Oblačno",
            "accidents": $scope.numberOfAccidentsPerSummaryType4
          }, {
            "day": "Maglovito",
            "accidents": $scope.numberOfAccidentsPerSummaryType5
          }, {
            "day": "Vetrovito",
            "accidents": $scope.numberOfAccidentsPerSummaryType6
          }, {
            "day": "Nepoznato",
            "accidents": $scope.numberOfAccidentsPerSummaryType7
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
