import React, { useState, useEffect } from 'react';
const Add = ({handleSubmit})=> (
  <form onSubmit={(event)=> {
    handleSubmit();
  }}>
    <input></input>
    <input></input>
    <button></button>
  </form>
)


export default Add;