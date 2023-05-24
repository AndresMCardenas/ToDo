// archivo para contener las funciones que interactua el usuario
import { saveNote } from "./socketClient.js";

const notesList = document.querySelector ('#notes');

//se recorre el arreglo de las notas y se inyecta en el html
export const renderNotes = notes => {
  notes.forEach(note => {    
    notesList.innerHTML += `
      <div>
        <h1>${note.titel}</h1>
        <p>${note.description}</p>
      </div> 
    `
  });
  
};

// se guarda los datos ingresados por el usario 
export const onHandleSubmit = (e) => {
  e.preventDefault();
  saveNote(noteFrom['titel'].value, noteFrom['description'].value);
};