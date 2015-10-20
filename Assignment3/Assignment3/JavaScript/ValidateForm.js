


//if (!emailCheck(email)) {
//    fields.indexOf
//    alert("Invalid Email Address. Please enter a valid one.");
//    document.forms['regForm']['email'].focus();
//    console.log("Invalid Email Address. Please enter a valid one.");


function ValidateForm() {
    // address = document.forms['regForm']['address'].value;
    // city = document.forms['regForm']['city'].value;
    // pCode = document.forms['regForm']['pCode'].value;
    // province = document.forms['regForm']['province'].value;
    // age = document.forms['regForm']['age'].value;
    // pass = document.forms['regForm']['pass'].value;
    // confirm = document.forms['regForm']['confirm'].value;

    //lName = document.forms['regForm']['lName'].value;
    //var nullLength = document.forms['regForm'].length;
    //fName = document.forms['regForm']['fName'].value;
    //var email = document.forms['regForm']['email'].value;
    //var emailCheck = /^([A-Za-z0-9\-\.]){1,}\@([A-Za-z0-9\-\.]){1,}\.([A-Za-z]{2,4})$/;
    //var postalCheck = /^(a-zA-Z]{1}[0-9]{1}){3}$/;
}       
var i;
var outputVal = "";

function checkEmpty(fieldName) {  
    fieldName = fieldName.name;
    var inputs = document['regForm'].getElementsByTagName("input");
    var nameIndexInput = [];
    console.log(fieldName);
    for (a = 0 ; a < (inputs.length - 2) ; a++) {
        nameIndexInput[a] = inputs[a].name;        
    }
    console.log[nameIndexInput[3]];
    var nullValues = [];
    for (i in inputs) {
        if (inputs[i].value.toString().substring(0, 0) === "") {
            nullValues = inputs[i].name;            
        }
        else {
            return false;
        }
    }
 
   




















 /*   for (count = 0 ; count < (nameIndexInput.length) ; count++) {
        var emptyString = inputs[count].value.toString().substring(0, 0) === "";
        console.log(i + " second" + count);
        if (nameIndexInput[count].match(fieldName)) {
            if (emptyString) {
                console.log(fieldName);
                var outputIndex = nameIndexInput.indexOf(fieldName);
                console.log(count);
                console.log(outputIndex);
                outputVal = outputVal +"  " + getFieldName(outputIndex.toString());

              //  console.log(fieldName);
               // console.log(nameIndexInput[i]);
            }
            else { return false; }
        }
        else { return false; }
        alert( outputVal + " cannot be left blank.");
    }
  */
}
    fields = ["First Name", "Last Name ", "Address", "City ", "Postal Code", "Province", "Age", "Password", "Confirm Password", "Email"];

    function getFieldName(fieldIndex) {
        for (counter in fields) {
            if (fieldIndex.match(counter)) {
                counter = fields[counter];
                return counter.toUpperCase();

            }


        }

    }


//    for (i = 0 ; i < (inputs.length - 2) ; i++)
//    {
//        if (nameIndexInput[i].match(fieldName)) {

//            if (inputs[i].value.toString().substring(0, 0) === "") {

//                console.log(inputs[i].value);
//                alert(getFieldName(i) + " cannot be left blank.");
//                // document.forms['regForm'][].focus();
//            }

//            else {

//                return false;
//            }
//        }
//        else {
//            return false;
//        }
//    }
//}


