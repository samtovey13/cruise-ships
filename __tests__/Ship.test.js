const { Ship } = require('../src/Ship.js');
const { Port } = require('../src/Port.js');

const portDover = new Port ('Dover');
const portCalais = new Port ('Calais');
const ship = new Ship (portDover);


describe('Ship', () => {
    it('creates a new object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('has a current port', () => {
        ship.currentPort = portDover;
        expect(ship.currentPort.name).toBe('Dover');
    });
    it('can set sail', () => {
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    });
    it('can dock at a port', () => {
        expect(ship.currentPort).toBeFalsy();
        ship.dock(portCalais);
        expect(ship.currentPort).toEqual(portCalais);
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