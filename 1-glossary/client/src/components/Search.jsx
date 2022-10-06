import React, { useState, useEffect } from 'react';

const Search = ({handleSearch})=> {
  return(
    <form class="form">
      <input placeholder="enter word"></input>
      <button>Search</button>
    </form>
  )
}

export default Search