jQuery(document).ready(function($) {
        $('#proveedor_productos').select2();

        // Función para actualizar la lista de cantidades cuando se cambian los productos seleccionados
        $('#proveedor_productos').on('change', function() {
            var listaProductos = $('#lista-productos');
            listaProductos.empty();

            $(this).find('option:selected').each(function() {
                var productoID = $(this).val();
                var productoNombre = $(this).text();

                // Obtener la cantidad actual del producto seleccionado
                var cantidad = $('#cantidad_' + productoID).val();

                // Si la cantidad no está definida, establecerla en 1 por defecto
                if (!cantidad) {
                    cantidad = 1;
                }

                listaProductos.append('<li>' + productoNombre + ' <input type="number" id="cantidad_' + productoID + '" name="cantidad_' + productoID + '" value="' + cantidad + '" min="1"></li>');
            });
        });

        // Función para actualizar la lista de cantidades al cargar la página
        $('#proveedor_productos').trigger('change');
    });
