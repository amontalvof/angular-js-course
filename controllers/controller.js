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
        $scope.addComment = function () {
            $scope.comments.push($scope.newComment);
            $scope.newComment = {};
        };
    },
]);
