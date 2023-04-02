// 📝 Lista de tareas
// Crear un programa que tenga un menú con las siguientes opciones:
// AGREGAR TAREA: debe pedir al usuario ingresar una tarea y agregarla a la lista de tareas
// MODIFICAR TAREA: debe pedir al usuario ingresar el número de tarea que se desea modificar, mostrarla, y pedir que ingrese la tarea a reemplazarla o modificarla
// ELIMINAR TAREA: debe pedir al usuario ingresar el número de tarea a eliminar, mostrarla, y pedirle confirmar si desea eliminarla o no
// VER TAREAS: debe listar todas las tareas hasta el momento
// SALIR: debe terminar la ejecución del programa
// El programa debe mostrar el menú de opciones, y permitir ingresar una opción. Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú. Si se elige SALIR, debe terminar el programa. Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada, volver al menú de opciones.


//List add task
//Capture input 
//Capture buttom +

const addTask = (e) =>{
   e.preventDefault()
   console.log('Added task')
   let inputAddTask = document.querySelector('.InputAddTask').value
   console.log(inputAddTask)
   let ul = document.querySelector('.UlListTask')
   console.log(ul)
   let li = document.createElement('li')
   ul.appendChild(li)
   let span = document.createElement('span')
   li.innerHTML += `${inputAddTask}`
   span.classList.add('delete')
   span.style.width='18px'
   span.innerHTML= `<img src='./img/deleteImg.png' width='14px'/>`
   li.appendChild(span)
   let deleteTaskClass = document.querySelectorAll('.delete')
   deleteTaskClass.forEach(deleteTask => {
      deleteTask.addEventListener('click', function(){
         console.log(deleteTask)
      })
   })
}

document.querySelector('.ButtomAddTask').addEventListener('click', addTask)
console.log(document.querySelector('.ButtomAddTask'))