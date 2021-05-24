function regUser(){
	const regForm = document.getElementById("regform");
	const name = regForm.name.value;
	const email = regForm.email.value;
	const password = regForm.pwd.value;
	const password2 = regForm.pwd2.value;
	const address = regForm.address.value;
	
	if(!name || !email || !password || !password2 || !address){
		alert("Minden mező kitöltése kötelező!");
	} else if (password !== password2) {
		alert("A két jelszónak egyeznie kell!");
	} else {
		alert("A regisztráció sikeres");
	}
}