function Note({ note }) {
  return (
    <div className="note">
      <div className="note-content">{ note.content }</div>
      <div className="note-delete-btn">{ 'x' }</div>
    </div>
  )
}

export default Note;
