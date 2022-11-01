function Note({ note, deleteFunction, id }) {

  const onClickHandler = () => {
    deleteFunction(id);
  }

  return (
    <div className="note">
      <div className="note-content">{ note.content }</div>
      <div className="note-delete-btn" onClick={ onClickHandler }>{ 'x' }</div>
    </div>
  )
}

export default Note;
