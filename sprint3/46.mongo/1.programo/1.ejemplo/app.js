const mongoose = require('mongoose');
// dotenv
// mongo remoto
mongoose.connect('mongodb+srv://acamica:$123456$@cluster0.1hjgq.mongodb.net/acamica ', {useNewUrlParser: true, useUnifiedTopology: true});

// mongo local :: se especifica el puerto
//mongoose.connect('mongodb://localhost:27017/test ');

const Cat = mongoose.model('Cat', { name: String }); // collecion

const kitty = new Cat({ name: 'michu' });

kitty.save()
    .then(() => console.log('meow'))
    .catch(e => console.log(e))
