import { useState } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Contact = () => {
    const [email,changeEmail] = useState();
  const [Number,changeNumber] = useState();
  const [Name,changeName] = useState();

  


  function handleLogin(e)
  {
    e.preventDefault()
  }

    return ( 
        <div>
            <Nav></Nav>
            <form className="login-form p-4 mt-1 contact" onSubmit={handleLogin}>
        <h2 className="mb-2 text-center">Contact us</h2>
        

        <label for="name">Name</label>
        <input
          type="text"
          placeholder="Name"
          className="form-control mb-3"
          name="name"
          value={Name}
          onChange={(e) => changeName(e.target.value)}
        />
        <label for="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-3"
          name="email"
          value={email}
          onChange={(e) => {
            changeEmail(e.target.value);
          }}
        />
        <label for="ph">Mobile</label>
        <input
          type="text"
          placeholder="Mobile"
          className="form-control mb-3"
          name="ph"
          value={Number}
          onChange={(e) => changeNumber(e.target.value)}
        />
        <label for="message">Message</label>
        <textarea className='form-control mb-4' rows='5'>

        </textarea>
       
        <Link className="btn sign-btns  w-100">
          Send
        </Link>
      </form>
        </div>
     );
}
 
export default Contact;