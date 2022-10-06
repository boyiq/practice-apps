import React, { useState, useEffect } from 'react';

const SingleGlossary = ({glossary})=> (
  <div>
    <p>{glossary.word}</p>
    <p>{glossary.definition}</p>
  </div>
)

export default SingleGlossary;

//style="boarder:2px solid black"