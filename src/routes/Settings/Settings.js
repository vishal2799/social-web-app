import React from 'react'
import classes from './Settings.module.css'
import TextOne from '../../components/UI/TextOne/TextOne'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const iconList = [
    {linkName: "account-information", icon: <HomeOutlinedIcon />, background: 'linear-gradient(to right,#0575e6,#021b79)'},
    {linkName: "Saved Address", icon: <LocationOnOutlinedIcon />, background: 'linear-gradient(to right,#f2994a,#f2c94c)'},
    {linkName: "Social Account", icon: <FacebookOutlinedIcon />, background: 'linear-gradient(to right,#ee0979,#ff6a00)'},
  ]
  

function Settings() {
    const list = iconList.map((il) => {
        return <Link to={'/' + il.linkName} className={classes.Link} style={{display: "flex",
        alignItems: "center",
        textDecoration: "none",
        padding: "12px 15px",
        fontWeight: "700",
        color: "#212529",
        fontSize: "12px"
        }}>
        <span style={{marginRight: '10px', background: il.background, padding: '8px 10px', borderRadius: '50%', color: 'white'}}>
            {il.icon}
        </span>{il.linkName}</Link>
    })
    return (
        <div className={classes.SettingsWrapper}>
            <h1>Settings</h1>
            <div style={{marginTop: '40px'}}>
            <TextOne color="#adb5bd" fw="600" ml="15px">General</TextOne>
            {list}
            </div>
            <div style={{marginTop: '25px'}}>
            <TextOne color="#adb5bd" fw="600" ml="15px">Other</TextOne>
            {list}
            </div>
        </div>
    )
}

export default Settings
