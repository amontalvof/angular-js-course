const app = angular.module('ToDoList', ['LocalStorageModule']);

app.controller('ToDoController', [
    '$scope',
    '$localStorageService',
    function ($scope, $localStorageService) {
        $scope.todo = [];

        $scope.addTodo = function () {
            $scope.todo.push($scope.newTodo);
            $scope.newTodo = {};
        };
    },
]);
