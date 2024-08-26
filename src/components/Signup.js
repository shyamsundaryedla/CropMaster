import Nav from "./Nav";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'


const Signup = () => {

    const [email, changeEmail] = useState();
  const [password, changePassword] = useState();
  const [username, changeUsername] = useState();


  function handleSubmit(e)
  {
    e.preventDefault()
    axios.post('http://localhost:3001/signup',{username,email,password})
    .then(result => {
      if(result.data === 'user registered')
        {
          alert('registration successfull..!');
          window.location.reload();
        }
        else{
          alert('unable to register..!');
          window.location.reload();
        
        }
       
    })
    .catch(err => alert(err.message))
  }


        return (
            <div className="container">
              <Nav></Nav>
              <form className="login-form p-4 mt-5" onSubmit={handleSubmit}>
                <h2 className="mb-4 text-center">Signup</h2>
                <label for="username">username</label>
                <input
                  type="text"
                  placeholder="username"
                  className="form-control mb-3"
                  name="username"
                  value={username}
                  onChange={(e) => {
                    changeUsername(e.target.value);
                  }}
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
                <label for="password">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control mb-3"
                  name="password"
                  value={password}
                  onChange={(e) => changePassword(e.target.value)}
                />
                <button className="btn sign-btns my-3 w-100">submit</button>
                <p>Already have account Login?</p>
                <Link to="/Login" className="btn sign-btns w-100">
                  Login
                </Link>
              </form>
            </div>
          );
}
 
export default Signup;