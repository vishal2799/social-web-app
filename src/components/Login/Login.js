import React, { useContext, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth/AuthContext';

const Login = () => {
  const { loginUser, user } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
  }

  return (
    <>
    {user && (
        <Navigate to="/" replace={true} />
      )}
    <Link to="/signup">Signup</Link>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <input type="submit" value="Login" />
    </form>
    </>
  );
}
 
export default Login;