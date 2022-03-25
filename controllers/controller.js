const app = angular.module('mainModule', []);

app.controller('FirstController', function ($scope) {
    $scope.name = 'Andy';
    setTimeout(function () {
        $scope.$apply(function () {
            $scope.name = 'Hello';
        });
    }, 2000);
    document.querySelector('#my_button').addEventListener('click', function () {
        $scope.$apply(function () {
            $scope.name = 'Hello World';
            console.log($scope.name);
        });
    });
});
