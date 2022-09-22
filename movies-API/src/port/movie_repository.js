const { MovieModel } = require('../infrastructure/database');

const MovieRepository = {
    async create(data) {
        try {
            const model = new MovieModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                ano: data.ano, tipo: data.tipo, possui_oscar: data.possui_oscar
            };
            const options = { new: true };
            const filter = { nome: data.nome };
            const result = await MovieModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const result = await MovieModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async listByName(data) {
        try {
            console.log('teste')
            const result = await MovieModel.findOne({ nome: data.nome }).exec();
            return result;
        } catch (e) {
            console.log(e)
            return e;
        }
    },

    async delete(data) {
        try {
            const result = await MovieModel.deleteOne({ nome: data.nome }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },
};

module.exports = MovieRepository;