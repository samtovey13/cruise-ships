const addButton = document.querySelector("#add-button");
const portInput = document.querySelector("#add-port-input")
let userPorts = [];

function addUserPort() {
  const errorMessage = document.querySelector("#no-port-error");
  if (!portInput.value) {
    return (errorMessage.style.display = "inline");
  }
  errorMessage.style.display = "none";
  let port = new Port(portInput.value);
  userPorts.push(port);
  portInput.value = "";
  let portElement = document.createElement("li");
  portElement.className = "user-port-li";
  portElement.id = `user-port-${userPorts.indexOf(port)}`;
  portElement.innerHTML = port.name;
  document.querySelector("#port-list").appendChild(portElement);
}

addButton.addEventListener("click", addUserPort);

portInput.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      addButton.click();
    }
  });

document.querySelector("#start-button").addEventListener("click", () => {
  const itinerary = new Itinerary(userPorts);
  const ship = new Ship(itinerary);
  const controller = new Controller(ship);
  controller.renderPorts(ship.itinerary.ports);
  controller.renderShip();
  controller.renderPortTracker();
});
