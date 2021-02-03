const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/argentour',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;