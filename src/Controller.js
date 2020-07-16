(function exportController() {
  function Controller(ship) {
    this.initialiseSea();
    this.ship = ship;
    document.querySelector("#sailbutton").addEventListener("click", () => {
      this.setSail();
    });
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

  Controller.prototype.renderShip = function renderShip() {
    const ship = this.ship;
    const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort); //think I need to change this to counter
    const portElement = document.querySelector(
      `[data-port-index='${shipPortIndex}']`
    );
    const shipElement = document.querySelector("#ship");
    shipElement.style.top = `${portElement.offsetTop + 32}px`; //offsetTop gets the distance from the top, which is the 96px margin we gave it
    shipElement.style.left = `${portElement.offsetLeft - 32}px`; //we are giving the ship the same position as the port
  };

  Controller.prototype.setSail = function setSail() {
    const sailButton = document.querySelector("#sailbutton");
    sailButton.disabled = "true";
    const ship = this.ship;
    const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    const nextPortIndex = currentPortIndex + 1;
    const nextPortElement = document.querySelector(
      `[data-port-index='${nextPortIndex}']`
    );

    if (!nextPortElement) {
      this.renderMessage("You're at the end of your cruise!");
      return;
    }
    this.renderMessage("Now departing " + ship.currentPort.name);
    const shipElement = document.querySelector("#ship");
    const sailInterval = setInterval(() => {
      const shipLeft = parseInt(shipElement.style.left, 10);
      if (shipLeft === nextPortElement.offsetLeft - 32) {
        ship.dock();
        sailButton.removeAttribute("disabled");
        this.renderMessage("Now arrived at " + ship.currentPort.name);
        this.renderPortTracker();
        clearInterval(sailInterval);
      }
      shipElement.style.left = `${shipLeft + 1}px`;
    }, 10);
  };

  Controller.prototype.renderMessage = function renderMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.id = "message";
    messageElement.innerHTML = message;
    const messageDiv = document.querySelector("#message-div");
    messageDiv.style.backgroundColor = "white";
    messageDiv.appendChild(messageElement);
    setTimeout(() => {
      messageDiv.removeChild(messageElement);
      messageDiv.style.backgroundColor = "black";
    }, 3000);
  };

  Controller.prototype.renderPortTracker = function renderPortTracker() {
    const portTrackerElement = document.querySelector("#port-tracker");
    portTrackerElement.innerHTML = "";
    const ship = this.ship;
    const currentPort = ship.currentPort;
    const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    let nextPort;
    if (currentPortIndex + 1 >= ship.itinerary.ports.length) {
      nextPort = null;
    } else {
      nextPort = ship.itinerary.ports[currentPortIndex + 1];
    }

    const currentPortDiv = document.createElement("div");
    currentPortDiv.id = "current-port-div";
    currentPortDiv.innerHTML = `Current Port: '${currentPort.name}'`;
    portTrackerElement.appendChild(currentPortDiv);

    const nextPortDiv = document.createElement("div");
    nextPortDiv.id = "next-port-div";
    if (nextPort === null) {
      nextPortDiv.innerHTML = "You have reached your final destination.";
      portTrackerElement.appendChild(nextPortDiv);
    } else {
      nextPortDiv.innerHTML = `Next Port: '${nextPort.name}'`;
      portTrackerElement.appendChild(nextPortDiv);
    }
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
