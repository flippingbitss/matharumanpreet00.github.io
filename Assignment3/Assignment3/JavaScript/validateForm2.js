

function validatingFunction() {
    var firstName = document.forms["regForm"]["fName"].value;
    var lastName = document.forms["regForm"]["lName"].value;
    var address = document.forms["regForm"]["address"].value;
    var city = document.forms["regForm"]["city"].value;
    var postalCode = document.forms["regForm"]["pCode"].value;
    var province = document.forms["regForm"]["province"].value;
    var age = document.forms["regForm"]["age"].value;
    var password = document.forms["regForm"]["password"].value;
    var confirmPassword = document.forms["regForm"]["confirm"].value;
    var email = document.forms["regForm"]["email"].value;

    var emailCheck = /^([A-Za-z0-9\-\.]){1,}\@([A-Za-z0-9\-\.]){1,}\.([A-Za-z]{2,4})$/;
    //var emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passCheck = (/^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,}$/);
    //var postalCheck = /^(a-zA-Z]{1}[0-9]{1}){3}$/;
    var postalCheck = /^([a-z]\d){3}$/i;

    var ageConfirm = "false";
    var provinceConfirm = "false";
    var emailConfirm = "false";
    var passwordConfirm = "false";
    var passwordConfirm1 = "false";
    var provinceCheck = "false";
    var emailCheck = "false";
    var passwordCheck = "false";
    var ageCheck = "false";

    if (firstName === "") {
        alert("First Name cannot be left blank.");
    }
    if (lastName === "") {
        alert("Last Name cannot be left blank.");
    }
    if (address === "") {
        alert("Address cannot be left blank.");
    }
    if (city === "") {
        alert("City cannot be left blank.");
    }
    if (postalCode === "") {
        alert("Postal Code cannot be left blank.");
    }

    if (postalCode != "")
    {
        if(!postalCheck.test(postalCode))
        {
            alert("Postal Code has to be in a1a1a1 format.")
        }
    }
    if (province === "") {
        alert("Province cannot be left blank.");
        provinceCheck = "true";
    }
   
    if (age === "") {
        alert("Age cannot be left blank.");
        ageCheck = "true";
    }
   
    if (password === "") {
        alert("Password is required.");
        passwordCheck = "true";
    }
    
    if (confirmPassword === "") {
        alert("Confirm Password is required.");
    }

    if (password !== confirmPassword)
    {
        alert("Passwords doesn't match");
    }
    else {
        passwordConfirm1 = "true";
    }


    if (email === "") {
        alert("Email address cannot be left blank.");
        emailCheck = "true";
    }
   

    if (provinceCheck === "false") {
        if (province === "QC" || province === "ON" || province === "MN" || province === "SK" || province === "AB" || province === "BC") {
            provinceConfirm = "true";
        }
        else {
            alert("Choose one of these provinces ( QC, ON, MN, SK, AB, BC.)");
        }
    }

    if (email != "") {
        if (!emailCheck.match(email)) {
            alert("Please provide valid email format");
        }      
    }
    

    if (passwordCheck === "false")
    {
        if (password.match(passCheck)) {
            passwordConfirm = "true";
        }
        else {
            alert("Passwords must have at least 6 characters and must contain at least one digit and one upper-case character!");
        }

    }
        
    if (ageCheck === "false")
    {
        if (age > 18) {
            ageConfirm = "true";
        }
        else {
           
            alert("Your age should be 18 years old!");
        }
    }
  

    if (ageConfirm === "true" && provinceConfirm === "true" && emailConfirm === "true" && passwordConfirm === "true" && passwordConfirm1 === "true")
    {
        alert("You are registered !");
    }
        
}
    

    
