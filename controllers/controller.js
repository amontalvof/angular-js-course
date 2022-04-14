const app = angular.module('CustomDirective', []);

app.directive('myAutocomplete', function () {
    function link(scope, element, attrs) {
        $(element).autocomplete({
            source: [
                'react-journal-app',
                'react-gifexpertapp',
                'react-custom-hooks',
                'react-calendar-frontend',
                'react-beach-resort',
                'react-antique-tech-store',
                'react-airbnb-clone',
                'react-adv',
                'node-websocket-server',
                'node-websocket-inline-app',
                'node-websocket-chat-server',
                'node-web-server',
                'node-weather-app',
                'node-typescript-restserver',
                'node-typescript-mysql-crud',
                'node-todo-list',
                'node-rest-server',
                'node-calendar-backend',
                'markdown-badges',
                'javascript-todo-list',
                'javascript-blackjack',
                'firestore-helpers',
                'effortless-react',
                'data-structure-and-algorithms',
                'darknet',
                'clean-code-javascript',
                'anuraghazra',
                'angular-js-tutorial',
                'angular-js-course',
                'amontalvof',
            ],
            select: function (event, ui) {
                event.preventDefault();
                if (ui.item) {
                    scope.optionSelected(ui.item.value);
                }
            },
            focus: function (event, ui) {
                event.preventDefault();
                $(this).val(ui.item.label);
            },
        });
    }
    return {
        link,
    };
})
    .directive('backImg', function () {
        return function (scope, element, attrs) {
            attrs.$observe('backImg', function (value) {
                element.css({
                    background: 'url(' + value + ')',
                    'background-size': 'cover',
                    'background-position': 'center',
                });
            });
        };
    })
    .controller('AppCtrl', function ($scope, $http) {
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
    });
