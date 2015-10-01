var app = angular.module('YRAlerts', ['ui.router', 'ngCookies']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  //making 'pretty urls'
  $locationProvider.html5Mode(true);

  //for urls not recognized
  $urlRouterProvider.otherwise('/');

  //setting up the states
  $stateProvider
    .state('welcome', {
      url: '/',
      templateUrl: 'ngPartials/welcome.html'
    })
    .state('auth/callback', {
      url: 'auth/callback',
      templateUrl: 'ngPartials/about.html',
      setCookie: function($stateParams) {
        console.log($stateParams);
        // $cookie.set('token', $stateParams.(WHAT?))
      }
    });
});
