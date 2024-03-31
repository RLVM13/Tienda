async function todosProductos() {
    await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json()) // Tranforma datos a JSON para tratar en JS {}
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                pintarProductos(data, i);
            }
        });
    return;
}
todosProductos();

function filtroCategoria(){

}

function pintarProductos(objeto, indice){
    let nombre = `<a href="#">${objeto[indice].title}</a>`;
    nombre += `<div class="ratting">`;
    for (let j = 0; j < Math.round(`${objeto[indice].rating.rate}`); j++) {
        nombre += `<i class="fa fa-star"></i>`;
    }
    nombre += `</div>`;
    document.getElementById("name" + indice).innerHTML = nombre;

    let datos = `<a href = "productos.html">`;
    datos += `<img src = "${objeto[indice].image}" /></a>`;
    datos += `<div class="product-action"><a href="#"><i class="fa fa-cart-plus"></i></a>`;
    datos += `<a href = "#"><i class="fa fa-heart"></i></a>`;
    datos += `<a href = "#"><i class="fa fa-search"></i></a></div>`;
    document.getElementById("producto" + indice).innerHTML = datos;

    let precio = `<h3>${objeto[indice].price}<span>€</span></h3>`;
    precio += `<a class="btn" href = "" ><i class="fa fa-shopping-cart"></i>Comprar</a>`;
    document.getElementById("precio" + indice).innerHTML = precio;
}
