import './App.css';
import { useEffect, useRef, useState } from 'react';
import { v1 } from 'uuid';
import Note from './Note';
import request from './Api';


function App() {

  const content = useRef();

  let [notes, setNotes] = useState([]);
  let [lastRerponse, setLastResponse] = useState();

  const deleteQuery = (id) => {
    request('DELETE', id)
      .then(result => setLastResponse(result))
  }

  const getQuery = () => {
    request('GET')
      .then(result => result.json())
      .then(result => setNotes(result));
  }

  useEffect(getQuery, [lastRerponse]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    request('POST', v1(), content.current.value)
      .then(result => {
        setLastResponse(result);
        content.current.value = '';
      });
  }

  return (
    <div className="App">
      <h1>Notes <span className='refresh' onClick={ getQuery }>{'обновить'}</span></h1>
      <div className='notes-container'>{ notes.map(note => <Note 
        note={ note } 
        id={ note.id } 
        key={ note.id } 
        deleteFunction={ deleteQuery } />)}</div>
      <form className='new-note-form'>
        <input type='text' ref={ content } required></input>
        <input type='submit' value='OK' onClick={ onSubmitHandler }></input>
      </form>
    </div>
  );
}

export default App;
