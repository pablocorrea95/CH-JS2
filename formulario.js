const formulario = document.getElementById("formulario")
const formularioCompleto = []

formulario.onsubmit = (e) => {
  const nombreApellido = document.getElementById("nombreApellido").innerText
  const celular = document.getElementById("celular").innerText
  const direccion = document.getElementById("direccion").innerText
  const pedidoInfo = {
    nombreApellido,
    celular,
    direccion,
  }
}

function addToCartButton() {
  addButton = document.querySelectorAll(".productoAgregar")
  addButton.forEach((button) => {
    button.onclick = (e) => {
      formularioCompleto.push(selectedProduct)
      console.log(formularioCompleto)
      localStorage.setItem("formularioCompleto", JSON.stringify(cartProducts))
    }
  })
}