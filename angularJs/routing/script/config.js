

var app=angular.module("myapp",["ngRoute"]);
app.config(function($routeProvider){
$routeProvider.when("/",{
	templateUrl:"pages/login.html",
	controller:"loginctrl"
})
.when("/signup",{
	templateUrl:"pages/register.html",
	controller:"registerctrl"
})
.when("/dashboard",{
	templateUrl:"pages/dashboard.html",
	controller:"dashboardctrl"
})
.otherwise({
	templateUrl:"404.html"
});
});