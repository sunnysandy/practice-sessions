var app = angular.module('routerApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/welcome');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller:'homectrl'
        })
        
        // nested list with custom controller
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html'
            //controller:"loginctrl"
        })
        
        
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('register', {
            url: '/register',
            
            templateUrl: 'views/register.html',
            controller:"registerctrl"
        });
        
});
app.service("AjaxService", function ($http) {
    var self = this;
    this.get = function (params, method, callback) {
            $http({
             
                url: method,
                method: "GET",
                async: false,
                data: params
            }).then(function successCallback(response) {
                callback(response.data);

            }, function errorCallback(response) {
                callback(response.statusText);
            });

    }


})


app.controller("homectrl", function ($scope, $http, AjaxService) {
    $scope.mysubmit = function () {
        /// (params, method, callback) 
        AjaxService.get({ name: $scope.username, password: $scope.pwd }, "get", function (d) {
            window.location.href = "http://localhost:61403/index.html#!/login";

        })


    }
})

// login page details using with custom directives
app.directive("customDirective",function () {

    return {
        restrict: "AECM",
        template: 
       ' <label> name</label> <input type="text" name="inputname">'


            '<h1 ng-model="head" ng-show="showname">hello</h1>'
           '<a name= "myfun(head)" ></a >'

        link: function (scope, ele, attr) {
            ele.bind("click", function () {
                ele.css("background-color", "yellow")
              })
        }
       /* scope {
            name:'&'
        }
        controller: function (scope) {
            $scope.myfun = function (head) {
                $scope.showname = true
            }
        }*/
    }

    })

// register page using filters

app.controller("registerctrl",function($scope){

$scope.users=['ramu','shamu','monu','sonu']

})