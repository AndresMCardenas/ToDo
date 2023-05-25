import { emit } from 'nodemon';
import Note from './models/Note';

export default (io) => {
  //se le dice que escuche un evento
  io.on('connection', (socket) => {
    // se emite un evento para ser usado desde el front
    const emitNotes = async () => {
      const notes = await Note.find();
      io.emit('server:loadnotes', notes);
    };
    emitNotes();
    // se recibe la nota desde el frontend para usar en el backend
    socket.on('cliente:newnote', async (data) => {
      const newNote = new Note(data);
      const saveNote = await newNote.save();
      socket.emit('serve:newnote',saveNote);
    });
  });
};