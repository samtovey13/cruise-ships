const { Itinerary } = require('../src/Itinerary');

const ports = jest.fn();
const itinerary = new Itinerary(ports);

describe('Itinerary', () => {
    it('is an object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
    it('has a ports property', () => {
        expect(itinerary.ports).toEqual(ports);
    });
});