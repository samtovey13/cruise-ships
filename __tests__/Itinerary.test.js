const { Itinerary } = require('../src/Itinerary');
const { Port, portDover, portCalais } = require('../src/Port');

const ports = [portDover, portCalais];
const itinerary = new Itinerary(ports);

describe('Itinerary', () => {
    it('is an object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
    it('has a ports property', () => {
        expect(itinerary.ports).toEqual(ports);
    });
});