const { Port } = require('../src/Port.js');

const portDover = new Port('Dover');
const portCalais = new Port ('Calais');
const ship = {name: 'ship'};        // don't have to import Ship constructor
const ship2 = {name: 'ship2'};       // here we are only testing Port

describe('Port', () => {
    it('creates a new object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('has a name property', () => {
        expect(portCalais.name).toBe('Calais');
    });
    it('has a ships property', () => {
        expect(portCalais.ships).toBeInstanceOf(Object);
    });
    it('has method addShip', () => {
        portCalais.addShip(ship);
        expect(portCalais.ships).toContain(ship);
    });
    it('has method removeShip', () => {
        portCalais.addShip(ship2);
        expect(portCalais.ships).toEqual([ship, ship2])
        portCalais.removeShip(ship);
        expect(portCalais.ships).toEqual([ship2]);
        portDover.ships.push(ship);
        portDover.ships.push(ship2);
        portDover.removeShip(ship);
        expect(portDover.ships).not.toContainEqual(ship);
    });
});