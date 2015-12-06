/**
 * Created by Branislav Vidojevic on 15/10/2015.
 */

var app1 = angular.module("app1", ['duScroll']);

//default scroll duration
app1.value('duScrollDuration', 850);

app1.controller('DocsCtrl', ['$scope', '$http', function ($scope, $http) {

    $http.get('documentation.json').success(function (data) {
        $scope.docs = data.docs;
    }).error(function () {
        console.log('Error, GET documentation.json failed.');
    });

    $scope.formatJson = function (text1) {
        return JSON.stringify(JSON.parse(text1), null, 2);
    }

}]);
