// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Creando...');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Listando...');
        let listado = porHacer.getListado();
        for (const tarea of listado) {
            console.log('\t==================='.green);
            console.log('\t     Por Hacer     '.green);
            console.log('\t==================='.green);
            console.log('\tTarea:', tarea.descripcion.yellow);
            console.log('\tCompletado:', (tarea.completado).toString().yellow);
        }
        break;
    case 'actualizar':
        console.log('Actualizando...');
        let actualizado = porHacer.actualizar(argv.d, argv.c);
        console.log("Actualizado", actualizado);
        break;
    case 'borrar':
        console.log('Borrando...');
        let borrado = porHacer.borrar(argv.d);
        console.log("Elemento borrado", borrado);
    default:
        console.log('Comando no es reconocido');
        break;
}