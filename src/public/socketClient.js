const socket = io();

//el front escucha lo que emite el backend
export const loadNotes = (callback) => {   
  socket.on("server:loadnotes", callback );
};
//el front emite la nota nueva
export const saveNote = (title, description) => {
  socket.emit("client:newnote", {
    title,
    description,
  });
};
//funcion para escuchar las notas nuevas generadas al backend para refresacar la lista en pantalla
export const onNewNote = (callback) => {  
  socket.on("server:newnote", callback );
};

export const deleteNote = id => {
  socket.emit("client:deletenote", id);
}