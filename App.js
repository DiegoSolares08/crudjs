//Eventos DOM (Document Object Model)
document
.getElementById("formulario-producto")
.addEventListener("submit", function (evento){
//evaluar el comportamiento del formulario

evento.preventDefault(); //preventDefault para guardar sin refrescar en la pagina

//Obtener los valores del formulario
const nombre = document.getElementById("nombre").value,
      precio = document.getElementById("precio").value,
      año = document.getElementById("nombre").value;

//Crear un nuevo objeto (Producto)
const producto = new Product (nombre,precio,año);

//Crear un nuevo usuario de interfaz
const ui = new UI();

//Input de validacion de usuario
if(nombre==="" || precio==="" || año===""){
    ui.showMessage("Por favor insertar datos");
}

//Guardar producto
ui.addProducto(producto);
ui.showMessage("Producto agregado");
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
        <div class="tarjeta texto margen4">
            <div class="tarjeta-body">
                <strong>Producto</strong> : ${producto.nombre}-
                <strong>Precio</strong> : ${producto.precio}-
                <strong>Año</strong> : ${producto.año}-
                <a href="#" class="btn btn-error" name="eliminar"></a>
            </div>
        </div>
        `; // Comillas con ALt+96
        
        productoLista.appendChild(elemento); //appendChild -> Subobjeto/objeto hijo
    }
        //resetear valores del formulario
        resetForm(elemento){
            document.getElementById("producto-formulario").reset();
        }

        deleteProducto(elemento){
            if(elemento.nombre === "eliminar"){
                element.parentElement.parentElement.remove();
                this.showMessage("El producto se a eliminad")
            }
        }
        showMessage(mensaje, cssClass){
            const div= document.createElement("div");
            div.className = `alert alert-${cssClass}`;
            div.appendChild(document.createTextNode(mensaje));

            //Mostrar en el DOM
            const contenido = docu.querySelector(".container");
            const app = docu.querySelector("#App");

            //Insertar mensaje en el interfaz del usuario
        }
    
}

