'use strict';

/**
 * Module to use Switchery as a directive for angular.
 * @TODO implement Switchery as a service, https://github.com/abpetkov/switchery/pull/11
 */
angular.module('NgSwitchery', [])
    .directive('uiSwitch', ['$window', '$timeout', '$parse',
        function ($window, $timeout, $parse) {

            /**
             * Initializes the HTML element as a Switchery switch.
             *
             * @TODO add a way to provide options for Switchery
             * $timeout is in place as a workaround to work within angular-ui tabs.
             * setTimeout is in place as a workaround to work within angular-ui tabs.
             *
             * @param scope
             * @param elem
             * @param attrs
             */
             
            var template = '<input ng-model="switcheryVar" />';
             
            function linkSwitchery(scope, elem, attrs) {

                var options;
                try {
                    options = $parse(attrs.uiSwitch)(scope);
                }
                catch (e) {
                    options = {};
                }

                $timeout(function () {
                    new $window.Switchery(elem[0], options);
                }, 0);

                elem.on('change', function () {
                    scope.$apply(function () {
                        scope.switcheryVar = elem[0].checked;
                    });
                });
            }

            return {
                restrict: 'AE',
                link: linkSwitchery,
                template: template,
                replace: true,
                scope: {
                    switcheryVar: '='
                }
            };
        }
    ]);