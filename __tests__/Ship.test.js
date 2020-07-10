const { Ship } = require('../src/Ship.js');

let portDover;
let portCalais;
let itinerary;
let ship;

beforeEach(() => { 
    const port = {          //making a mock template for Port
        removeShip: jest.fn(),
        addShip: jest.fn()
    };
    portDover = {
        ...port,
        name: 'Dover',      //only adding the properties needed
        ships: []
    };
    portCalais = {
        ...port,
        name: 'Calais',
        ships: []
    };
    itinerary = {       //stub of Itinerary with same interface
        ports: [portDover, portCalais]
    };
    ship = new Ship(itinerary);
});

describe('Ship', () => {

    describe('Ship constructor function', () => {
        it('creates a new object', () => {
            expect(new Ship(itinerary)).toBeInstanceOf(Object);
        });
        it('gets added to port on instantiation', () => {
            expect(portDover.addShip).toHaveBeenCalledWith(ship);
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
    });

    describe('setSail', () => {
        beforeEach(() => {

        });
        it('can set sail', () => {
            ship.setSail();
            expect(ship.currentPort).toBeFalsy();
            expect(ship.previousPort).toEqual(portDover);
            expect(portDover.removeShip).toHaveBeenCalledWith(ship);
        });
        it('throws an error if setSail is called but the ship is already sailing', () => {
            ship.setSail();
            expect(() => ship.setSail()).toThrowError('Already at sea. Dock to arrive at the next port.');
        });
        it('throws an error if setSail is called but the ship has reached the end of the itinerary', () => {
            ship.setSail();
            ship.dock();
            expect(() => ship.setSail()).toThrowError('End of itinerary reached');
        });
    });

    describe('dock', () => {
        it('can dock at a port', () => {
            ship.setSail();
            ship.dock();
            expect(ship.currentPort).toEqual(portCalais);
            expect(portCalais.addShip).toHaveBeenCalledWith(ship);
        });
        
        it('throws an error if dock() is called while the ship is already docked', () => {
            expect(() => ship.dock()).toThrowError('Already docked! Set sail to reach the next port.');
        });
    });
    
});