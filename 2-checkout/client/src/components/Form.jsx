import React, {useState, useEffect} from 'react';


const Form = ({page, handleSubmit, user, updateInfo})=> {

  const handleInputChange = function(event) {
    let name = event.target.name;
    let value = event.target.value;
    updateInfo(name, value);
  }

//Setting up render condition depending on page number

  if (page === 1){
    return (
      <form class = "form" onSubmit={(event)=>{
        event.preventDefault();
        handleSubmit();
      }}>
        <input type="text" placeholder="enter username" name ="username" value={user.username} onChange={(event)=>{
          handleInputChange(event)
        }}></input>
        <input type="text" placeholder="enter password" name ="passkey" value={user.passkey} onChange={(event)=>{
          handleInputChange(event)
        }}></input>
        <input type="text" placeholder="enter email" name ="email" value={user.email} onChange={(event)=>{
          handleInputChange(event)
        }}></input>
        <button>Next</button>
      </form>
    )
  } else if (page === 2) {
    return  (
      <form class = "form" onSubmit={(event)=>{
        event.preventDefault();
        handleSubmit();
      }}>
        <input type="text" placeholder="Line 1"></input>
        <input type="text" placeholder="Line 2"></input>
        <input type="text" placeholder="City"></input>
        <input type="text" placeholder="State"></input>
        <input type="text" placeholder="Zip Code"></input>
        <button>Next</button>
      </form>
    )
  } else if (page === 3) {
    return (
      <form class = "form" onSubmit={(event)=>{
        event.preventDefault();
        handleSubmit();
      }}>
        <input type="text" placeholder="Card Number" name ="card_number" value={user.card_number}></input>
        <input type="text" placeholder="Expiration Date" name ="expDate" value={user.expDate}></input>
        <input type="text" placeholder="CVV" name ="CVV" value={user.cvv}></input>
        <input type="text" placeholder="Billing Zip Code" name ="bill_zip" value={user.bill_zip}> </input>
        <button>Next</button>
      </form>
    )
  } else if (page === 4) {
    return (
      <div>
        <p>All info</p>
      </div>
    )
  }
}

export default Form;