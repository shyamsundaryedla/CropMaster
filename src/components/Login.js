import { useState } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const Login = () => {
  const [email,changeEmail] = useState();
  const [password,changePassword] = useState();
  let navigate = useNavigate();


  function handleLogin(e)
  {
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email,password})
    .then(result => {
      if(result.data === 'success'){
        alert('login success');
        navigate('/');
      }
      else if(result.data === 'fail'){
        alert('invalid credentials');
      }
      else if(result.data === 'not exist'){
        alert('user not exist')
      }
      else{
        alert(result.data)
      }
    })
    .catch(err => alert(err.message)
    )
  }

  return ( 
    <div>
      <Nav></Nav>
      <form className="login-form p-4 mt-5" onSubmit={handleLogin}>
        <h2 className="mb-4 text-center">Login</h2>
        

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
        <button className="btn sign-btns my-3 w-100">Login</button>
        <p>don't have account signup?</p>
        <Link to="/Signup" className="btn sign-btns  w-100">
          Signup
        </Link>
      </form>
    </div>
   );
}
 
export default Login;