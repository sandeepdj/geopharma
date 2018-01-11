'use strict';
var app = angular.module('geoPharma', ['ui.router', 'toaster']);
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: 'views/login/login.html',
                controller: 'authCtrl'
            })

        .state('app', {
            url: '/app',
            templateUrl: 'views/header/header.html',
            controller: 'authCtrl'

        })

        .state('app.Home', {
            url: '/Home',
            templateUrl: 'views/home/home.html',
            controller: 'authCtrl'
        })

        .state('app.Walkin', {
            url: '/Walkin',
            templateUrl: 'views/sale/walkin.html',
            controller: 'saleCtrl'
        })
    }
]);


app.run(function($state, $rootScope, $location, Data) {
    $rootScope.$on("$stateChangeStart", function(event, next, current) {
        $rootScope.authenticated = false;
        Data.get('session').then(function(results) {
            if (results.uid) {
                $rootScope.authenticated = true;
                $rootScope.uid = results.uid;
                $rootScope.rlid = results.rlid;
                $rootScope.name = results.name;
                $rootScope.email = results.email;
                $rootScope.logphoto = results.photo;
                sessionStorage.setItem('userid', $rootScope.uid);
            } else {
                sessionStorage.removeItem('userid');
                $state.go('/');
            }

        });
    });
});