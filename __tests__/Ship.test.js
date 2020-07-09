const { Ship, Port } = require('../src/Ship.js');

const portDover = new Port ('Dover');
const portCalais = new Port ('Calais');
const ship = new Ship (portDover);


describe('Ship', () => {
    it('creates a new object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
        ship.startingPort = portDover;
        expect(ship.startingPort.name).toBe('Dover');
    });
    it('can set sail', () => {
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
    });
    it('can dock at a port', () => {
        expect(ship.startingPort).toBeFalsy();
        ship.dock(portCalais);
        expect(ship.startingPort).toEqual(portCalais);
    });
//     it('has property passengers', () => {

//     });


});

describe('Port', () => {
    it('creates a new object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('has a name property', () => {
        expect(portCalais.name).toBe('Calais');
    });
});

// describe('ports', () => {
//     it('is a property of Ship', () => {

//     });
//     it('is an array of all ports where the ship has docked', () => {

//     });
//     it('can return the first and last port where the ship docked', () => {

//     });
// });

// describe('setSail()', () => {
//     it('sets the ship`s current location to "at sea"', () => {

//     });
//     it('returns a message if the ship is already at sea', () => {

//     })
// });

// describe('dock(port)', () => {
//     it('changes the ship`s current location to the name of the port', () => {

//     });
//     it('adds the latest port to the ports array', () => {

//     });
//     it('throws an error if called while the ship is already docked', () => {

//     });
// });

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