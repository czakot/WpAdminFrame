function validateForm(){
	const form = document.getElementById("order-form");
	const nameInput = form.name.value;
	const emailInput = form.email.value;
	
	if(!nameInput || !emailInput){
		alert("A mezők kitöltése kötelező!");
	}
}