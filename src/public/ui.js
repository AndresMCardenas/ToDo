// archivo para contener las funciones que interactua el usuario
import { saveNote, deleteNote, getNoteById, updateNote } from './socketClient.js';

const notesList = document.querySelector('#notes');
const title = document.querySelector('#title');
const description = document.querySelector('#description');

let saveId = "";

//funcion que crea un div por cada Nota en el arreglo
const noteUI = note => {
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="card card-body rounded-0 mb-2 animate__animated animate__fadeInUp">
      <div class="d-flex justify-content-between">
        <h1>${note.title}</h1>
        <div>
          <button class="btn btn-danger btn-sm delete" data-id="${note._id}">Delete</button>
          <button class="btn btn-secondary btn-sm update" data-id="${note._id}">Update</button>
        </div>
      </div>  
      <p>${note.description}</p>
    </div>     
  `;
  
  const btnDelete = div.querySelector('.delete');
  const btnUpdate = div.querySelector('.update');

  btnDelete.addEventListener('click', e => deleteNote(btnDelete.dataset.id));
  btnUpdate.addEventListener('click', e => getNoteById(btnUpdate.dataset.id));

  return div;
};

//se recorre el arreglo de las notas llama a la funcion que crea el div y se inyecta en el html
export const renderNotes = notes => {
  notesList.innerHTML = "";
  notes.forEach(note => notesList.append(noteUI(note)));
};
//funcion para rellenar el formulario de la nota a actualizar
export const fillForm = note => {
  title.value = note.title;
  description.value = note.description; 
  saveId = note._id;
}


// se guarda los datos ingresados por el usario 
export const onHandleSubmit = (e) => {
  e.preventDefault();
  //condicional para validar si hay un fomulario con un id en la base para actualizar
  if (saveId) {
    updateNote(saveId, title.value, description.value);
  }
  //si no hay Id de nota se llama a crear una nueva
  else {
    saveNote(title.value, description.value);    
  }
  saveId = "";
  title.value = "";
  description.value = "";
};
// se añade la nueva nota al final de la lista
export const appendNote = note => {
  notesList.append(noteUI(note));  
};