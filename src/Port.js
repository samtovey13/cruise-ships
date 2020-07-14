(function exportPort() {
  function Port(name) {
    this.name = name;
    this.ships = [];
  }

  Port.prototype.addShip = function (ship) {
    this.ships.push(ship);
  };
  Port.prototype.removeShip = function (ship) {
    let index = this.ships.findIndex((item) => item === ship);
    this.ships.splice(index, 1); //THIS RETURNS THE SPLICE NOT THE ORIGINAL ARR
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
})();
