import { loadNotes, onNewNote } from "./socketClient.js";// se importa el socket del cliente
import { appendNote, onHandleSubmit, renderNotes } from "./ui.js";// se improta el archivo de interacion con el usuario

onNewNote(appendNote);
loadNotes(renderNotes);

const noteForm = document.querySelector('#noteForm');

noteForm.addEventListener("submit", onHandleSubmit);