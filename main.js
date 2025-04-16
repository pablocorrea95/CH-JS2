// let menu;
// let resultado = [];

// const comprarEntradas = (artista) => {
//   alert(`Has seleccionado a ${artista}. Procediendo a la compra de entradas.`);
//   let cantidadTickets = prompt("Ingrese la cantidad de tickets que desee:");
//   let formaPago = prompt("¿Cómo abonará?");
//   let cuotas = prompt("Cantidad de cuotas:");
//   resultado.push(cantidadTickets, formaPago, cuotas);
//   alert(
//     `Resumen de la compra: \nArtista: ${artista} \nNúmero de tickets: ${cantidadTickets} \nForma de pago: ${formaPago} \nCuotas: ${cuotas}`
//   );
// };

// do {
//   menu = prompt(
//     "Elija su artista por favor: \n1) Tool \n2) Babasonicos \n3) Panam \n4) Almendra \n5) Salir"
//   );

//   switch (menu) {
//     case "1":
//       comprarEntradas("Tool");
//       break;
//     case "2":
//       comprarEntradas("Babasonicos");
//       break;
//     case "3":
//       comprarEntradas("Panam");
//       break;
//     case "4":
//       comprarEntradas("Almendra");
//       break;
//     case "5":
//       alert("¡¡¡Gracias por su compra!!! :DD");
//       break;
//     default:
//       alert("Opción no válida. Por favor, elija una opción del 1 al 5.");
//   }
// } while (menu !== "5");

const productos = [
    {
        id: 1,
        nombre: "Muzzarella",
        precio: 25000
    },

    {
        id: 2,
        nombre: "Fugazzetta",
        precio: 32000
    },

    {
        id: 3,
        nombre: "Roquefort",
        precio: 30000
    },

    {
        id: 4,
        nombre: "Napolitana",
        precio: 28000
    },

    {
        id: 5,
        nombre: "Rúcula",
        precio: 27000
    }

]

const cartProducts = []
let productsContainer = document.getElementById("products-container")

function renderProductos (productsArray){
    productsArray.forEach((producto) => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${producto.nombre}</h3>
                          <p>${producto.precio}</p>
                          <button class="productoAgregar" id=${producto.id}>Agregar</button>`;
        productsContainer.appendChild(card)
    })
    addToCartButton()
}
renderProductos(productos)

function addToCartButton(){
    addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach (button =>{
        button.onclick = (e) =>{
            const productId = e.currentTarge.id
            const selectedProduct = productos.find (producto => producto.id == productId)
            cartProducts.push(selectedProduct)
            console.log(cartProducts)

            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
        }
    })
}