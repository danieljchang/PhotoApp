const checkUsername = (username) => {
    /**
     * ^ --> start of a string
     * \D --> anything not a digit
     * \w  --> anything that is an alphanumeric character
     * {3,} --> 3 or more characters with no upper limit
     */
    let usernameChecker = /^\D\w{3,}$/
    return usernameChecker.test(username)
}

const checkPassword = (password) => {
    /**
     * minumum 8 characters
     * one letter one number and one special character
     */
    let passwordCheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordCheck.test(password);
}

const checkEmail = (email) => {
    let emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailCheck.test(email);
}

const registerValidation = (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    let password1 = req.body.password1;
    let email = req.body.email;
    if(!(checkUsername(username))){
        req.flash('error', "Invalid Username");
        req.session.save(err => {
            res.redirect("/registration");
        })
    }else if(!checkPassword(password) ){
        req.flash('error', "Invalid password, must be 8 characters, 1 letter, 1 number, and 1 special character");
        req.session.save(err => {
            res.redirect("/registration");
        })
    }else if(password !== password1){
        req.flash('error', "Passwords do not match");
        req.session.save(err => {
            res.redirect("/registration");
        })
    }else if(!(checkEmail(email))){
        req.flash('error', "Invalid email");
        req.session.save(err => {
            res.redirect("/registration");
        })
    }
    else{
        next();
    }
}
const loginValidation = (req, res, next) => {
    if (req.body.username.length == 0){
        req.flash('error', "Username is required to log in");
        req.session.save(err => {
            res.redirect("/login");
        })
    }else if (req.body.password.length == 0){
        req.flash('error', "Password is required to log in");
        req.session.save(err => {
            res.redirect("/login");
        })
    }else {
        next();
    }
}


// The validation was constantly giving me undefined for description and title.

// const postValidation =  (req, res, next) => {
//     if (req.body.description == undefined || req.body.title == undefined){
//         req.flash('error', "Post must have a title and description");
//         req.session.save(err => {
//             res.redirect("/");
//         })
//     }else{
//         next();
//     }
// }

module.exports = {registerValidation, loginValidation}