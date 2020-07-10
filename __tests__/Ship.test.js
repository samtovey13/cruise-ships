const { Ship } = require('../src/Ship.js');
const { Port } = require('../src/Port.js');
const { Itinerary} = require('../src/Itinerary.js');

const portDover = new Port ('Dover');
const portCalais = new Port ('Calais');
const ports = [portDover, portCalais];
const itinerary = new Itinerary(ports);
const ship = new Ship(itinerary);
const ship2 = new Ship(itinerary);


describe('Ship', () => {
    it('creates a new object', () => {
        expect(new Ship(itinerary)).toBeInstanceOf(Object);
    });
    it('has an itinerary containing an array of ports', () => {
        expect(ship.itinerary).toEqual(itinerary);
    });
    it('has a previous port property set to null', () => {
        expect(ship.previousPort).toBe(null);
    });
    it('has a current port property set to idex[0] of the ports array', () => {
        expect(ship.currentPort).toEqual(portDover);
    });
    it('can set sail, updating previous port and setting current port to null', () => {
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toEqual(portDover);
    });
    it('can dock at a port', () => {
        ship.dock();
        expect(ship.currentPort).toEqual(portCalais);
    });
    it('throws an error if setSail is called but the ship is already sailing', () => {
        ship2.setSail();
        expect(() => ship2.setSail()).toThrowError('Already at sea. Dock to arrive at the next port.');
    });
    it('throws an error if dock() is called while the ship is already docked', () => {
        ship2.dock();
        expect(() => ship2.dock()).toThrowError('Already docked! Set sail to reach the next port.');
    });
    it('throws an error if setSail is called but the ship has reached the end of the itinerary', () => {
        expect(() => ship2.setSail()).toThrowError('End of itinerary reached');
    });

});