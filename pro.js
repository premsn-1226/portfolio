var booking = angular.module('bookEasy',["ngRoute"]);

booking.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl : '/html/home.html',
    controller : 'booking'
  })
  .when('/home',{
    templateUrl : '/html/home.html',
    controller : 'booking'
  })
  .when('/about',{
    templateUrl : '/html/about.html',
    controller : 'booking'
  })
  .when('/work',{
    templateUrl : '/html/work.html',
    controller : 'booking'
  })
  .when('/skills',{
    templateUrl : '/html/skill.html',
    controller : 'booking'
  })
  .when('/contact',{
    templateUrl : '/html/contact.html',
    controller : 'booking'
  })
  .otherwise({
    redirectTo : '/'
  })
});
