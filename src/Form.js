(function exportForm() {
function Form(form) {
  this.itinerary = { ports:[] };
  document.querySelector("#add-button").addEventListener("click", () => {
    const newPort = {};
    this.itinerary.ports.append(this.getFormValue());
    console.log(this.itinerary.ports);
  });
}

Form.prototype.getFormValue = function getFormValue() {
  const addInput = document.querySelector('#add-port-input');
  const portName = addInput.value;
  return portName;
}

 

const addButton = document.querySelector('#add-button');


  if (typeof module !== "undefined" && module.exports) {
    module.exports = Form;
  } else {
    window.Form = Form;
  }
})();