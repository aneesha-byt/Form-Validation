// We need a listener
// Lets validate the form again using JS

// we need to check password match
// Store the form data

// Dom Elements  take form elemnt to take js
let formEl = document.getElementById("form");
let messageEl = document.getElementById("message");
let messagecontainerEl = document.querySelector(".message-container");

let passwords = document.querySelectorAll(".password");
console.log(passwords);

// Flags/variables
let isValid = false;
let passwordMatch = false;
let storedData = {}

// validate the form before we store the data
const validateForm = () => {
  isValid = formEl.checkValidity();
  // instructions
  if (!isValid) {
    messageEl.innerHTML = "something is wrong";
    messagecontainerEl.classList.remove("pass")
    messagecontainerEl.classList.add("fail");
    return false
  } else {
    messageEl.innerHTML = "Registration Successful";
    messagecontainerEl.classList.remove("fail")
    messagecontainerEl.classList.add("pass");
    return true
  }
};
// check the password
const checkPassword = () => {
  let password1Value = passwords[0].value;
  let password2Value = passwords[1].value;

  if (password1Value === password2Value) {
    messagecontainerEl.classList.remove("fail");
    messagecontainerEl.classList.add("pass");

    passwordMatch = true

    passwords.forEach((password) => {
      passwordMatch === true
        ? password.classList.remove("fail") + password.classList.add("pass")
        : ""
    })

    return true

  } else {
    messageEl.innerHTML = "Password mis match found";
    messagecontainerEl.classList.remove("pass");
    messagecontainerEl.classList.add("fail");

    // messageEl.innerHTML = "something is wrong";
    // messagecontainerEl.classList.add("fail")


    passwords.forEach((password) => {
      password.classList.remove("pass");
      password.classList.add("fail");
    });

    return false
  }
};

// Store the form data
const storeFormData = ()=> {
  storedData = {
    fullName : formEl.name.value,
    phNumber :  formEl.phone.value,
    emailAddress : formEl.email.value,
    websiteURL : formEl.website.value,
    password: formEl.password1.value

  }
  console.log(storedData)

}

// Lets start processing the form data

const processFormData = (event) => {
  event.preventDefault();

  let check1 = false;
  let check2 =  false;

  // Form validation
  check1 = validateForm();
  //  check password match
  if (check1 === true){
    let check2  =  checkPassword();
  }
  // Now the data is ready,please save it
  
  if(check1 === true && check2 === true){
    storeFormData()
}else{
  console.log("something is wrong")
}
  

};

// Event listeners
formEl.addEventListener("submit", processFormData);

// // test
console.log("Password with out a selector", formEl.password1.value)
