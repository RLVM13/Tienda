//ESCRIBIMOS LAS PREGUNTAS MODIFICANDO EL DOM
//output
/* {
"id": 1,
"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
"price": 109.95,
"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
"rating": {
    "rate": 3.9,
    "count": 120
} 

Categorias:
[
"electronics",
"jewelery",
"men's clothing",
"women's clothing"
]

1-4 hombre (4)
5-8 joyeria(4)
9-14 electronica(6)
15-20 mujer(6)
*/

async function CategoriaElectronica() {
    await fetch("https://fakestoreapi.com/products/category/electronics")
        .then((res) => res.json()) // Tranforma datos a JSON para tratar en JS {}
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                if (i==0){
                    principalElectronica(data, i);
                }
                relacionadosElectronica(data, i);
            }
        });
    return;
}
CategoriaElectronica();

function principalElectronica(objeto, indice) {
    let datos1 = `<img src = "${objeto[indice].image}" /></a>`;
    document.getElementById("electronica" + indice).innerHTML = datos1;

    let datos2 = `<div class="title"><h2>"${objeto[indice].title}"</h2></div>`;
    datos2 += `<div class="ratting">`;
    for (let j = 0; j < Math.round(`${objeto[indice].rating.rate}`); j++) {
        datos2 += `<i class="fa fa-star"></i>`;
    }
    datos2 += `</div>`;
    datos2 += `<div class="price">`;
    datos2 += `<h4>Precio:</h4>`;
    let precioAnterior = parseInt(`${objeto[indice].price}`) + 49;
    datos2 += `<p>"${objeto[indice].price}" €<span>` + precioAnterior + `</span></p></div>`;
    datos2 += `<div class="quantity">`;
    datos2 += `<h4>Cantidad:</h4>`;
    datos2 += `<div class="qty">`;
    datos2 += `<button class="btn-minus"><i class="fa fa-minus"></i></button>`;
    datos2 += `<input type="text" value="1">`;
    datos2 += `<button class="btn-plus"><i class="fa fa-plus"></i></button></div></div>`;
    datos2 += `<div class="p-size">`;
    datos2 += `<h4>Talla:</h4>`;
    datos2 += `<div class="btn-group btn-group-sm">`;
    datos2 += `<button type="button" class="btn">S</button>`;
    datos2 += `<button type="button" class="btn">M</button>`;
    datos2 += `<button type="button" class="btn">L</button>`;
    datos2 += `<button type="button" class="btn">XL</button></div></div>`;
    datos2 += `<div class="p-color">`;
    datos2 += `<h4>Color:</h4>`;
    datos2 += `<div class="btn-group btn-group-sm">`;
    datos2 += `<button type="button" class="btn">Blanco</button>`;
    datos2 += `<button type="button" class="btn">Negro</button>`;
    datos2 += `<button type="button" class="btn">Azul</button></div></div>`;
    datos2 += `<div class="action">`;
    datos2 += `<a class="btn" href="#"><i class="fa fa-shopping-cart"></i>Añadir al Carro</a>`;
    datos2 += `<a class="btn" href="#"><i class="fa fa-shopping-bag"></i>Comprar</a></div>`;
    document.getElementById("electronicas" + indice).innerHTML = datos2;

    let datos3 = `<h4>Descripción de Artículo</h4>`;
    datos3 += `<p>"${objeto[indice].description}"</p></div>`;
    document.getElementById("electronicass" + indice).innerHTML = datos3;
}

function relacionadosElectronica(objeto, indice) {
    let name = `<a href="#">${objeto[indice].title}</a>`;
    name += `<div class="ratting">`;
    for (let j = 0; j < Math.round(`${objeto[indice].rating.rate}`); j++) {
        name += `<i class="fa fa-star"></i>`;
    }
    name += `</div>`;
    document.getElementById("name" + indice).innerHTML = name;

    let datos = `<a href = "product-detail.html">`;
    datos += `<img src = "${objeto[indice].image}" /></a>`;
    datos += `<div class="product-action"><a href="Man.html"><i class="fa fa-cart-plus"></i></a>`;
    datos += `<a href = "#"><i class="fa fa-heart"></i></a>`;
    datos += `<a href = "#"><i class="fa fa-search"></i></a></div>`;
    document.getElementById("producto" + indice).innerHTML = datos;

    let precio = `<h3>${objeto[indice].price}<span>€</span></h3>`;
    precio += `<a class="btn" href = "" ><i class="fa fa-shopping-cart"></i>Comprar</a>`;
    document.getElementById("precio" + indice).innerHTML = precio;
}