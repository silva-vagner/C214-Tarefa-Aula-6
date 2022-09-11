const create = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    nome: {
        presence: {
            allowEmpty: true,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: true,
        },
        type: 'string',
    },
    tipo: {
        presence: {
            allowEmpty: true,
        },
        type: 'string',
    },
    possui_oscar: {
        presence: {
            allowEmpty: true,
        },
        type: 'boolean',
    },
};

const get = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};