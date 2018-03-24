const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    login: String,
    password: String,
});

const User = mongoose.model('user', UserSchema);

module.exports = {

    User: User,

    checkIfExists: (res,login) => {
        User.findOne({
            login: login
        }).then(user => {
            if (user) {
                res.send(true);
            }
            else {
                res.send('null');
            }
    })
},

    register:(res,newUser)=>{
        console.log(newUser)
        User.findOne({
            login: newUser.login
        }).then(user => {
            if (user) {
                res.send('null');
            }
            else {
                new User(newUser).save((err) => {
                    res.send(true);
                })
            }
        })
    }
};