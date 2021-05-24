window.addEventListener('DOMContentLoaded', setValidation);

function setValidation() {
    let regbutton = document.getElementById('regbutton');
    regbutton.addEventListener('click', validateForm);
}

function arePasswordsIdentical(regform) {
    let passwords = regform.querySelectorAll("input[type='password']");
    return passwords.item(0).value === passwords.item(1).value;
}

function isAllRequiredTextFilled(regform) {
    let inputFields = regform.querySelectorAll(".shouldbefilled");
    let allFilled = true;
    for (let index in inputFields) {
        if (inputFields.item(index).value.length == 0) {
            allFilled = false;
            break;
        }
    }
    return allFilled;
}

function validateForm() {
    event.preventDefault();
    let regform = document.querySelector("form");
    if (isAllRequiredTextFilled(regform) && arePasswordsIdentical(regform)) {
        alert("Kitöltés rendben")
        regform.submit();
    } else {
        alert("Hiányos vagy hibás kitöltés!");
    }
}
