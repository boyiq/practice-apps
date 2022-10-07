import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GlossaryList from './GlossaryList.jsx';
import Add from './Add.jsx'
import Search from './Search.jsx'

const App = () => {

  const [allGlossaries, setAllGlossaries] = useState([]);
  const [searchStatus, setSearchStatus] = useState('');

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
    axios.post('/glossary', newGlossary)
    .then(()=>{
      setAllGlossaries([...allGlossaries, newGlossary])
    }).catch((err)=>{
      console.log(err);
    })
  }

  const search = function(entry) {
    setSearchStatus(entry);
  }

  const removeGlossary = function(glossary) {
    axios.delete('/glossary', {data: glossary})
    .then(()=>{
      let copy = [...allGlossaries];
      copy.splice(copy.indexOf(glossary), 1)
      setAllGlossaries(copy)
    }).catch((err)=>{
      console.log(err);
    })
  }

  const editGlossary = function(glossary) {
    var copy = [...allGlossaries];
    var index = copy.indexOf(glossary)
    console.log('the updated glossary is ', glossary)
    axios.put('/glossary', {data:glossary})
    .then((updatedGlossary)=>{
      console.log('the updated glossary after put request is', updatedGlossary.data)
      copy.splice(index, 1, updatedGlossary.data)
      setAllGlossaries(copy)
    }).catch((err)=> {
      console.log(err);
    })
  }


  return (
    <div>
      <p>this is app</p>
      <Search handleSearch={ search } />
      <Add handleSubmit={ addGlossary }/>
      <GlossaryList allGlossaries={ allGlossaries } remove={ removeGlossary } searchStatus = {searchStatus} editGlossary={editGlossary}/>
    </div>
  )
}

export default App;
