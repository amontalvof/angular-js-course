const app = angular.module('ToDoList', ['LocalStorageModule']);

app.controller('ToDoController', [
    '$scope',
    'localStorageService',
    function ($scope, localStorageService) {
        if (localStorageService.get('angular-todoList')) {
            $scope.todos = localStorageService.get('angular-todoList');
        } else {
            $scope.todos = [];
        }
        $scope.$watchCollection('todos', function () {
            localStorageService.set('angular-todoList', $scope.todos);
        });
        $scope.addTodo = function () {
            $scope.todos.unshift($scope.newTodo);
            $scope.newTodo = {};
            localStorageService.set('angular-todoList', $scope.todos);
        };
        $scope.clearTodos = function () {
            $scope.todos = [];
        };
    },
]);
