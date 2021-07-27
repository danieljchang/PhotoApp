
// const form = document.getElementById('registration-form');
// const username =document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password1 = document.getElementById('password1');
// const age = document.getElementById('age');
// const TOS = document.getElementById('TOS');

// document.addEventListener('submit', e => {
//     e.preventDefault();
//     check();
//     console.log("working");
// });

// const passwordCheck = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[/*-+!@#$^&]).+$");
// const usernameCheck = new RegExp(/\d/);
// const emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// function check(){
//     const usernameValue = username.value;
//     const passwordValue = password.value;
//     const password1Value = password1.value;
//     const emailValue = email.value;

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
// let users = [];
// const addUser = (ev)=>{
//     ev.preventDefault();
//     let user = {
//         username: document.getElementById('username').value,
//         password: document.getElementById('password').value,
//         email: document.getElementById('email'),
//         age: document.getElementById('age')
//     }
//     users.push(user);
    
// }

// document.getElementById('btn').addEventListener('click', addUser);
