import React, { useState, useEffect } from 'react';

const SingleGlossary = ({glossary,remove})=> {



  return (
    <div class= "glossary">
      <b class='word' >{glossary.word}</b>
      <p class='definition'>{glossary.definition}</p>
      <button>edit</button>
      <button onClick={(event)=>{
        remove(glossary)
      }}>delete</button>
    </div>
  )
}

export default SingleGlossary;

//style="boarder:2px solid black"