angular
    .module('CustomDirective')
    .directive('myAutocomplete', function () {
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
    });
