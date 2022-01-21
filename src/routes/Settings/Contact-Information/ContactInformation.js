import React, { useState, useEffect } from 'react'
import classes from './ContactInformation.module.css'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import IconButton from '../../../components/UI/IconButton/IconButton'
import InputWithIcon from '../../../components/UI/InputWithIcon/InputWithIcon'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useNavigate } from 'react-router-dom';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import axios from 'axios'
import Button from '../../../components/UI/Button/Button'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

function ContactInformation() {
    let navigate = useNavigate();
    let [country, setCountry]= useState();
    let [city, setCity] = useState();
    let [address, setAddress] = useState();

    return (
        <div className={classes.wrapper}>
            <div>
                <IconButton onClick={() => navigate(-1)}><ArrowBackOutlinedIcon /></IconButton>
                <h2>Contact Information</h2>
            </div>
            <div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className={classes.Input}>
                    <h4>Country</h4>
                    <InputWithIcon variant="text" icon={<LanguageOutlinedIcon />} 
                    onChange={(e) => setCountry(e.target.value)} value={country} placeholder="Enter Your Country" />
                </div>
                <div className={classes.Input}>
                    <h4>City</h4>
                    <InputWithIcon variant="text" icon={<LocationCityOutlinedIcon />} value={city} 
                    onChange={(e) => setCity(e.target.value)} placeholder="Enter Your City" />
                </div>
                <div className={classes.Input}>
                    <h4>Address</h4>
                    <InputWithIcon variant="text" icon={<HomeOutlinedIcon />} value={address}
                    placeholder="Enter Your Address" onChange={(e) => setAddress(e.target.value)} />
                </div>
                <Button variant="contained">Save</Button>
                </div>
            </div>
        </div>
    );
}

export default ContactInformation
