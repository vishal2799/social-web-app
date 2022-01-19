import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import classes from './Navigation.module.css'
import logo from '../../assets/images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import InputWithIcon from '../UI/InputWithIcon/InputWithIcon';
import IconButton from '../UI/IconButton/IconButton'
import NotificationDropdown from '../UI/NotificationDropdown/NotificationDropdown';
import ChatStatus from '../UI/ChatStatus/ChatStatus';


const Navigation = ({logout}) => {

    const navigate = useNavigate();
    const location = useLocation();

    const searchPage = () => {
        if(location.pathname == '/search') {
        return;
        } else {
            navigate('/search');
        }
    }

    return (
        <div className={classes.Container}>
            <div className={classes.Logo}>
                <img src={logo} />
            </div>
            <div className={classes.Container2}>
                    <InputWithIcon variant="text" placeholder="Search" icon={<SearchIcon />} border="none" background="#eee" onClick={searchPage}/>
                <div style={{display: 'flex'}}>
                    <NotificationDropdown />
                    <ChatStatus />
                    <IconButton onClick={() => navigate('/settings')}>
                        <SettingsOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={logout}>
                        <LogoutIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Navigation
