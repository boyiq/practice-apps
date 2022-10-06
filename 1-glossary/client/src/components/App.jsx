import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GlossaryList from './GlossaryList.jsx';


const App = () => {

  const [allGlossaries, setAllGlossaries] = useState([]);

  useEffect(()=>{
    axios.get('/glossary')
    .then((response)=>{
      console.log("the response from useEffect get request is ", response.data)
      setAllGlossaries(response.data);
    }).catch((err)=> {
      console.log(err);
    })
  }, [])

  const addGlossary = function(wordInput, defInput) {
    let newGlossary = {word: wordInput, definition:defInput}
    axios.post('/glossary', input)
    .then(()=>{
      setAllGlossaries([...allGlossaries])
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div>
      <p>this is app</p>
      <Add handleSubmit={ addGlossary }/>
      <GlossaryList allGlossaries={ allGlossaries }/>
    </div>
  )
}

export default App;
