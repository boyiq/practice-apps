import React, { useState, useEffect } from 'react';

const SingleGlossary = ({glossary, remove, editGlossary})=> {

  const[entry, setEntry] = useState('');


  return (
    <div class= "glossary">
      <b class='word' >{glossary.word}</b>
      <p class='definition'>{glossary.definition}</p>
      <form onSubmit={(event)=>{
        event.preventDefault();
        glossary.definition = entry;
        editGlossary(glossary);
      }}>
        <button>edit</button>
        <input type="text" placeholder="edit definition" value={entry} onChange={(event)=>{
          setEntry(event.target.value)
        }}></input>
      </form>
      <button onClick={(event)=>{
        remove(glossary)
      }}>delete</button>
    </div>
  )
}

export default SingleGlossary;

//style="boarder:2px solid black"