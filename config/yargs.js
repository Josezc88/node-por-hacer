const descripcion = {
    alias: 'd',
    demand: true,
    describe: 'La tarea que se va a realizar'
};

const completado = {
    alias: 'c',
    default: true,
    describe: 'El nuevo estado de la tarea (default true)'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina un elemento de la lista', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
};