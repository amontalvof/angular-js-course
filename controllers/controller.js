const app = angular.module('ToDoList', ['LocalStorageModule']);

app.service('ToDoService', function (localStorageService) {
    this.key='angular-todoList'
    this.todos=[]
    if (localStorageService.get(this.key)) {
        this.todos = localStorageService.get(this.key);
    } else {
        this.todos = [];
    }
    this.add = function (newTodo) {
        this.todos.unshift(newTodo);
        this.updateLocalStorage();
    };
    this.updateLocalStorage = function () {
        localStorageService.set(this.key, this.todos);
    };
    this.clean = function () {
        this.todos = [];
        this.updateLocalStorage();
    };
    this.getAll = function () {
        return this.todos;
    };
    this.removeItem = function (item) {
        this.todos = this.todos.filter((todo) => todo !== item);
        this.updateLocalStorage();
        return this.getAll();
    };
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
