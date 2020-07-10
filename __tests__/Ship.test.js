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
    
//     it('has property passengers', () => {

//     });


});


// describe('boardPassengers', () => {
//     it('adds boarded passengers to the passengers property', () => {

//     });
//     it('does not allow passengers to exceed the ship`s capacity', () => {

//     });
//     it('throws an error if too many passengers try to board', () => {

//     });
//     it('throws an error if ship is not at a port', () => {

//     });
// });

// describe('disembarkPassengers', () => {
//     it('removes passengers from the passengers property', () => {

//     });
//     it('does not allow passenger numbers to fall below 0', () => {

//     });
//     it('throws an error if ship is not at a port', () => {

//     });
// });

// describe('isAtPort', () => {
//     it('returns true if the ship is docked', () => {

//     });
//     it('returns false if the ship is at sea', () => {

//     });
// });

// describe('currentLocation', () => {
//     it('returns the name of a port if ship is docked', () => {

//     });
//     it('returns "at sea" if the ship is sailing', () => {

//     });
// });