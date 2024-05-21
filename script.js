document.addEventListener('DOMContentLoaded', function() {
    function crearPrecioElemento(crypto) {
        const precioElemento = document.createElement('div');
        precioElemento.classList.add('EPM0004-precio');

        const icono = document.createElement('img');
        icono.src = `img/icon_crypto/${crypto.symbol}.png`;
        icono.alt = `${crypto.symbol} icono`;

        precioElemento.appendChild(icono);
        precioElemento.innerHTML += `${crypto.symbol}: $${crypto.usd_price}`;

        return precioElemento;
    }

    const preciosContainer = document.getElementById('EPM0004-prices-container');

    // Repetir las criptomonedas 4 veces
    let totalWidth = 0;
    for (let i = 0; i < 4; i++) {
        cryptocurrencies.forEach(crypto => {
            const precioElemento = crearPrecioElemento(crypto);
            preciosContainer.appendChild(precioElemento);
            totalWidth += precioElemento.offsetWidth;
        });
    }

    // Establecer el ancho del contenedor para que coincida con el total de los elementos
    preciosContainer.style.width = `${totalWidth}px`;

    // Mover los precios de manera uniforme
    let desplazamiento = 0;
    function moverPrecios() {
        desplazamiento--;
        preciosContainer.style.transform = `translateX(${desplazamiento}px)`;

        // Reiniciar el desplazamiento al principio cuando los elementos originales salen completamente del contenedor
        if (Math.abs(desplazamiento) >= totalWidth / 4) {
            desplazamiento = 0;
        }

        // Continuar la animación
        requestAnimationFrame(moverPrecios);
    }

    // Iniciar el movimiento de los precios
    moverPrecios();
});
