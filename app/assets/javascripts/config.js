angular.module('openball').config(['$routeProvider',function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'polls/index.html',
      controller: 'PollsController'
      }
    )
}])