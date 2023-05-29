import { loadNotes, onNewNote, onSelected } from "./socketClient.js";// se importa el socket del cliente
import { appendNote, onHandleSubmit, renderNotes, fillForm } from "./ui.js";// se improta el archivo de interacion con el usuario

onNewNote(appendNote);
loadNotes(renderNotes);
onSelected(fillForm);

const noteForm = document.querySelector('#noteForm');

noteForm.addEventListener("submit", onHandleSubmit);