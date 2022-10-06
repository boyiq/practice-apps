import React, { useState, useEffect } from 'react';


const Search = ({handleSearch})=> {

  const [entry, setEntry] = useState('');

  return(
    <form class="form" onSubmit={(event)=> {
      event.preventDefault();
      handleSearch(entry);
    }}>
      <input type= "text" placeholder="enter word" value={entry} onChange={(event)=>{
        setEntry(event.target.value);
      }} ></input>
      <button>Search</button>
    </form>
  )
}

export default Search