function Port(name) {
    this.name = name;
    this.ships = [];
};

Port.prototype.addShip = function(ship) {
    this.ships.push(ship);
}
Port.prototype.removeShip = function(ship) {
    let index = this.ships.findIndex(item => item === ship);
    this.ships.splice(index, 1);      //THIS RETURNS THE SPLICE NOT THE ORIGINAL ARR
}

module.exports = {
    Port
};