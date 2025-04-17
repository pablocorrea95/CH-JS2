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
                          <p>$ ${producto.precio}</p>
                          <button class="productoAgregar" id=${producto.id}>Añadir</button>`;
        productsContainer.appendChild(card)
    })
    addToCartButton()
}

renderProductos(productos)

function addToCartButton(){
    addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach (button =>{
        button.onclick = (e) =>{
            const productId = e.currentTarget.id
            const selectedProduct = productos.find (producto => producto.id == productId)
            cartProducts.push(selectedProduct)
            console.log(cartProducts)
            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
        }
    })
}