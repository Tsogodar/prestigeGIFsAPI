const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = {
    url: () => {
        return 'mongodb://localhost:27017/zpo';
    },

    connect: () => {
        return mongoose.connect(module.exports.url()).then(() => {
            console.log('MongoDB connected with local instance');
        }).catch(err => console.log(err));
    }
};