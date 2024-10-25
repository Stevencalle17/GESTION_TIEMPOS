import { registrarTiempos } from "../controllers/controllerTiempos.js";
import {listarProyectos, filtrarPorEmpresa, filtrarPorProyecto, filtrarPorTipoProyecto} from '../controllers/controllerProyectos.js'



let btnRegistrar = document.getElementById('btnRegistrar')
if (btnRegistrar) {
    btnRegistrar.addEventListener('click',registrarTiempos)
}

let listaProyectos = document.getElementById('listarProyectos')
if(listaProyectos) {
    listaProyectos.addEventListener('click', listarProyectos)
}
