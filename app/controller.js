angular
    .module('CustomDirective')
    .controller('ReposController', function ($scope, $http) {
        $scope.repos = [];
        $http
            .get('https://api.github.com/users/amontalvof/repos')
            .then(function (response) {
                $scope.posts = response.data;
                for (
                    let index = response.data.length - 1;
                    index >= 0;
                    index--
                ) {
                    const element = response.data[index];
                    $scope.repos.push(element.name);
                }
            })
            .catch(function (err) {
                console.log(err);
            });
        $scope.optionSelected = function (data) {
            $scope.$apply(function () {
                $scope.main_repo = data;
            });
        };
    })
    .controller('RepoController', function ($scope, $http, $routeParams) {
        $scope.repo = {};
        $http
            .get(`https://api.github.com/repos/amontalvof/${$routeParams.name}`)
            .then(function (response) {
                $scope.repo = response.data;
            })
            .catch(function (err) {
                console.log(err);
            });
    });
