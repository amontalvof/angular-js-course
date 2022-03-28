const app = angular.module('MyFirstApp', []);

app.controller('FirstController', [
    '$scope',
    '$http',
    function ($scope, $http) {
        $scope.posts = [];
        $scope.loading = true;
        $http.get('https://jsonplaceholder.typicode.com/posts').then(
            function ({ data }) {
                $scope.posts = data;
                $scope.loading = false;
            },
            function (error) {
                console.error(error);
                $scope.loading = false;
            }
        );
        
    },
]);