const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://acamica:$123456$@cluster0.1hjgq.mongodb.net/acamica ', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String }); // collecion

const kitty = new Cat({ name: 'michu' });

kitty.save()
    .then(() => console.log('meow'))
    .catch(e => console.log(e))
