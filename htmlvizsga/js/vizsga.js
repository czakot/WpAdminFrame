function validate() {
    let prodname = document.getElementById("productname");
    if (prodname.value.length == 0) {
        alert("Töltsd ki a 'Termék neve' mezőt!");
        prodname.focus();
    } else {
        alert("Rendben");
        document.getElementById("new-product-form").ssubmit();
    }
}

/*
Javascripttel ellenőrizd, hogy a gomb megnyomásakor ki van e töltve a termék neve input mező.
    Ha üres a mező írja ki egy alert-el hogy töltse ki
Ha nem üres akkor írja ki, hogy rendben
*/
