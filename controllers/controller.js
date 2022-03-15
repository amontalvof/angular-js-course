const app = angular.module('MyFirstApp', []);

app.controller('FirstController', [
    '$scope',
    '$http',
    function ($scope, $http) {
        $scope.posts = [];
        $scope.newPost = {};
        $http.get('https://jsonplaceholder.typicode.com/posts').then(
            function ({ data }) {
                $scope.posts = data;
            },
            function (error) {
                console.error(error);
            }
        );
        $scope.addPost = function () {
            $http
                .post('https://jsonplaceholder.typicode.com/posts', {
                    ...$scope.newPost,
                })
                .then(
                    function ({ data }) {
                        $scope.posts.unshift(data);
                        $scope.newPost = {};
                    },
                    function (error) {
                        console.error(error);
                    }
                );
        };
    },
]);
