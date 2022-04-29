angular
    .module('FinalApp')
    .controller('MainController', function ($scope, $resource) {
        Post = $resource('http://jsonplaceholder.typicode.com/posts/:id', {
            id: '@id',
        });
        User = $resource('http://jsonplaceholder.typicode.com/users/:id', {
            id: '@id',
        });
        $scope.posts = Post.query();
        $scope.users = User.query();

        $scope.removePost = function (post) {
            Post.delete({ id: post.id }, function (data) {
                console.log(data);
            });
            $scope.posts = $scope.posts.filter((item) => item.id !== post.id);
        };
    })
    .controller('PostController', function ($scope, $routeParams, $resource) {
        Post = $resource('http://jsonplaceholder.typicode.com/posts/:id', {
            id: '@id',
        });
        $scope.post = Post.get({ id: $routeParams.id });
    });
