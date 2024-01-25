let eventName = "keybenefits";

let json = {
  titulo: "",
  descripcion: "",
};

const container = document.querySelector(".gtag-container");

const elementos = container.querySelectorAll(".col-md-3");

elementos.forEach((e) => {
  e.addEventListener("click", () => {
    json.titulo = e.getElementsByTagName("h3")[0].innerText;
    json.descripcion = e.getElementsByTagName("span")[1].innerText;
    eventoGoogle(json);
  });
});

function eventoGoogle(jsonEntrada) {
  gtag("event", eventName, jsonEntrada);
}
