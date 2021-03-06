import React, { useState, useEffect } from 'react'
import classes from './Account-Information.module.css'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import IconButton from '../../../components/UI/IconButton/IconButton'
import InputWithIcon from '../../../components/UI/InputWithIcon/InputWithIcon'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Button from '../../../components/UI/Button/Button'

function AccountInformation() {

    let [info, setInfo] = useState();
    let [loading, setLoading] = useState(false);
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [bio, setBio] = useState('');
    let [img, setImg] = useState('./images/user-7.png');
    let [verified, setVerified] = useState(true);

    useEffect(() => {
        getInfo();
    }, [])


    const verifyData = () => {
    setLoading(true);

    let userId = localStorage.getItem('user');
        userId = JSON.parse(userId).user.id;

    let endpoints = [{
          url:`http://localhost:3000/users/${userId}`, 
          data: {name, email, img, password: "bestpassword"}
        },
          {
          url:`http://localhost:3000/userProfile/${info.id}`, 
          data: {name, email, img, userId}
        }];

    let emailId = localStorage.getItem('user');
    emailId = JSON.parse(emailId).user.email;

    // if(email == emailId) {
    //     setVerified(true);
    //     return;
    // }
    let url = "http://localhost:3000/userProfile";
    let token = localStorage.getItem('user');
    token = JSON.parse(token).accessToken;
    axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(function (res) {
      if(email == emailId) {
        setVerified(true);
        return true;
    }
        for(let data of res.data) {
            if(data.email === email) {
              alert("Please enter your email id");
              setLoading(false);
              setVerified(false);
              throw new Error('Same Email');
            }
        }
    })
    .then(() => {
        Promise.all(endpoints.map((endpoint) => axios.put(endpoint.url, endpoint.data, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }))).then(([{data: users}, {data: userProfile}] )=> {
          console.log(users, userProfile);
          setLoading(false);
          navigate(-1);
       })
       .catch(err => {
         console.log(err);
         setLoading(false);
       })
      
    })
    .catch(function(error) {
      setLoading(false);
      console.log(error);
    })

    }


//     const changeUserData = () => {
//        verifyData();
//        if(verified){
//         setLoading(true);
//         let userId = localStorage.getItem('user');
//         userId = JSON.parse(userId).user.id;
//         let token = localStorage.getItem('user');
//         token = JSON.parse(token).accessToken;
//         let endpoints = [{
//           url:`http://localhost:3000/users/${userId}`, 
//           data: {name, email, img, password: "bestpassword"}
//         },
//           {
//           url:`http://localhost:3000/userProfile/${info.id}`, 
//           data: {name, email, img, userId}
//         }];

//           Promise.all(endpoints.map((endpoint) => axios.put(endpoint.url, endpoint.data, {
//             headers: {
//               'Authorization': `Bearer ${token}`
//             }
//           }))).then(([{data: users}, {data: userProfile}] )=> {
//             console.log(users, userProfile);
//             setLoading(false);
//             navigate(-1);
//          })
//         .catch(function(error) {
//         setLoading(false);
//         navigate(-1);
//         console.log(error);
//       })

//        }
// }

    const getInfo = () => {
        setLoading(true);
        let userId = localStorage.getItem('user');
      userId = JSON.parse(userId).user.id;
        let url = "http://localhost:3000/userProfile?userId=" + userId;
        let token = localStorage.getItem('user');
        token = JSON.parse(token).accessToken;
        axios.get(url, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(function (res) {
          setInfo(res.data[0]);
          setName(res.data[0].name);
          setEmail(res.data[0].email);
          setLoading(false);
        })
        .catch(function(error) {
          console.log(error);
          setLoading(false);
        })
      }
    
    let navigate = useNavigate();

    return !loading ? (
        <div className={classes.wrapper}>
            <div>
                <IconButton onClick={() => navigate(-1)}><ArrowBackOutlinedIcon /></IconButton>
                <h2>Account Details</h2>
            </div>
            <div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className={classes.Input}>
                    <h4>Name</h4>
                    <InputWithIcon variant="text" icon={<PersonOutlineOutlinedIcon />} 
                    onChange={(e) => setName(e.target.value)} value={name} placeholder="Edit Your Name" />
                </div>
                <div className={classes.Input}>
                    <h4>Email</h4>
                    <InputWithIcon variant="text" icon={<EmailOutlinedIcon />} value={email} 
                    onChange={(e) => setEmail(e.target.value)} placeholder="Edit Your Email" />
                </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className={classes.Input}>
                    <h4>Bio</h4>
                    <InputWithIcon variant="text" icon={<EditOutlinedIcon />} placeholder="Edit Your Bio" />
                </div>
                <div className={classes.Input}>
                    <h4>Picture</h4>
                    <InputWithIcon variant="file" icon={<PhotoCameraOutlinedIcon />} placeholder="Choose File" />
                </div>
                <Button variant="contained" onClick={verifyData}>Save</Button>
                </div>
            </div>
        </div>
    ) : (<div>Loading...</div>);
}

export default AccountInformation
