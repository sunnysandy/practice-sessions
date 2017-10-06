var app=angular.module("myapp",[]);
app.controller("myctrl",function($scope){

/*$scope.line=function(){
	var a=$scope.headline
	$scope.inpstyle={
		"borderColor":"red"
	}
}
*/
$scope.submit=function(){
	$scope.myshow=true;
}
$scope.email=function(){
	$scope.myshow=false;
}
$scope.name=function(){
	$scope.myshow=false;
}


$scope.videostart=function(startvideo){
	var start=$scope.startvideo;
	
	if (start==true) {
		
		var control=document.getElementById("videocontrols");
			control.play()
		}
	else if (start==false) {
			var control=document.getElementById("videocontrols");
			control.pause()
		}
}

$scope.videoend=function(){
var end=$scope.endvideo;
     if (end==true) {
			var control=document.getElementById("videocontrols");
			control.currentTime=control.duration;
		}
	}
	$scope.customtime=function(){
		var customtime=$scope.time;
		if (customtime==true) {

			var control=document.getElementById("videocontrols");
			control.currentTime=2;
		}
	}

$scope.divshow=function(){

	$scope.inorout=true;
}
$scope.divhidden=function(){
	$scope.inorout=false;

}

})