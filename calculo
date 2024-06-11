jQuery(document).ready(function($) {
    // Función para calcular el precio total en tiempo real
    function calcularPrecioTotal() {
        var precioTotal = 0;

        // Iterar sobre cada producto seleccionado
        $('#proveedor_productos option:selected').each(function() {
            var productoID = $(this).val();
            var cantidad = $('#cantidad_' + productoID).val();
            var precioBase = parseFloat($(this).data('precio-base'));

            // Calcular el precio total del producto (precio base * cantidad)
            var precioProducto = precioBase * cantidad;

            // Sumar al precio total
            precioTotal += precioProducto;
        });

        // Mostrar el precio total en algún lugar de la página
        $('#precio-total').text(precioTotal.toFixed(2)); // Ajustar el número de decimales según sea necesario
    }

    // Vincular la función de cálculo de precio total al cambio en los selectores de productos y campos de cantidad
    $('#proveedor_productos, [id^="cantidad_"]').on('change', function() {
        calcularPrecioTotal();
    });

    // Calcular el precio total al cargar la página
    calcularPrecioTotal();
});
