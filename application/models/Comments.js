var db = require("../conf/database");
let CommentModel = {};

CommentModel.create = (userId, postId, comment) => {
    let baseSQL = `INSERT INTO comments (comment, fk_authorid, fk_postid) VALUES (?, ?, ?);`;
    return db
        .query(baseSQL, [comment, userId, postId])
        .then(([results, fields]) => {
            if (results && results.affectedRows) {
                return Promise.resolve(results.insertId);
            } else {
                return Promise.resolve(-1);
            }
        })
        .catch((err) => Promise.reject(err));
    }


CommentModel.getCommentsForPost = (postId) => {
    let baseSQL = `SELECT u.username, c.comment, c.created, c.id 
    FROM comments c
    JOIN users u
    on u.id=fk_authorid
    WHERE fk_postid=?
    ORDER BY c.created DESC`;
    return db.query(baseSQL, [postId])
        .then(([results, fields]) => {
            return Promise.resolve(results);
        }).catch(err => Promise.reject(err));
};



module.exports = CommentModel;