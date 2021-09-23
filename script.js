let form= document.getElementById("form");
let username= document.getElementById("username");
let email= document.getElementById("email");
let password= document.getElementById("password");
let password2= document.getElementById("password2");


//show input error message
function showError(input, message){
let formControl = input.parentElement;
formControl.className="form-control error";
let small=formControl.querySelector("small");
small.innerText=message;
}
//show success outline
function showSuccess(input){
    let formControl = input.parentElement;
formControl.className="form-control success";
}

//check email is valid
function isValidEmail(email){
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}

//check required fields
function checkRequired(inputArr){
inputArr.forEach(function(input){
if(input.value.trim() === ""){
    showError(input, `${getFieldName(input)} is required`);
} else{
    showSuccess(input);
}

});
}

//check input length
function checkLength(input, min, max){
    if (input.value.length < min){
showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if(input.value.length > max) {showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    } else {
        showSuccess(input);
    }
}


//get field name
function getFieldName(input){
return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners
form.addEventListener("submit", function(e){
    e.preventDefault();
    checkRequired([username, email, password, password2]);
checkLength(username, 3, 15);
checkLength(password, 6, 25);

});