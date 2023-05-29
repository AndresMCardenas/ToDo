import { emit } from 'nodemon';
import Note from './models/Note';
import { Socket } from 'socket.io';

export default (io) => {
  //se le dice que escuche un evento
  io.on("connection", (socket) => {
    // se emite un evento para ser usado desde el front
    const emitNotes = async () => {
      const notes = await Note.find();
      io.emit("server:loadnotes", notes);
    };
    emitNotes();
    // se recibe la nota desde el frontend para usar en el backend
    socket.on("client:newnote", async (data) => {
      const newNote = new Note(data);
      const savedNote = await newNote.save();
      io.emit("server:newnote", savedNote);
    });
    // se recibe el id para eliminar una nota y se envia al backend
    socket.on("client:deletenote", async (id) => {
      await Note.findByIdAndDelete(id);
      emitNotes();
    })

    socket.on("client:getnote", async id => {
      const note = await Note.findById(id);
      io.emit("server:selectednote", note);
    });

    socket.on ("client:updatenote", async (updateNote) => {
      await Note.findByIdAndUpdate(updateNote._id, {
        title: updateNote.title,
        description: updateNote.description,
      });
      emitNotes();
    });

  });
};