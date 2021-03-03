function updateCountryView(){
    var ddCountry = document.getElementById("ddCountry");
    var txtCountry = document.getElementById("txtCountry");
    var travelcountryQuestion = document.getElementById("travelcountryQuestion");

    if(ddCountry.value == "No"){
        txtCountry.classList.add("invisible");
        travelcountryQuestion.classList.add("invisible");
    }
    else{
        txtCountry.classList.remove("invisible");
        travelcountryQuestion.classList.remove("invisible");
    }
}

function validateForm() {

    var DoB = document.getElementById("txtDOB");
    var divDoBError = document.getElementById("divDoBError")
    var formIsValid = true;
    if (DoB.value == "") {
        divDoBError.classList.remove("invisible");
        divDoBError.innerHTML = "The Date of birth can not be empty."
        DoB.classList.add("hasError");    
        formIsValid = false;
    }
    else {
        var DoBDate = new Date(DoB.value);
        var todayDate = new Date();
        if(DoBDate >= todayDate) {
            divDoBError.classList.remove("invisible");
            divDoBError.innerHTML = "Date of birth must be before today's date."
            DoB.classList.add("hasError");    
            formIsValid = false;
                
        }
        else {
            divDoBError.classList.add("invisible");
            divDoBError.innerHTML = ""
            DoB.classList.remove("hasError");    
            }
    
    }

    //check 2
    var ddCountry = document.getElementById("ddCountry");
    var errorCountry = document.getElementById("divCountryError");
    if (ddCountry.value == "Yes") {
        var txtCountry = document.getElementById("inputCountry");
        if (txtCountry.value == "") {
            document.getElementById("divCountryError").classList.remove("invisible");
            errorCountry.classList.add("errorMessage");
            txtCountry.classList.add("hasError");
            errorCountry.innerHTML = "Please input the country/countries you visited"
            formIsValid = false;
        }
        else {
            document.getElementById("divCountryError").classList.add("invisible");
            txtCountry.classList.remove("hasError");

        }

    }

    var elements = document.getElementsByTagName("input")
    var invalidChars = ['#', '!', '~']; //add all of them
    for (let i = 0; i < elements.length; i++) {
        for (let j = 0; j < invalidChars.length; j++) {
            if (elements[i].value.indexOf(invalidChars[j]) != -1) {
                elements[i].classList.add("hasError");
                formIsValid = false;
            }

        }
    }


    return formIsValid;
}
