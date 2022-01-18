import React, { useContext, useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth/AuthContext';
import LoginImage from '../../assets/images/login-bg-2.jpeg'
import InputWithIcon from '../UI/InputWithIcon/InputWithIcon';
import Button from '../UI/Button/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Signup = () => {
  const { signupUser, user } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [img, setImg] = useState('./images/user-7.png');
  let navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser(email, password, name, img);
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
      <h1 style={{textAlign: 'left'}}>Create your<br />your account</h1>
      <InputWithIcon mb="20px" icon={<PersonOutlinedIcon />} onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" />
      <InputWithIcon mb="20px" icon={<MailOutlineIcon />} onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />
      <InputWithIcon mb="20px" icon={<LockOutlinedIcon />} onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
      <Button variant="contained" width="100%" onClick={handleSubmit}>Signup</Button>
      <p style={{textAlign: 'left'}}>Already have an account <Link to="/login" style={{textDecoration: 'none', color: 'blue'}}>Login</Link></p>
    </div>
    </div>
    </div>
    </>
  );
}
 
export default Signup;