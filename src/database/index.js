const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://dev:devduplas@cluster0.otylu.mongodb.net/mvpDuplasDB?retryWrites=true&w=majority',
);

mongoose.Promise = global.Promise;

module.exports = mongoose;