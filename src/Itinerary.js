(function exportItinerary() {
  function Itinerary(ports) {
    // ports is an array of Ports
    this.ports = ports;
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Itinerary;
  } else {
    window.Itinerary = Itinerary;
  }
})();
