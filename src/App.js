import './App.css';
import { useEffect, useRef, useState } from 'react';
import { v1 } from 'uuid';
import Note from './Note';
import request from './Api';


function App() {

  const content = useRef();

  let [notes, setNotes] = useState([]);
  let [query, setQuery] = useState();

  const getQuery = () => {
    request('GET')
      .then(result => result.json())
      .then(result => setNotes(result));
  }

  useEffect(getQuery, [query]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    request('POST', v1(), content.current.value)
      .then(_ => {
        setQuery('GET');
        content.current.value = '';
      });
  }

  return (
    <div className="App">
      <h1>Notes <span className='refresh'></span></h1>
      <div className='notes-container'>{ notes.map(note => <Note note={ note } key={ note.id }/>)}</div>
      <form className='new-note-form'>
        <input type='text' ref={ content } required></input>
        <input type='submit' value='OK' onClick={ onSubmitHandler }></input>
      </form>
    </div>
  );
}

export default App;
