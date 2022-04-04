const app = angular.module('ToDoList', ['LocalStorageModule']);

app.factory('ToDoService', function (localStorageService) {
    const todoService = {
        key: 'angular-todoList',
        todos: [],
    };
    if (localStorageService.get(todoService.key)) {
        todoService.todos = localStorageService.get(todoService.key);
    } else {
        todoService.todos = [];
    }
    todoService.add = function (newTodo) {
        todoService.todos.unshift(newTodo);
        todoService.updateLocalStorage();
    };
    todoService.updateLocalStorage = function () {
        localStorageService.set(todoService.key, todoService.todos);
    };
    todoService.clean = function () {
        todoService.todos = [];
        todoService.updateLocalStorage();
    };
    todoService.getAll = function () {
        return todoService.todos;
    };
    todoService.removeItem = function (item) {
        todoService.todos = todoService.todos.filter((todo) => todo !== item);
        todoService.updateLocalStorage();
        return todoService.getAll();
    };
    return todoService;
}).controller('ToDoController', [
    '$scope',
    'ToDoService',
    function ($scope, ToDoService) {
        $scope.todos = ToDoService.getAll();
        $scope.addTodo = function () {
            ToDoService.add($scope.newTodo);
            $scope.newTodo = {};
        };
        $scope.removeTodo = function (item) {
            $scope.todos = ToDoService.removeItem(item);
        };
        $scope.clearTodos = function () {
            $scope.todos = ToDoService.clean();
        };
    },
]);
