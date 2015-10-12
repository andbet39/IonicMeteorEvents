/**
 * Created by andrea.terzani on 12/10/2015.
 */
angular.module("starter")
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'client/menu/views/menu.ng.html',
                controller: 'AppCtrl'
            })
            .state('app.main', {
                url: '/main',
                views: {
                    'menuContent': {
                        templateUrl: 'client/main/views/main.ng.html',
                        controller: 'MainCtrl'
                    }
                }
            }).state('app.event', {
                url: '/event',
                views: {
                    'menuContent': {
                        templateUrl: 'client/event/views/event.ng.html',
                        controller: 'EventCtrl'
                    }
                }
            });


    // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/main');

});