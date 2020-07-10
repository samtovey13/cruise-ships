function Ship(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.portsVisited = 1;// the starting port is included in the count
    this.currentPort.addShip(this); //constructor just defines what happens when an instance is created, so can add functions here too.
};     

Ship.prototype.setSail = function() {
    if (this.portsVisited >= this.itinerary.ports.length) {
        throw new Error('End of itinerary reached');
    }
    if (!this.currentPort) {
        throw new Error('Already at sea. Dock to arrive at the next port.')
    }
    this.previousPort = this.currentPort;
    this.currentPort = null;
    this.previousPort.removeShip(this);
};

Ship.prototype.dock = function() {
    if (this.currentPort) {
        throw new Error('Already docked! Set sail to reach the next port.');
    }
    this.currentPort = this.itinerary.ports[this.portsVisited];
    this.currentPort.addShip(this);
    this.portsVisited += 1;
};


module.exports = {
    Ship
};