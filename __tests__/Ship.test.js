const { Ship } = require('../src/Ship.js');
const { Port } = require('../src/Port.js');
const { Itinerary} = require('../src/Itinerary.js');

const portDover = new Port ('Dover');
const portCalais = new Port ('Calais');
const ports = [portDover, portCalais];
const itinerary = new Itinerary(ports);
const ship = new Ship(itinerary);


describe('Ship', () => {
    it('creates a new object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('has an itinerary containing an array of ports', () => {
        expect(ship.itinerary).toEqual(itinerary);
    });
    it('has a previous port property set to null', () => {
        expect(ship.previousPort).toBe(null);
    });
    it('has a current port property set to null', () => {
        expect(ship.currentPort).toBe(null);
    });
    it('can dock at a port', () => {
        ship.dock();
        expect(ship.currentPort).toEqual(portDover);
    });
    it('can set sail, updating previous port and setting current port to null', () => {
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toEqual(portDover);
    });
    it('can follow an itinerary with two Ports', () => {
        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toEqual(portDover);
        ship.dock();
        expect(ship.currentPort).toEqual(portCalais);
        expect(ship.previousPort).toEqual(portDover);
        ship.setSail();
        expect(ship.previous)
    });
});