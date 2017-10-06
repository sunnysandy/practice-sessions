function formvalidity(){
	var username=document.getElementById("username").value
	var gender=document.getElementsByName("gender")[0].value;
	var name=document.getElementsByClassName("inpt")[0].value;
	var password=document.getElementsByTagName("input")[0].value;
	var skills=document.getElementById("choose").value;
	var check=document.getElementById("box").checked;
	if (username=="") {
		alert("name is reuried");

	}	
	if (gender=="select") {
		alert("select any gender");
	}
	if (name=="") {
		alert("username is reuried")
	}
	if( password==""){
		alert("please enter the password")
	}
	if (skills=="select") {
		alert("choose one option")

	}
	if (check==false) {
		alert("agree the box")
	}
}