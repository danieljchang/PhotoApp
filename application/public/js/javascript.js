
// const form = document.getElementById('registration-form');
// const usernameForm =document.getElementById('username');
// const emailForm = document.getElementById('email');
// const passwordForm = document.getElementById('password');
// const passwordForm1 = document.getElementById('password1');
// const age = document.getElementById('age');
// const TOS = document.getElementById('TOS');

// document.addEventListener('submit', e => {
//     e.preventDefault();
//     check();
// });

// const passwordCheck = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[/*-+!@#$^&]).+$");
// const usernameCheck = new RegExp(/\d/);
// const emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// function check(){
//     const usernameValue = usernameForm.value;
//     const passwordValue = passwordForm.value;
//     const password1Value = passwordForm1.value;
//     const emailValue = emailForm.value;

//     if (usernameValue.length < 3){
//         setErrorFor(username, "Username must be at least 3 or more characters");
    
        
//     }else if (usernameCheck.test(usernameValue.charAt(0))){
//         setErrorFor(username, "First character must be a letter");
        
//     }else {
//         setSuccessFor(username);
//     }
    
//     if (emailCheck.test(emailValue)){
//         setSuccessFor(email);
        
//     }else {
//         setErrorFor(email, "Email is not valid");
//     }


//     if (passwordValue.length < 8){
//         setErrorFor(password, "Password must be 8 characters long");
//     }
//     else if (!(passwordCheck.test(passwordValue))){
//         setSuccessFor(password);
//     }else{
//         setErrorFor(password, "Must include 1 uppercase letter, 1 lowercase letter, and 1 of the following characters (/*-+!@#$^&).");
//     }

//     if (password1Value !== passwordValue){
//         setErrorFor(password1, "Passwords do not match");
//     }else{
//         setSuccessFor(password1);
//     }
// }

// function setErrorFor(input, message){
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('small');
//     small.innerText = message;
//     formControl.className = 'form-control error';
// }

// function setSuccessFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'form-control success';
// }
