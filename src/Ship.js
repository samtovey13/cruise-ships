function Ship(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = null;
    this.previousPort = null;
    this.count = 0;
};

Ship.prototype.setSail = function() {
    this.previousPort = this.currentPort;
    this.currentPort = null;
};

Ship.prototype.dock = function() {
    this.currentPort = this.itinerary.ports[this.count];
    this.count += 1;
};


module.exports = {
    Ship
};