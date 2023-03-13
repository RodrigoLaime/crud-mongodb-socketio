const socket = io()

//hace la consulta al baquend desde el front
export const loadNotes = () => {
  socket.on('loadnotes', (data) => {
    console.log(data);
  })
};

//envia al baquend
export const saveNote = (title, description) => {
  socket.emit('newnote', {
    title,
    description,
  })
}
