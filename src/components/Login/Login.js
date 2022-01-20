import React, { useContext, useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth/AuthContext';
import LoginImage from '../../assets/images/login-bg.jpeg'
import InputWithIcon from '../UI/InputWithIcon/InputWithIcon';
import Button from '../UI/Button/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
  const { loginUser, user } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
  }

  return (
    <>
    {user && (
        <Navigate to="/" replace={true} />
      )}
     <div style={{display: 'flex', height: '100vh'}}>
       <div style={{backgroundImage: `url(${LoginImage})`, width: '40%', backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
       <div style={{width: '60%', padding: '20px'}}> 
       <div style={{display: 'flex', justifyContent: 'flex-end'}}>
         <Button variant="contained" mr="10px" onClick={() => navigate("/login")}>Login</Button>
         <Button variant="contained" onClick={() => navigate("/signup")}>Signup</Button>
       </div>
    <div style={{width: '50%', margin: 'auto', paddingTop: '50px', textAlign: 'center'}}>
      <h1 style={{textAlign: 'left'}}>Login into<br />your account</h1>
      <InputWithIcon variant="text" mb="20px" icon={<MailOutlineIcon />} onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />
      <InputWithIcon variant="password" mb="20px" icon={<LockOutlinedIcon />} onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
      <Button variant="contained" width="100%" onClick={handleSubmit}>Login</Button>
      <p style={{textAlign: 'left'}}>Don't have an account <Link to="/signup" style={{textDecoration: 'none', color: 'blue'}}>Signup</Link></p>
    </div>
    </div>
    </div>
    </>
  );
}
 
export default Login;