let productos = [
    {
        nombre: "remera",
        color: "verde",
        precioU: 1000,
        precioM: 900,
        stock: true
    },
    {
        nombre: "short",
        color: "verde",
        precioU: 1200,
        precioM: 1000,
        stock: true
    },
    {
        nombre: "hoddie",
        color: "verde",
        precioU: 1700,
        precioM: 1400,
        stock: true
    },
    {
        nombre: "medias",
        color: "verde",
        precioU: 600,
        precioM: 500,
        stock: true
    },
    {
        nombre: "gorra",
        color: "verde",
        precioU: 400,
        precioM: 350,
        stock: true
    },
    {
        nombre: "zapatillas",
        color: "rojo",
        precioU: 1100,
        precioM: 900,
        stock: true
    }
]

var iva = numero => numero * 1.21;

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
    
    compra(unidades, precioUnitario, precioMayorista);
    display(unidades, nombre, precio);
}

