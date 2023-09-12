function verTarea(listaTareas) {
    for(i=0;i<listaTareas.length;i++)
    {
        console.log("Tarea " + (i+1) + " " + listaTareas[i].titulo);
    }
}

module.exports = verTarea;