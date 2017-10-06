function line(){
var head=document.getElementById("headline").value;
if (head=="") {
		document.getElementById("headline").style.borderColor="red";
		document.getElementById("headline").style.display="block";
	}
}
	 /*$(document).ready(function(){

		$(#headline).blur(function(){
			var head=$(#headline).val()
			if(head==""){
			$(#headline).css({"borderColor":"red","display":"block"})
		}
		});

	});*/
function subline(){
	var subline=document.getElementById("subhead").value;
	if (subline=="") {
		document.getElementById("subhead").style.borderColor="red";
		document.getElementById("subhead").style.display="block";
	}
}
function url(){
	var surl=document.getElementById("sucessurl").value;
	if (surl=="") {
		document.getElementById("sucessurl").style.borderColor="red";
		document.getElementById("sucessurl").style.display="block";
	}
}
function submit(){
	var checkbox1=document.getElementById("box").checked;
	var checkbox2=document.getElementById("box1").checked;
	if(checkbox1!=true&& checkbox2!=true){
	alert("please check any user info")
	}
	
	}
	function videostart(){
		var start=document.getElementById("start").checked;
		if (start==true) {

			var control=document.getElementById("videocontrols");
			control.play()
		}
		else if (start==false) {
			var control=document.getElementById("videocontrols");
			control.pause()
		}
	}
	function videoend(){
		var end=document.getElementById("end").checked;
		if (end==true) {
			var control=document.getElementById("videocontrols");
			control.currentTime=control.duration;
		}
	}
	function customtime(){
		var customtime=document.getElementById("time").checked;
		if (customtime==true) {

			var control=document.getElementById("videocontrols");
			control.currentTime=2;
		}
	}
	function divshow(){
		
		
	    document.getElementById("inorout").style.display="block";

}
function divhidden(){
	  document.getElementById("inorout").style.display="none";

}
function changingfont(){
	var x=document.getElementById("choosefont").value;
	var ele=document.getElementsByClassName("label");
	for (var i =0 ; i<ele.length; i++) {
		
ele[i].style.fontFamily=x;
}
}
function colorFun(element) {
    var lablecolors=document.getElementsByClassName("label");
    for(var i=0;i<lablecolors.length; i++){
    	lablecolors[i].style.color=element;
    }

}
function colorbtn(element){

	document.getElementById("butt").setAttribute("class",element );
}

function colorchanges(element){
	document.getElementById("butt").style.backgroundColor=element;
}