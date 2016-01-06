var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, $firebaseArray) {

    var ref = new Firebase("https://newly.firebaseio.com");

    $scope.allTheData = $firebaseArray(ref);  //this is like an array we would normally use



    $scope.addData = function() {
        $scope.allTheData.$add($scope.theData);
    }
    $scope.consoleLogThings = function() {
        console.log($scope.allTheData);
    }
    $scope.removeData = function() {
        $scope.allTheData.$remove($scope.theData);
    }
})