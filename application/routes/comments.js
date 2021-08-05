var express = require("express");
var router = express.Router();
const { successPrint, errorPrint } = require("../helpers/debug/debugprinters");
const { create } = require("../models/Comments");
var isLoggedIn = require('../middleware/routeprotectors').userIsLoggedIn;

// Some what of a validation. Problem with the message being flashed, but it works.
router.post('/create', isLoggedIn,(req, res, next) => {
    let {comment, postId} = req.body;
    let username = req.session.username;
    let userId = req.session.userId;

    create(userId, postId, comment)
    .then((wasSuccessful) => {
        if (wasSuccessful != -1){
            successPrint(`comment was created for ${username}`);
            res.json({
                code: 1,
                status: "success",
                message: "comment created",
                comment: comment,
                username: username
            })
        }else{
            errorPrint('comment was not saved');
            res.json({
                code: -1,
                status: "danger",
                message: "comment was not created"
            }).catch((err) => next(err));
        }
    })
    
})


module.exports = router;