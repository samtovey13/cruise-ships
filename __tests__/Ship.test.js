const { Ship } = require('../src/Ship.js');
const { Port } = require('../src/Port.js');
const { Itinerary} = require('../src/Itinerary.js');

let portDover;
let portCalais;
let itinerary;
let ship;

beforeEach(() => {
    portDover = new Port ('Dover');
    portCalais = new Port ('Calais');
    itinerary = new Itinerary([portDover, portCalais]);
    ship = new Ship(itinerary);
});

describe('Ship', () => {
    it('creates a new object', () => {
        expect(new Ship(itinerary)).toBeInstanceOf(Object);
    });
    it('gets added to port on instantiation', () => {
        expect(portDover.ships).toContainEqual(ship);
    });
    it('has an itinerary containing an array of ports', () => {
        expect(ship.itinerary).toEqual(itinerary);
    });
    it('has a previous port property set to null', () => {
        expect(ship.previousPort).toBe(null);
    });
    it('has a current port property', () => {
        expect(ship.currentPort).toEqual(portDover);
    });
    it('can set sail', () => {
        const newShip = new Ship(itinerary);
        expect(portDover.ships).toHaveLength(2);
        expect(portDover.ships).toContainEqual(ship);
        expect(portDover.ships).toContainEqual(newShip);
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toEqual(portDover);
        expect(portDover.ships).toHaveLength(1);
        expect(portDover.ships).toContainEqual(newShip);
        expect(portDover.ships).not.toContainEqual(ship);
    });
    it('can dock at a port', () => {
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toEqual(portCalais);
        expect(portCalais.ships).toContainEqual(ship);
    });
    it('throws an error if setSail is called but the ship is already sailing', () => {
        ship.setSail();
        expect(() => ship.setSail()).toThrowError('Already at sea. Dock to arrive at the next port.');
    });
    it('throws an error if dock() is called while the ship is already docked', () => {
        expect(() => ship.dock()).toThrowError('Already docked! Set sail to reach the next port.');
    });
    it('throws an error if setSail is called but the ship has reached the end of the itinerary', () => {
        ship.setSail();
        ship.dock();
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });

});