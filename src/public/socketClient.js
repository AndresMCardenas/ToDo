const socket = io();

//el front escucha lo que emite el backend
export const loadNotes = (callback) => {   
  socket.on("loadnotes", callback );
};

export const saveNote = (titel, description) => {
  socket.emit("newnote", {
    titel,
    description,
  });
};