const app = angular
    .module('mainModule', [])
    .filter('removeHTML', function () {
        return function (text) {
            return String(text).replace(/<[^>]+>/gm, '');
        };
    })
    .controller('FiltersController', function ($scope) {
        $scope.my_html = '<p>Hello World</p>';
        $scope.my_html_2 = {};
        $scope.my_html_2.tile = 'Lorem';
        $scope.my_html_2.body = 'Lorem ipsum';
        $scope.price = 2;
    });
