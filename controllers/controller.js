const app = angular.module('CustomDirective', []);

app.directive('backImg', function () {
    return function (scope, element, attrs) {
        attrs.$observe('backImg', function (value) {
            element.css({
                background: 'url(' + value + ')',
                'background-size': 'cover',
                'background-position': 'center',
            });
        });
    };
}).controller('AppCtrl', function ($scope, $http) {
    $http
        .get('https://api.github.com/users/amontalvof/repos')
        .then(function (response) {
            $scope.repos = response.data;
        })
        .catch(function (err) {
            console.log(err);
        });
});
