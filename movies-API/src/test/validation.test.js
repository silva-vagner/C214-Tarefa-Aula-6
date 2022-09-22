const Constants = require('../utils/Constants');
const Validation = require('../utils/Validation');

it('Caso valido create', () => {
    const result = Validation.create({
        nome: "Nome filme",
        ano: "1999",
        tipo: "terror",
        possui_oscar: false
    });
    expect(result).toEqual(undefined);
});

it('Caso valido get all', () => {
    const result = Validation.getAll();
    expect(result).toEqual(undefined);
});

it('Caso valido update', () => {
    const result = Validation.update({
        "nome": "Parasita"
    });
    console.log(result)
    expect(result).toEqual(Constants.ErrorValidation.name);
});

it('Caso Invalido - sem o parametro possui_oscar', () => {
    const result = Validation.create({
        ano: "1999",
        tipo: "terror"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso Invalido - item nao encontrado', () => {
    const result = Validation.listByName({
        nome: "nome invalido"
    });
    expect(result).toEqual(Constants.ErrorNotFound.name);
});

it('Caso Invalido - valor numerico ao inves de string', () => {
    const result = Validation.update({
        nome: 123
    });
    expect(result).toEqual(Constants.ErrorValidation.name);
});