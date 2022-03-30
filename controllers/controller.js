const app = angular.module('MyFirstApp', []).run(function ($rootScope) {
    $rootScope.name = 'Hello world';
});

app.controller('FirstController', [
    '$scope',
    function ($scope) {
        $scope.name = 'lorem';
        setTimeout(function () {
            $scope.$apply(function () {
                $scope.name = 'ipsum';
            });
        }, 1000);
    },
]).controller('ChildController', ['$scope', function ($scope) {}]);
