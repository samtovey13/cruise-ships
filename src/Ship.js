function Ship(startingPort) {
    this.startingPort = startingPort;
};

Ship.prototype.setSail = function() {
    this.startingPort = undefined;
};

Ship.prototype.dock = function(port) {
    this.startingPort = port;
}

function Port(name) {
    this.name = name;
};

module.exports = {
    Ship, 
    Port
};