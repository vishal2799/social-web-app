import React, { useState, useEffect } from 'react'
import classes from './Password.module.css'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import IconButton from '../../../components/UI/IconButton/IconButton'
import InputWithIcon from '../../../components/UI/InputWithIcon/InputWithIcon'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useNavigate } from 'react-router-dom';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import axios from 'axios'
import Button from '../../../components/UI/Button/Button'

function Password() {
    let navigate = useNavigate();
    let [password, setPassword]= useState();
    let [newPassword, setNewPassword] = useState();
    let [confirmPassword, setConfirmPassword] = useState();

    return (
        <div className={classes.wrapper}>
            <div>
                <IconButton onClick={() => navigate(-1)}><ArrowBackOutlinedIcon /></IconButton>
                <h2>Change Password</h2>
            </div>
            <div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className={classes.Input}>
                    <h4>Current Password</h4>
                    <InputWithIcon variant="password" icon={<PersonOutlineOutlinedIcon />} 
                    onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter Your Current Password" />
                </div>
                <div className={classes.Input}>
                    <h4>Change Password</h4>
                    <InputWithIcon variant="password" icon={<EditOutlinedIcon />} value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)} placeholder="Enter Your New Password" />
                </div>
                <div className={classes.Input}>
                    <h4>Confirm Change Password</h4>
                    <InputWithIcon variant="password" icon={<CheckOutlinedIcon />} value={confirmPassword}
                    placeholder="Confirm Your New Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <Button variant="contained">Save</Button>
                </div>
            </div>
        </div>
    );
}

export default Password
