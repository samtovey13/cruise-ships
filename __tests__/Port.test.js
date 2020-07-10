const { Port } = require('../src/Port.js');

let portCalais;
let ship;
let ship2;

beforeEach(() => {
    portCalais = new Port ('Calais');
    ship = jest.fn();        // don't have to import Ship constructor
    ship2 = jest.fn();       // here we are only testing Port
});

describe('Port', () => {
    describe('Port constructor function', () => {
        it('creates a new object', () => {
            expect(new Port()).toBeInstanceOf(Object);
        });
        it('has a name property', () => {
            expect(portCalais.name).toBe('Calais');
        });
        it('has a ships property that is an array', () => {
            expect(portCalais.ships).toBeInstanceOf(Object);
        });
    });
    describe('Port methods', () => {
        it('adds a ship to the ship array', () => {
            portCalais.addShip(ship);
            expect(portCalais.ships).toContain(ship);
        });
        it('removes a ship from the ship array', () => {
            portCalais.addShip(ship);
            portCalais.addShip(ship2);
            expect(portCalais.ships).toContain(ship);
            expect(portCalais.ships).toContain(ship2);
            portCalais.removeShip(ship);
            expect(portCalais.ships).not.toContain(ship);
            expect(portCalais.ships).toContain(ship2);
        });
    });
});