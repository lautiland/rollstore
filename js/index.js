// FUNCIONALIDAD DEL MENÚ STICKY
$(window).on(`scroll` ,function(){
    let $scrollTop = 0
    $scrollTop = $(window).scrollTop();
    if ($scrollTop === 0){
        $(`.header-inner`).removeClass(`navbar-scroll`);
    }else{
        $(`.header-inner`).addClass(`navbar-scroll`);
    }
})


// AÑADO LOS OBJETOS DEL ARRAY "productos" A LA PÁGINA
let i = 0;
for (const producto of productos) {
    $(`.card`).hide();
    if(producto.stock){
        $(`#productos`).append(`<div class="card col-lg-4 col-md-6 col-sm-12">
        <img src="${producto.img}">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">$${producto.precioU}</p>
        <button class="agregar" data-numero="${i}">Añadir al carrito</button><br>
        </div>`);
    }else {
        $(`#productos`).append(`<div class="card col-lg-4 col-md-6 col-sm-12">
        <img src="${producto.img}">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">$${producto.precioU}</p>
        <button class="noHay">No hay stock</button><br>
        </div>`);
    }
    i += 1;
}

// CREA LA TABLA CON LOS PRODUCTOS AGREGADOS AL CARRITO Y AÑADE IVA AL SUB TOTAL
let carrito = [];
function cargarCarrito(){
    $(`#carrito`).empty();
    let suma = 0;
    let i = 0;
    
    for (const articulo of carrito) {
        i += 1;
        $(`#carrito`).append(`  <tr>
        <th scope="row">${i}</th>
        <td>${articulo.nombre}</td>
        <td></td>
        <td>$${articulo.precioU}</td>
        </tr>`);
        suma += Number(articulo.precioU)
    }
    $(`#carrito`).append(`<tr>
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
    </tr>`);
}

if(JSON.parse(sessionStorage.getItem("carrito")) != null){
    carrito = JSON.parse(sessionStorage.getItem("carrito", carrito))
    cargarCarrito()
}

// EVENTO QUE SE ENCARGA DE AGREGAR UN PRODUCTO AL CARRITO CUANDO LE DAMOS AL BOTON "Agregar al carrito"
$(()=>{
    let item = $(`.agregar`);
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

// ANIMACIÓNES
$(`.card`).slideDown("slow");
