const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://acamica:$123456$@cluster0.1hjgq.mongodb.net/restaurante', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
module.exports = mongoose;
