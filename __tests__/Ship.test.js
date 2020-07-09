// USER STORY:
// As a cruise ship captain,
// So I can get passengers aboard a ship,
// I want a ship to have a starting port.

const Ship = require('../src/Ship.js');

describe('Ship', () => {
    it('creates a new object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
        const ship = new Ship ('Dover');
        expect(ship.startingPort).toBe('Dover');
    });
//     it('has property passengers', () => {

//     });

//     it('has property capacity', () => {

//     })
//     it('has property captain', () => {

//     });
});

// describe('ports', () => {
//     it('is a property of Ship', () => {

//     });
//     it('is an array of all ports where the ship has docked', () => {

//     });
//     it('can return the first and last port where the ship docked', () => {

//     });
// });

// describe('sail()', () => {
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
// })

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
// })