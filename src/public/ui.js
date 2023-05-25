// archivo para contener las funciones que interactua el usuario
import { saveNote } from './socketClient.js';

const notesList = document.querySelector ('#notes');

//funcion que crea un div por cada Nota en el arreglo
const noteUI = note => {
  const div = document.createElement('div');
  div.innerHTML = `
    <div>
      <h1>${note.titel}</h1>
      <div>
        <button>Delete</button>
        <button>Update</button>
      </div>
      <p>${note.description}</p>
    </div> 
  `;
  return div;
};

//se recorre el arreglo de las notas llama a la funcion que crea el div y se inyecta en el html
export const renderNotes = notes => {
  notes.forEach(note => notesList.append(noteUI(note)));
};

// se guarda los datos ingresados por el usario 
export const onHandleSubmit = (e) => {
  e.preventDefault();
  saveNote(noteFrom['titel'].value, noteFrom['description'].value);
};
// se añade la nueva nota al final de la lista
export const appendNote = note => {
  notesList.append(noteUI(note));
  
};