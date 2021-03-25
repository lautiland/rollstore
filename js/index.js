let productos = [
    {
        nombre: "Set Rayo de Escarcha",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/907/020/products/1024_accesorios_abracadabra-juguetes-dados-transp-_agus_1431-6716d8a0561d2dbb7e15936346939925-640-0.jpg",
        color: "Verde",
        precioU: 650,
        precioM: 600,
        stock: true
    },
    {
        nombre: "Set Bola de Fuego",
        color: "Rojo",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/907/020/products/1024_accesorios_abracadabra-juguetes-dados-transp-rojo_1451-49637647233999189d15936346940040-640-0.jpg",
        precioU: 675,
        precioM: 625,
        stock: true
    },
    {
        nombre: "Set Lluvia de Diamantes",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/907/020/products/1024_accesorios_abracadabra-juguetes-dados-transp-_turquesa_4421-175206094fc4d4073715936346940260-640-0.jpg",
        color: "Celeste",
        precioU: 640,
        precioM: 1400,
        stock: true
    },
    {
        nombre: "Set Nigromancia Oscura",
        img: "https://chollosrol.es/wp-content/uploads/2020/01/10-d-10-negros.jpg",
        color: "Negro",
        precioU: 690,
        precioM: 670,
        stock: true
    },
    {
        nombre: "Set Hidromiel",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/907/020/products/1024_accesorios_abracadabra-juguetes-dados-transp-_marron_9421-15f574c3acd1fa44ae15936346938841-1024-1024.jpg",
        color: "Marron",
        precioU: 590,
        precioM: 580,
        stock: true
    },
    {
        nombre: "Set Oro Silvano",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/907/020/products/1024_accesorios_abracadabra-juguetes-dados-transp-_verde_1421-37e4068ff32b482e7c15936346940616-640-0.jpg",
        color: "Verdes",
        precioU: 665,
        precioM: 650,
        stock: true
    }
]

for (const producto of productos) {
    let row = document.querySelector("#productos")
    let item = document.createElement("div");
    item.classList.add("card", "col-lg-4", "col-md-6", "col-sm-12")
    row.appendChild(item)
    item.innerHTML = `
                            <img src="${producto.img}">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">$${producto.precioU}</p>
                            <a href="#" class="btn btn-primary col-6 align-self-end">Agregar al carrito</a><br>
                            `;
}


/* var iva = numero => numero * 1.21;

do {
    var nombre = prompt("¿Qué producto quiere adquirir?");
    nombre = nombre.toLowerCase();
}while(nombre =="" || nombre == 0)



for(let i=0; i < productos.length; i +=1){
    
    let stock = productos[i].stock;
    
    if(productos[i].nombre == nombre && stock){
        var precioUnitario = productos[i].precioU;
        var precioMayorista = productos[i].precioM;
        break;
    }
}

if(precioUnitario == undefined || precioMayorista == undefined) {
    alert(`El producto ${nombre} no se encuentra en stock o no está disponible`);
}else {
    do {
        var unidades = Number(prompt("¿Cuantas unidaes quiere comprar?"));
    }while(unidades =="" || unidades == 0)
    
    function compra(cantidad, precioU, precioM) {
    
        if(cantidad < 2){
            precioTotal = precioU;
        }else {
            precioTotal = precioM * cantidad;
        }
        precio = iva(precioTotal);
    }
    
    function display(unidades, nombre, precio) {
        document.write(`<h2>El costo de ${unidades} ${nombre}/s es de $${precio} incluido el IVA.</h2>`);
    }
}

compra(unidades, precioUnitario, precioMayorista);
display(unidades, nombre, precio);
 */