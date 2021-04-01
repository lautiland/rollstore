let carrito = [];

// AÑADO LOS OBJETOS DEL ARRAY "productos" A LA PÁGINA
let i = 0;
for (const producto of productos) {
    let row = document.querySelector("#productos")
    let item = document.createElement("div");
    item.classList.add("card", "col-lg-4", "col-md-6", "col-sm-12")
    row.appendChild(item)
    item.innerHTML = `
    <img src="${producto.img}">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">$${producto.precioU}</p>
    <button class="agregar" data-numero="${i}">Añadir al carrito</button><br>
    `;
    i += 1;
}

// CREA LA TABLA CON LOS PRODUCTOS AGREGADOS AL CARRITO Y AÑADE IVA AL SUB TOTAL
function cargarCarrito(){
    let tabla = "";
    let suma = 0;
    let total = "";
    let i = 0;

    for (const articulo of carrito) {
        i += 1;
        tabla += `  <tr>
                    <th scope="row">${i}</th>
                    <td>${articulo.nombre}</td>
                    <td></td>
                    <td>$${articulo.precioU}</td>
                    </tr>`
        suma += Number(articulo.precioU)
    }

    total =`<tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td>Subtotal: $${suma}</td>
            </tr>
            <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td>IVA: $${(suma*0.21).toFixed(2)}</td>
            </tr>
            <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td>Total: $${(suma*1.21).toFixed(2)}</td>
            </tr>`
    let tbody = document.querySelector("#carrito")
    tbody.innerHTML = tabla + total;
}

if(JSON.parse(sessionStorage.getItem("carrito")) != null){
    carrito = JSON.parse(sessionStorage.getItem("carrito", carrito))
    cargarCarrito()
}

// EVENTO QUE SE ENCARGA DE AGREGAR UN PRODUCTO AL CARRITO CUANDO LE DAMOS AL BOTON "Agregar al carrito"
window.addEventListener("DOMContentLoaded", function(){
    let item = document.querySelectorAll(".agregar")
    for(let articulo of item){
        articulo.addEventListener("click", function(){
            let numero = Number(this.dataset.numero);
            productos.find(function(){
                for(let i = 0; i<productos.length; i+=1){
                    if( numero == i){
                        return(carrito.push(productos[i]));
                        
                    }
                }
            })
            sessionStorage.setItem("carrito", JSON.stringify(carrito))
            cargarCarrito()
        })
    }
})