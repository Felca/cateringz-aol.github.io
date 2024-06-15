function validationForm(){
    let email = document.getElementById("email-data").value
    let password = document.getElementById("password-data").value
    let address = document.getElementById("address-data").value
    let gender = document.getElementById("gender-data").value
    let dob = document.getElementById("dob-data").value
    let checkbox = document.getElementById("agreement").checked

    let email_check = false
    let password_check = false
    let address_check = false
    let gender_check = false
    let dob_check = false
    let checkbox_check = false

    if(!email.endsWith("@gmail.com")){
        document.getElementById("error-email").innerHTML = "email must ends with @gmail.com"
    } else{
        document.getElementById("error-email").innerHTML = ""
        email_check = true
    }

    if(!isAlphaNumeric(password)){
        document.getElementById("error-password").innerHTML = "password must contain a number or an alphabeth"
    } else{
        document.getElementById("error-password").innerHTML = ""
        password_check = true
    }

    if(new Date(dob) > new Date){
        document.getElementById("error-dob").innerHTML = "Date of birth can't exceed today's date"
    } else{
        document.getElementById("error-dob").innerHTML = ""
        dob_check = true
    }

    if(address.length < 10){
        document.getElementById("error-address").innerHTML = "Address must be more than 10 words"
    } else{
        document.getElementById("error-address").innerHTML = ""
        address_check = true
    }

    if(gender == 'select'){
        document.getElementById("error-gender").innerHTML = "Select either female or male"
    } else{
        document.getElementById("error-gender").innerHTML = ""
        gender_check = true
    }

    if(!checkbox){
        alert("You must agree to terms of service")
    } else{
        checkbox_check = true
    }

    if(email_check && password_check && dob_check && address_check && gender_check && checkbox_check){
        location.href = "Home.html"
    }

    
}

function isAlphaNumeric(password){
    let isAlpha = false
    let isNumeric = false
    for(let i = 0; i<password.length; i++){
        if(isNaN(password[i])) isAlpha = true
        else isNumeric = true
    }

    if(isAlpha == true && isNumeric == true) return true
    else return false
}