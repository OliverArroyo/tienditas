<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compra de Productos</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
    </style>
</head>
<body>
    <h1>Compra de Productos</h1>
    <div id="producto-listado"></div>
    <div id="formulario-compra"></div>
    <div id="nota-compra"></div>
    <div id="total-compra"></div>

    <script>
        let resp = "SI";
        const categorias = ["Lácteos", "Carnes", "Frutas", "Verduras", "Panadería", "Abarrotes", "Botanas", "Bebidas"];
        const productos = ["Leche", "Huevo", "Frijoles", "Azúcar", "Pan dulce", "Pan bolillo", "Papas fritas", "Refresco", "Pollo"];
        const medidas = ["Litro", "Kilo", "Kilo", "Kilo", "Pieza", "Pieza", "Bolsa", "Botella", "Kilo"];
        const precios = [21.00, 46.00, 20.00, 36.00, 13.50, 5.50, 20.99, 15.00, 89.00];
        let total = 0, subtotal = 0;
        let prodCompra = [];
        let cantProdCompra = [];
        let subtotalCompra = [];
        let contProd = 0;
        let respProd = "SI";

        function registroCompra(idProd, cantProd) {
            prodCompra.push(idProd);
            cantProdCompra.push(cantProd);
            subtotalCompra.push(cantProd * precios[idProd]);
            total += cantProd * precios[idProd];
            imprimeNota();
            document.getElementById('total-compra').innerHTML = "<h2>Total de la compra: $" + total.toFixed(2) + "</h2>";
        }

        function imprimeNota() {
            let notaHtml = "<h2>Nota de compra</h2><table><tr><th>Producto</th><th>Cantidad</th><th>Precio unitario</th><th>Subtotal</th></tr>";
            for (let i = 0; i < prodCompra.length; i++) {
                notaHtml += "<tr><td>" + productos[prodCompra[i]] + "</td><td>" + cantProdCompra[i] + "</td><td>" + precios[prodCompra[i]].toFixed(2) + "</td><td>" + subtotalCompra[i].toFixed(2) + "</td></tr>";
            }
            notaHtml += "</table>";
            document.getElementById('nota-compra').innerHTML = notaHtml;
        }

        function imprimeProd() {
            let prodHtml = "<h2>Listado de productos</h2><ul>";
            for (let i = 0; i < productos.length; i++) {
                prodHtml += "<li>" + (i + 1) + ". " + productos[i] + " -- $" + precios[i].toFixed(2) + "</li>";
            }
            prodHtml += "</ul>";
            document.getElementById('producto-listado').innerHTML = prodHtml;
        }

        function mostrarFormularioCompra() {
            let formHtml = "<h2>Compra de productos</h2>" +
                "<label for='producto'>Selecciona el producto: </label>" +
                "<select name='producto' id='producto'>";
            for (let i = 0; i < productos.length; i++) {
                formHtml += "<option value='" + i + "'>" + productos[i] + "</option>";
            }
            formHtml += "</select><br>" +
                "<label for='cantidad'>Cantidad: </label>" +
                "<input type='number' name='cantidad' id='cantidad' min='1'><br>" +
                "<button onclick='agregarProducto()'>Agregar a la compra</button>";
            document.getElementById('formulario-compra').innerHTML = formHtml;
        }

        function agregarProducto() {
            let productoId = document.getElementById('producto').value;
            let cantidad = document.getElementById('cantidad').value;
            registroCompra(productoId, cantidad);
        }

        function iniciarCompra() {
            total = 0, subtotal = 0;
            prodCompra = [];
            cantProdCompra = [];
            subtotalCompra = [];
            contProd = 0;
            respProd = "SI";
            imprimeProd();
            mostrarFormularioCompra();
        }

        iniciarCompra();

        while (resp.toUpperCase() == "SI") {
            respProd = prompt("¿Deseas registrar otro producto? SI/NO: ");
            if (respProd.toUpperCase() != "SI") {
                break;
            }
            let productoId = prompt("Introduce el número del producto que deseas comprar (1-9): ") - 1;
            let cantidad = prompt("Introduce la cantidad que deseas comprar: ");
            registroCompra(productoId, cantidad);
        }

        document.getElementById('total-compra').innerHTML = "<h2>Total de la compra: $" + total.toFixed(2) + "</h2>";
        resp = prompt("¿Deseas registrar otra compra? SI/NO: ");
        if (resp.toUpperCase() == "SI") {
            iniciarCompra();
        }
    </script>
</body>
</html>
