import React, {useState, useEffect} from 'react';
import Form from './Form.jsx';



const App = ()=> {
  const [home, setHome] = useState(true);
  const [page, setPage] = useState(1);

  const initialValues = {
    username: '',
    passkey: '',
    email: '',
    mail_address: '',
    card_number: '',
    expDate: '',
    cvv: '',
    bill_zip: '',
  }

  const [user, setUser] = useState(initialValues);

  const updateInfo = function(name, newValue) {
    console.log('the passed in name is ', name)
    console.log('the passed in newValue is ', newValue)
    setUser({...user, [name]: newValue})
  }

  const clickNext = function() {
    //temporarily save data before submission
    //change page state
    setPage(page + 1)
  }




  return (
    <div>
      <p>this is app</p>
      <button style={{visibility: home? 'visible' : 'hidden'}}>checkout</button>
      <Form page={page} handleSubmit={clickNext} user={user} updateInfo={updateInfo}/>
    </div>
  )
}

export default App

