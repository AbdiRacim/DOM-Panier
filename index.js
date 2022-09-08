//heart avec js:

// let heart = document.getElementById('heart');
// heart.addEventListener('click',()=>{
//     if(heart.classList.contains('red')){
//         heart.classList.remove('red');
//         heart.classList.add('white');
//         heart.src = 'whiteHeart.png';
//     }else{
//         heart.classList.remove('white');
//         heart.classList.add('red');
//         heart.src = 'redHeart.png';
//     }
// });

//augmenter et diminuer avec js:

// var cart = document.querySelector('.cart-totals');

// cart.addEventListener('click', function(ev) {

//     var tgt = ev.target;
//     if (tgt.matches('input[type="button"]')) {

//     var input = document.getElementById(tgt.dataset.for);
//     var currentValue = +input.value;
//     var minValue = +input.min;
    
    
//     if (tgt.value === '+') {
//         input.value = currentValue + 1;
//     }
//     else if (currentValue > minValue) {
//         input.value = currentValue - 1;
//     }
    
//     }
// });


var removeCartItemButtons = document.getElementsByClassName('removebuton')
console.log(removeCartItemButtons)
for (let i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event){
        var buttonCliked = event.target 
        buttonCliked.parentElement.parentElement.remove()
        updateCartTotal()
    })
    
}
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('panierrow')[0]
    var cartRows = cartItemContainer.getElementsByClassName('row1')
    var total =0
    for (let i = 0; i < cartRows.length; i++) {
        var cartRow =cartRows[i]
        var priceElement =cartRow.getElementsByClassName('pricerow')[0]
        var quanityElement = cartRow.getElementsByClassName('cart-totals')[0]
        var price =parseFloat(priceElement.innerText.replace('','Da'))
        var quantity = quanityElement.value
        total =total + (price * quantity)
    }
    // total = Math.round(total * 100) /100
    document.getElementsByClassName('total')[0].innerText = total  + 'Da'
}







// if (document.readyState == 'loading') {
//     document.addEventListener('DOMcontentLoaded', ready )
// } else {
//     ready()
//     }


// function ready() {
//     var removeCartRow = document.getElementsByClassName('removebuton')
//     for (let i = 0; i < removeCartRow.length; i++) {
//         var button= removeCartRow[i];
//         button.addEventListener('click', removeCartItems)
//     }
// }

// var quantityInputs = document.getElementById('cart-totals')
// for (var i = 0; i < quantityInputs.length; i++) {
//     var input = quanityInputs[i]
//     input.addEventListener('change',quantityInputs)
    
// }

// function removeCartItems(event) {
//     var buttonCliked = event.target
//     buttonCliked.parentElement.parentElement.remove()
//     updateCartTotal()
// }

// function quantitychanged(event) {
//     var input =event.target
//     if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1
//     }
//     updateCartTotal()
// }

// function updateCartTotal() {
//     var cartItemContainer = document.getElementsByClassName('panierrow')[0]
//     var cartRows = cartItemContainer.getElementsByClassName('row1')
//     var total =0
//     for (let i = 0; i < cartRows.length; i++) {
//         var cartRow =cartRows[i]
//         var priceElement =cartRow.getElementsByClassName('pricerow')[0]
//         var quanityElement = cartRow.getElementsByClassName('cart-totals')[0]
//         var price =parseFloat(priceElement.innerText.replace('','Da'))
//         var quantity = quanityElement.value
//         total =total + (price * quantity)
//     }
//     total = Math.round(total * 100) /100
//     document.getElementsByClassName('total')[0].innerText = total  + 'Da'
// }












/*
//exemple d'un panier

window.onload = function () {
    // Variables
    var baseDeDatos = [
        {
            photo:{
                src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
                width: "240",
                height: "160"
            },
            id: 1,
            nombre: 'Jean Mom',
            precio: 1399,    
        },
        { 
            photo:{
                src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
                width: "240",
                height: "160"
            },
            id: 2,
            nombre: 'Pant Ren',
            precio: 990
        },
        {
            photo:{
                src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
                width: "240",
                height: "160"
            },
            id: 3,
            nombre: 'Buzo Largo Hailey',
            precio: 948
        },
        {
            photo:{
                src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
                width: "240",
                height: "160"
            },
            id: 4,
            nombre: 'Cycle Short',
            precio: 550
        },
        {
            photo:{
                src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
                width: "240",
                height: "160"
            },
            id: 5,
            nombre: 'Top Cellie',
            precio: 590
        },
        {
            photo:{
                src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
                width: "240",
                height: "160"
            },
            id: 6,
            nombre: 'Jacket Denim Ray',
            precio: 2890
        },
        {
            photo:{
                src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
                width: "240",
                height: "160"
            },
            id: 7,
            nombre: 'Cinto Vice',
            precio: 499
        },
        {
            photo:{
                src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
                width: "240",
                height: "160"
            },
            id: 8,
            nombre: 'Top Caro',
            precio: 499
        },
        {
            photo:{
                src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
                width: "240",
                height: "160"
            },
            id: 9,
            nombre: 'Bra Top Regan',
            precio: 590
        },
        {
            photo:{
                src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
                width: "240",
                height: "160"
            },
            id: 10,
            nombre: 'Sweater Polly',
            precio: 1399
        },
        {
            photo:{
                src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
                width: "240",
                height: "160"
            },
            id: 11,
            nombre: 'Camisa June',
            precio: 799
        },
        {
            photo:{
                src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
                width: "240",
                height: "160"
            },
            id: 12,
            nombre: 'Pant Amy',
            precio: 1299
        },
        {
            photo:{
                src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
                width: "240",
                height: "160"
            },
            id: 13,
            nombre: 'Top Tai',
            precio: 648
        },
        {
            photo:{
            src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
            width: "240",
            height: "160"
        },
            id: 14,
            nombre: 'Tapado Judy',
            precio: 3290
        },
        {
            photo:{
            src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
            width: "240",
            height: "160"
        },
            id: 15,
            nombre: 'Mini Corderoy Lou',
            precio: 1090
        }

    ]
    
    var $items = document.querySelector('#items');
    var carrito = [];
    var total = 0;
    var $carrito = document.querySelector('#carrito');
    var $total = document.querySelector('#total');
    // Funciones
    function renderItems () {
        for (var info of baseDeDatos) {
            // Estructura
            var miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            var miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            var miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info['nombre'];
            // Precio
            var miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = '$' +info['precio'];
            // Boton 
            var miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info['id']);
            miNodoBoton.addEventListener('click', anyadirCarrito);
            // heart
            var image = document.createElement('img')
            image.classList.add('card','col-sm4')
            // Insertamos
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            $items.appendChild(miNodo);
        }
    }
    function anyadirCarrito () {
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(this.getAttribute('marcador'))
        // Calculo el total
        calcularTotal();
        // Renderizamos el carrito 
        renderizarCarrito();

    }

    function renderizarCarrito () {
        // Vaciamos todo el html
        $carrito.textContent = '';
        // Generamos los Nodos a partir de carrito
        carrito.forEach(function (item, indice) {
            // Obtenemos el item que necesitamos de la variable base de datos
            var miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            // Creamos el nodo del item del carrito
            var miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right');
            miNodo.textContent = `${miItem[0]['nombre']} - $${miItem[0]['precio']}`;
            // Boton de borrar
            var miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.setAttribute('posicion', indice);
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            $carrito.appendChild(miNodo);
        })
    }

    function borrarItemCarrito () {
        // Obtenemos la posicion que hay en el boton pulsado
        var posicion = this.getAttribute('posicion');
        // Borramos la posicion que nos interesa
        carrito.splice(posicion, 1);
        // volvemos a renderizar
        renderizarCarrito();
        // Calculamos de nuevo el precio
        calcularTotal();
    }

    function calcularTotal () {
        // Limpiamos precio anterior
        total = 0;
        // Recorremos el array del carrito
        for (var item of carrito) {
            // De cada elemento obtenemos su precio
            var miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            total = total + miItem[0]['precio'];
        }
        // Formateamos el total para que solo tenga dos decimales
        var totalDosDecimales = total.toFixed(2);
        // Renderizamos el precio en el HTML
        $total.textContent = totalDosDecimales;
    }
    // Eventos

    // Inicio
    renderItems();
} 

*/
//                                                 html du panier:
// <!--exemple d'un panier-->
// <div class="container">
//     <div class="row">
//         <!-- Elementos generados a partir del JSON -->
//         <main id="items" class="col-sm-8 row flexy"></main>
//         <!-- Carrito -->
//         <aside class="col-sm-4">
//             <h2>Carrito</h2>
//             <!-- Elementos del carrito -->
//             <ul id="carrito"  class="list-group "></ul>
//             <hr>
//             <!-- Precio total -->
//             <p class="text-right">Total: <span id="total"></span>&dollar;</p>
//         </aside>
//     </div>
// </div>

