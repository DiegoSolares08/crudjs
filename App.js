//Eventos DOM (Document Object Model)
document
.getElementById("producto-formulario")
.addEventListener("submit", function (evento){
//evaluar el comportamiento del formulario

evento.preventDefault(); //preventDefault para guardar sin refrescar en la pagina

//Obtener los valores del formulario
const nombre = document.getElementById("nombre").value,
      precio = document.getElementById("precio").value,
      año = document.getElementById("año").value;

//Crear un nuevo objeto (Producto)
const producto = new Producto (nombre,precio,año);

//Crear un nuevo usuario de interfaz
const ui = new UI();

//Input de validacion de usuario
if(nombre==="" || precio==="" || año===""){
    ui.showMessage("Por favor insertar datos");
}

//Guardar producto
ui.addProducto(producto);
ui.resetForm();
});

document.getElementById("producto-lista").addEventListener("click", (e)=>{
    const ui = new UI();
    ui.deleteProducto(e.target);
    e.preventDefault();
});

// Clase Producto

class Producto{
    constructor(nombre,precio,año){ //constructor nos ayuda a tener una estructura en una clase para llamar muchas variables 
        this.nombre= nombre;
        this.precio= precio;
        this.año= año;
    }
}

// Clase Usuario Interfaz

class UI{
    addProducto(producto){
        const productoLista = document.getElementById("producto-lista");
        const elemento = document.createElement("div");
        elemento.innerHTML = ` 
        <div class="alert alert-dismissible alert-danger">
            <div class="tarjeta-body">
                <strong> Producto </strong> : ${producto.nombre} - 
                <strong> Precio </strong> : ${producto.precio} - 
                <strong> Año </strong> : ${producto.año} - 
                <a href="#" class="btn btn-alert" name="eliminar">Eliminar</a>
            </div>
        </div>
        `; // Comillas con ALt+96
        
        productoLista.appendChild(elemento); //appendChild -> Subobjeto/objeto hijo
    }

//resetear datos de formulario
resetForm()
{
document.getElementById("producto-formulario").reset();
}

deleteProducto(elemento)
{
    if(elemento.nombre === "eliminar")
    {
        this.showMessage("El Producto se ha Eliminado");
        elemento.parentElement.parentElement.remove();
       
    }
}

showMessage(mensaje, cssClass)
{
  const div = document.createElement("div");
  div.className = `alert alert-${cssClass}`;
  div.appendChild(document.createTextNode(mensaje));



//Mostrar en el DOM
const contenido = document.querySelector(".container")
const app = document.querySelector("#App")
    //Insertar mensaje en el interfaz usuario
    container.insertBefore(div, app);

    //Remover el mensaje luego de tres segundos

    setTimeout(function ()
    {
        document.querySelector(".alert").remove();
    }, 3000);

}
}
