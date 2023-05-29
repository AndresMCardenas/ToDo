// archivo para contener las funciones que interactua el usuario
import { saveNote, deleteNote } from './socketClient.js';

const notesList = document.querySelector ('#notes');

//funcion que crea un div por cada Nota en el arreglo
const noteUI = note => {
  const div = document.createElement('div');
  div.innerHTML = `
    <div>
      <h1>${note.title}</h1>
      <div>
        <button class="delete" data-id="${note._id}">Delete</button>
        <button>Update</button>
      </div>
      <p>${note.description}</p>
    </div> 
  `;
  
  const btnDelete = div.querySelector('.delete');
  btnDelete.addEventListener('click', e => deleteNote(btnDelete.dataset.id));

  return div;
};

//se recorre el arreglo de las notas llama a la funcion que crea el div y se inyecta en el html
export const renderNotes = notes => {
  notesList.innerHTML = "";
  notes.forEach(note => notesList.append(noteUI(note)));
};

// se guarda los datos ingresados por el usario 
export const onHandleSubmit = (e) => {
  e.preventDefault();
  saveNote(noteForm['title'].value, noteForm['description'].value);
};
// se añade la nueva nota al final de la lista
export const appendNote = note => {
  notesList.append(noteUI(note));
  
};