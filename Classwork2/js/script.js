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

    var DoB = document.getElementById("txtDOB"); //why doesn't qeuery selector work????
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
    var ddCountry = document.getElementById("ddCountry");//why doesn't qeuery selector work????
    if (ddCountry.value == "Yes") {
        var inputtxtCountry = document.querySelector("#inputtxtCountry");
        var countryError = document.getElementById("divCountryError");
        if (inputtxtCountry.value == "") {
            inputtxtCountry.classList.add("hasError");
            countryError.classList.remove("invisible");
            countryError.innerHTML = "Please enter the countries you have visited"
            formIsValid = false;
        }
        else {
            inputtxtCountry.classList.remove("hasError");
            countryError.classList.add("invisible");
            
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