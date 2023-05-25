const socket = io();

//el front escucha lo que emite el backend
export const loadNotes = (callback) => {   
  socket.on('server:loadnotes', callback );
};
//el front emite la nota nueva
export const saveNote = (titel, description) => {
  socket.emit('client:newnote', {
    titel,
    description,
  });
};
//funcion para escuchar las notas nuevas generadas al backend para refresacar la lista en pantalla
export const onNewNote = (callback) => {  
  socket.om('server:newnote', callback );
};