const app = angular.module('CustomDirective', []);

app.controller('AppCtrl', [
    '$scope',
    '$http',
    function ($scope, $http) {
        $http
            .get('https://api.github.com/users/amontalvof/repos')
            .then(function (response) {
                $scope.repos = response.data;
            })
            .catch(function (err) {
                console.log(err);
            });
    },
]);
