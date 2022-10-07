import React, { useState, useEffect } from 'react';
import SingleGlossary from './SingleGlossary.jsx';

const GlossaryList = ({allGlossaries, remove, searchStatus, editGlossary})=> {

  return (
    <div>
      {allGlossaries.map((glossary)=> {
       // console.log("the searched word is ", searchStatus)
        if (glossary.word.includes(searchStatus)) {
          return (
            <SingleGlossary glossary={glossary} key={glossary.word} remove={remove} editGlossary={editGlossary}/>
          )
        }
      })}
    </div>
  )
}

export default GlossaryList;