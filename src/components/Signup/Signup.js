import React, { useContext, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth/AuthContext';

const Signup = () => {
  const { signupUser, user } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [img, setImg] = useState('./images/user-7.png');
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser(email, password, name, img);
  }

  return (
    <>
    {user && (
        <Navigate to="/" replace={true} />
      )}
    <Link to="/login">Login</Link>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)} />
        <input type="text" placeholder="Name" value={name}
        onChange={(e) => setName(e.target.value)} />
      <input type="submit" value="SignUp" />
    </form>
    </>
  );
}
 
export default Signup;