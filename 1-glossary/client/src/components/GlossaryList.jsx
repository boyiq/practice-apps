import React, { useState, useEffect } from 'react';
import SingleGlossary from './SingleGlossary.jsx';

const GlossaryList = ({allGlossaries})=> {
  return (
    <div>
      {allGlossaries.map((glossary)=> (
        <SingleGlossary glossary={glossary}/>
      ))}
    </div>
  )
}

export default GlossaryList;