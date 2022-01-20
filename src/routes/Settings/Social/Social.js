import React, { useState, useEffect } from 'react'
import classes from './Social.module.css'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import IconButton from '../../../components/UI/IconButton/IconButton'
import InputWithIcon from '../../../components/UI/InputWithIcon/InputWithIcon'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useNavigate } from 'react-router-dom';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import axios from 'axios'
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '../../../components/UI/Button/Button'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

function Social() {
    let navigate = useNavigate();
    let [instagram, setInstagram]= useState();
    let [twitter, setTwitter] = useState();
    let [facebook, setFacebook] = useState();

    return (
        <div className={classes.wrapper}>
            <div>
                <IconButton onClick={() => navigate(-1)}><ArrowBackOutlinedIcon /></IconButton>
                <h2>Social Network</h2>
            </div>
            <div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className={classes.Input}>
                    <h4>Instagram</h4>
                    <InputWithIcon variant="text" icon={<InstagramIcon />} 
                    onChange={(e) => setInstagram(e.target.value)} value={instagram} placeholder="Enter Your Instagram" />
                </div>
                <div className={classes.Input}>
                    <h4>Twitter</h4>
                    <InputWithIcon variant="text" icon={<TwitterIcon />} value={twitter} 
                    onChange={(e) => setTwitter(e.target.value)} placeholder="Enter Your Twitter" />
                </div>
                <div className={classes.Input}>
                    <h4>Facebook</h4>
                    <InputWithIcon variant="text" icon={<FacebookOutlinedIcon />} value={facebook}
                    placeholder="Enter Your Facebook" onChange={(e) => setFacebook(e.target.value)} />
                </div>
                <Button variant="contained">Save</Button>
                </div>
            </div>
        </div>
    );
}

export default Social
