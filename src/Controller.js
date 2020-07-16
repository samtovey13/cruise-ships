(function exportController() {
  function Controller() {
    this.initialiseSea();
  }

  Controller.prototype.initialiseSea = function initialiseSea() {
    const backgrounds = ["./images/water0.png", "./images/water1.png"];
    let backgroundIndex = 0;
    window.setInterval(() => {
      document.querySelector("#viewport").style.backgroundImage = `url('${
        backgrounds[backgroundIndex % backgrounds.length]
      }')`;
      backgroundIndex += 1;
    }, 1000);
  };

  Controller.prototype.renderPorts = function renderPorts(ports) {
    const portsElement = document.querySelector("#ports");
    portsElement.style.width = "0px";
    ports.forEach((port, index) => {
      const newPortElement = document.createElement("div");
      newPortElement.className = "port";
      newPortElement.dataset.portName = port.name;
      newPortElement.dataset.portIndex = index;
      portsElement.appendChild(newPortElement);
      const portsElementWidth = parseInt(portsElement.style.width, 10); //parse integer in base 10
      portsElement.style.width = `${portsElementWidth + 256}px`; //add 256px to ports element width
    });
  };

  Controller.prototype.renderShip = function renderShip(ship) {
    const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort); //think I need to change this to counter
    const portElement = document.querySelector(
      `[data-port-index='${shipPortIndex}']`
    );
    const shipElement = document.querySelector("#ship");
    shipElement.style.top = `${portElement.offsetTop + 32}px`; //offsetTop gets the distance from the top, which is the 96px margin we gave it
    shipElement.style.left = `${portElement.offsetLeft - 32}px`; //we are giving the ship the same position as the port
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
