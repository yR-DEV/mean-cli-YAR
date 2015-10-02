var ngApp = angular.module('YRAlerts', ['ui.router', 'ngCookies']);

ngApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  //making 'pretty urls'
  // $locationProvider.html5Mode(true);

  //for urls not recognized
  $urlRouterProvider.otherwise('/');

  //setting up the states
  $stateProvider
    .state('welcome', {
      url: '/',
      templateUrl: 'ngPartials/welcome.html',
    })
    .state('auth', {
      url: '/auth/callback',
      templateUrl: 'ngPartials/account.html',
      controller: function($stateParams) {
        console.log($stateParams.url);
      }
    });
});
