window.addEventListener("DOMContentLoaded", setValidation);

function setValidation() {
    document.querySelector("form input[type='submit']").addEventListener('click', validateForm);
}

function validateForm() {
    if (document.getElementById('name').value.length === 0) {
        alert("A név mező nincs kitöltve!");
    } else {
        document.querySelector("form").submit();
    }
}
