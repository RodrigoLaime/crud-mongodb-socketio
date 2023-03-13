import Schema from './models/Note.js'

export default (io) => {
  //(on) = escucha la conneccion
  io.on('connection', (socket) => {
    const emitNotes = async () => {
      const notes = await Schema.find();
      io.emit('loadnotes', notes);
    }
    emitNotes();

    socket.on('newnote', async (data) => {
      const newNote = new Schema(data);

      const saveNote = await newNote.save();
      console.log(saveNote)
    });
  });
}