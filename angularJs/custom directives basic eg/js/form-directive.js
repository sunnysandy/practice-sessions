var app=angular.module("myApp",[]);
app.controller("Ctrl",function(){

})
app.directive("contactFrom",function(){
  return{
    restrict:"E",
    templateUrl:"index.html",

      scope:{
          reportid:"=",
          otp:"="
      },
          link:function(scope,ele,att){
            /* ele.find('#submit').bind("click",function(){
                  var params={inputstr:scope.reportid+"~"}
                  if(scope.otp==true){
                      
                      alert("Opt send")
                  }
                  else{
                       alert("Sending values with without opt")
                  }
              })*/
              
          },
      controller:function($scope){
          $scope.submitfom=function(){
               var params={inputstr:$scope.reportid+"~"}
                  if($scope.otp==true){
                      
                      alert("Opt sending")
                  }
                  else{
                       alert("Sending values with without opt")
                  }
          }          
         
      }
  }

})
