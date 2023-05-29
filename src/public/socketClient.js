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
//funcion para capturar el boton eliminar y enviar el id
export const deleteNote = id => {
  socket.emit("client:deletenote", id);
};
//funcion para caturar el boton actualizar y enviar al backend
export const getNoteById = (id) => {
  socket.emit("client:getnote", id);
};
//se captura el id de la nota para buscarla en la base de datos
export const onSelected =(callback)=> {
  socket.on("server:selectednote", callback);
};
//se envian los datos de la nota a actualziar al backend
export const updateNote = (id, title, description) => {
  socket.emit("client:updatenote", {
    _id: id,
    title,
    description,
  })
}