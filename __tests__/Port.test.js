const { Port } = require('../src/Port.js');

const portCalais = new Port ('Calais');

describe('Port', () => {
    it('creates a new object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('has a name property', () => {
        expect(portCalais.name).toBe('Calais');
    });
});