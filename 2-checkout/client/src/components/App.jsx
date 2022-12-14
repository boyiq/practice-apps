import React, {useState, useEffect} from 'react';
import Form from './Form.jsx';
import axios from 'axios'



const App = ()=> {
  const [home, setHome] = useState(true);
  const [page, setPage] = useState(0);

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
    //console.log('the passed in name is ', name)
    //console.log('the passed in newValue is ', newValue)
    setUser({...user, [name]: newValue})
  }


  const clickNext = function() {
    setPage(page + 1)
  }

  const clickSubmit = function(user) {
    console.log('the user about to submit is ', user)
    axios.post('/checkout', user)
    setHome(true)
    setUser(initialValues);
  }


  if (home) {
    return(
      <div>
        <p>this is app</p>
        <button onClick={(event)=>{
          setHome(false);
          setPage(1)
        }}>checkout</button>
      </div>
    )
  } else {
    return (
    <div>
      <p>this is app</p>
      <Form page={page} handleSubmit={clickNext} user={user} updateInfo={updateInfo} clickSubmit={clickSubmit}/>
    </div>
    )
  }
}

export default App

