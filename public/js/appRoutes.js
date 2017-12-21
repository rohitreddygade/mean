angular.module('appRoutes',[]).config(['$routeProvider','$locationProvider',function($routeProvider , $locationProvider)
	{
		$routeProvider

		.when('/',{

					templateUrl :  'views/home.html',
					controller  :  'MainController'

				})
		.when('/nerds',{

					templateUrl : 'views/nerds.html',
					controller : 'NerdController'
		})
		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		});

		$locationProvider.html5Mode(true);

	}]);