import { loadNotes } from './socketClient.js';// se importa el socket del cliente
import { onHandleSubmit, renderNotes } from './ui.js';// se improta el archivo de interacion con el usuario

loadNotes(renderNotes);

const noteFrom = document.querySelector('#noteFrom');

noteFrom.addEventListener('submit', onHandleSubmit)