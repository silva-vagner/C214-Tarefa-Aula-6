const mongoose = require('mongoose');

const uri = `mongodb+srv://admin:admin@cluster0.eo0p6zw.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const MovieSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: {
        type: String,
        unique: true,
    },
    ano: String,
    tipo: String,
    possui_oscar: Boolean
});

const MovieModel = mongoose.model('Movie', MovieSchema);

module.exports = {
    MovieModel,
};