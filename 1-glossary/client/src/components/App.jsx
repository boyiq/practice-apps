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
    console.log('the searched word passed in search is ', entry)
    setSearchStatus(entry);
  }

  const removeGlossary = function(glossary) {
    axios.delete('/glossary', {data: glossary})
    .then(()=>{
      let copy = [...allGlossaries];
      //console.log('the index of glossary to be removed is ', copy.indexOf(glossary))
      copy.splice(copy.indexOf(glossary), 1)
      setAllGlossaries(copy)
    }).catch((err)=>{
      console.log(err);
    })
  }


  return (
    <div>
      <p>this is app</p>
      <Search handleSearch={ search } />
      <Add handleSubmit={ addGlossary }/>
      <GlossaryList allGlossaries={ allGlossaries } remove={ removeGlossary } searchStatus = {searchStatus}/>
    </div>
  )
}

export default App;
