//Variables
const tarea = document.getElementById("tareaInput");
const boton = document.getElementById("btn-agregar");
const lista = document.getElementById("lista");

//Funcion que grega tareas a la lita
const agregarTarea = () => 
{
    
    //Se crea un elemento 'li' para ser insertado en la lista
    const elementoLista = document.createElement("li");
    //Se crea un elemento 'a' para ser insertado en el tag 'li'
    const elementoA = document.createElement("a");
    //Nodo de texto que va dentro del tag 'a'
    const texto = document.createTextNode(tarea.value);

    //Validacion para que no se cree un elemento vacio
    if(tarea.value === "" ){
        
            //Remplaza al placeholder para advertir de que no e ha ingresado texto
            tarea.setAttribute("placeholder", "No has agregado un valor valido");
            //Cambia la clase para dar advertencia visual al usuario
            tarea.className = "error";
            return false;
    };

    //Se agrega el texto al elemento 'a'
    elementoA.appendChild(texto);
    //Se agrega el elemento 'a' al tag 'li'
    elementoLista.appendChild(elementoA);
    //Crear enlace para el tag a
    elementoA.setAttribute("href", "#");
    //El elemento 'li' se agrega a la lista
    lista.appendChild(elementoLista);



    //Se agrega un evento de escucha a cada tarea para eliminarla
    for(i = 0; i <= lista.children.length - 1; i++) 
    {
        lista.children[i].addEventListener("click", function() {
            this.parentNode.removeChild(this);
        });
    };


};

//Eventos del DOM
//Evento para agregar una nueva tarea
boton.addEventListener("click", agregarTarea);

