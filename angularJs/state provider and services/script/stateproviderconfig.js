var app=angular.module("myapp",['ui.router']);
app.config(function($stateprovider,$urlRouterprovider){

$urlRouterprovider.otherwise('/home');

$stateprovider
//home page
.state('home',{
 url:'/home',
 templateurl:'views/home.html',
 controller:"myctrl"
})
//login page
.state('login',{
 url:'/login',
 templateurl:'views/login.html',
 controller:"myctrl"
})
//register page
.state('register',{
 url:'/register',
 templateurl:'views/register.html',
 controller:"myctrl"
});


});
