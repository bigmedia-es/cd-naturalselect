jQuery(document).ready(function($) {
    $('#proveedor_productos').select2();

    $('#proveedor_productos').change(function() {
        var listaProductos = $('#lista-productos');
        listaProductos.empty();

        $(this).find('option:selected').each(function() {
            var productoNombre = $(this).text();
            var productoID = $(this).val();

            listaProductos.append('<li>' + productoNombre + ' <input type="number" name="cantidad_' + productoID + '" value="1" min="1"></li>');
        });
    });
});
