(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngCookies'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'resume.html',
                controller:'ServicesCtrl',

            })


    }



})();