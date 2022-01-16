import React, { useContext, useEffect } from 'react'
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import classes from './Layout.module.css'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Widget from '../UI/Widget/Widget'
import Navigation from '../Navigation/Navigation'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { AuthContext } from '../../Context/Auth/AuthContext';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';

const iconList = [
    {linkName: "NewsFeed", icon: <LiveTvOutlinedIcon />, background: 'linear-gradient(to right,#0575e6,#021b79)'},
    {linkName: "Explore Stories", icon: <LanguageOutlinedIcon />, background: 'linear-gradient(to right,#f2994a,#f2c94c)'},
    {linkName: "User Profile", icon: <PersonOutlineOutlinedIcon />, background: 'linear-gradient(to right,#ee0979,#ff6a00)'},
  ]

const Layout = (props) => {
    let location = useLocation();
  const { logoutUser, user, getProfile, loadingProfile } = useContext(AuthContext);
  
  useEffect(() => {
    getProfile();
  }, [])

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }

    return (
        <div style={{overflowX: 'hidden'}}>
            <Navigation logout={logoutUser} />
            <div className={classes.Layout}>
            <div>
                    <Widget widgetTitle="New Feed" iconLinkList={iconList} />
                    <Widget widgetTitle="More Pages" iconLinkList={iconList} />
                </div>
                {props.children}
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
