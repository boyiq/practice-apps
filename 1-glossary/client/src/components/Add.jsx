import React, { useState, useEffect } from 'react';


const Add = ({handleSubmit})=> {

  const [wordEntry, setWordEntry] = useState('');
  const [defEntry, setdefEntry] = useState('');

  return (
    <form onSubmit={(event)=> {
      event.preventDefault();
      handleSubmit(wordEntry, defEntry);
    }}>
      <input type="text" placeholder="add word" value={wordEntry} onChange={
        (event)=>{ setWordEntry(event.target.value)}
      }></input>
      <input type="text" placeholder="add definition" value = {defEntry}
      onChange={(event)=>{ setdefEntry(event.target.value) }}></input>
      <button>Add</button>
    </form>
  )
}

export default Add;