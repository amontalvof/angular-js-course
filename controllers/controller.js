const app = angular.module('MyFirstApp', []);

app.controller('FirstController', [
    '$scope',
    '$http',
    function ($scope, $http) {
        $scope.newComment = {};
        $scope.comments = [
            { comment: 'Good', username: 'Homer' },
            { comment: 'Bad', username: 'Lisa' },
        ];
        $scope.posts = [];
        $scope.addComment = function () {
            $scope.comments.push($scope.newComment);
            $scope.newComment = {};
        };
        $http.get('https://jsonplaceholder.typicode.com/posts').then(
            function ({ data }) {
                console.log(data);
                $scope.posts = data;
            },
            function (error) {
                console.error(error);
            }
        );
    },
]);
