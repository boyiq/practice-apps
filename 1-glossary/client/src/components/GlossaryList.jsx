import React, { useState, useEffect } from 'react';
import SingleGlossary from './SingleGlossary.jsx';

const GlossaryList = ({allGlossaries, remove})=> {
  return (
    <div>
      {allGlossaries.map((glossary)=> (
        <SingleGlossary glossary={glossary} key={glossary.word} remove={remove}/>
      ))}
    </div>
  )
}

export default GlossaryList;