import React, {useState, useEffect} from 'react';


const Form = ({page, handleSubmit, user, updateInfo, clickSubmit})=> {

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
        }} />
        <input type="text" placeholder="enter password" name ="passkey" value={user.passkey} onChange={(event)=>{
          handleInputChange(event)
        }} />
        <input type="text" placeholder="enter email" name ="email" value={user.email} onChange={(event)=>{
          handleInputChange(event)
        }} />
        <button>Next</button>
      </form>
    )
  } else if (page === 2) {
    return  (
      <form class = "form" onSubmit={(event)=>{
        event.preventDefault();
        handleSubmit();
      }}>
        <input type="text" placeholder="Line 1" name = "mail_address" value={user.mail_address} onChange={(event)=>{
          handleInputChange(event)
        }} />
        <input type="text" placeholder="Line 2" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="State"/>
        <input type="text" placeholder="Zip Code" />
        <button>Next</button>
      </form>
    )
  } else if (page === 3) {
    return (
      <form class = "form" onSubmit={(event)=>{
        event.preventDefault();
        handleSubmit();
      }}>
        <input type="text" placeholder="Card Number" name ="card_number" value={user.card_number} onChange={(event)=>{
          handleInputChange(event)
        }} />
        <input type="text" placeholder="Expiration Date" name ="expDate" value={user.expDate} onChange={(event)=>{
          handleInputChange(event)
        }} />
        <input type="text" placeholder="CVV" name ="cvv" value={user.cvv} onChange={(event)=>{
          handleInputChange(event)
        }} />
        <input type="text" placeholder="Billing Zip Code" name ="bill_zip" value={user.bill_zip} onChange={(event)=>{
          handleInputChange(event)
        }} />
        <button>Next</button>
      </form>
    )
  } else if (page === 4) {
    return (
      <div>
        <p>All info</p>
        <button onClick={(event)=> {
          clickSubmit(user)

        }}>Submit</button>
      </div>
    )
  }
}

export default Form;