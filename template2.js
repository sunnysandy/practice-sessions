

function formvalidity(){
	var username=document.getElementsById("username").value;
	var gender=document.getElementsById("gender").value;
	var name=document.getElementsById("somename").value;
	var password=document.getElementsById("pwd").value;
	var skills=document.getElementsById("choose").value;
	var check=document.getElementsById("box").checked;
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

