var resp="SI";
const categorias=["Lácteos", "Carnes", "Frutas", "Verduras", "Panadería", "Abarrotes", "Botanas", "Bebidas"];
const productos=["Leche", "Huevo", "Frijoles", "Azúcar", "Pan dulce", "Pan bolillo", "Papas fritas", "Refresco", "Pollo"];
const medidas=["Litro", "Kilo", "Kilo", "Kilo", "Pieza", "Pieza", "Bolsa", "Botella", "Kilo"];
const precios=[21.00, 46.00, 20.00, 36.00, 13.50, 5.50, 20.99, 15., 89.00];
let total=0, subtotal=0
let prodCompra=[];
let cantProdCompra=[];
let subtotalCompra=[];
let contProd=0;
let respProd="SI";

while(resp.toUpperCase()=="SI"){
    total=0, subtotal=0
    prodCompra=[];
    cantProdCompra=[];
    subtotalCompra=[];
    contProd=0;
    respProd="SI";

    while(respProd.toUpperCase()=="SI"){
        imprimeProd();
        //Formulario para solicitar los productos a comprar
        document.write("<h2>Compra de productos</h2>"+
        "<label for='producto'>Selecciona el producto: </label>"+
        "<select name='producto' id='producto'>");
        for(let i=0; i<productos.length; i++){
            document.write("<option value='"+i+"'>"+productos[i]+"</option>");
        }
        document.write("</select>");
        document.write("<br><label for='cantidad'>Cantidad: </label>"+
        "<input type='number' name='cantidad' id='cantidad'>"+
        "<br><input type='button' value='Agregar a la compra' onclick='"+
        "registroCompra(document.getElementById(&quot;producto&quot;).value,"+
        "document.getElementById(&quot;cantidad&quot;).value);'>");
        contProd++;
        respProd=prompt("¿Deseas registrar otro producto? SI/NO: ");
    }
    
    imprimeNota();
    document.write("<h2>Total de la compra: $"+total+"</h2>");
    resp=prompt("Deseas registrar otra compra?");
 }

 function registroCompra(idProd, cantProd){
    prodCompra[prodCompra.length]=idProd;
    cantProdCompra[cantProdCompra.length]=cantProd;
    subtotalCompra[subtotalCompra.length]=cantProd*precios[idProd];
    total+=cantProd*precios[idProd];
}
//Función para imprimir la nota de compra
function imprimeNota(){
    document.write("<h2>Nota de compra</h2>");
    document.write("<table border='1'><tr>"+
    "<th>Producto</th>"+
    "<th>Cantidad</th>"+
    "<th>Precio unitario</th>"+
    "<th>Subtotal</th>"+
    "</tr>");
    for(let i=0; i<prodCompra.length; i++){
        document.write("<tr>"+
        "<td>"+productos[prodCompra[i]]+"</td>"+
        "<td>"+cantProdCompra[i]+"</td>"+
        "<td>"+precios[prodCompra[i]]+"</td>"+
        "<td>"+subtotalCompra[i]+"</td>"+
        "</tr>");
    }
    document.write("</table>");
}
//Función para imprimir listado de productos
function imprimeProd(){
    for(let i=0; i<productos.length; i++){
        document.write((i+1)+".- "+productos[i]+" -- $"+precios[i]+"<br>");
    }
}