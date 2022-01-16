import React, { useState } from 'react'
import classes from './NotificationDropdown.module.css'
import userImg from '../../../assets/images/user-11.png'
import NotificationsOutlined from '@mui/icons-material/NotificationsOutlined'
import IconButton from '../IconButton/IconButton'
import NotificationList from './Notification/NotificationList/NotificationList';


const notifications = [
    {to: '/user1', name: 'Niks Yelena', img: userImg, notification: 'Added a New Post'},
    {to: '/user2', name: 'Yeena khan', img: userImg, notification: 'Commented on your photo'}
]

function NotificationDropdown() {
    const [isOpen, setisOpen] = useState(false);
    
    const toggleNotification = () => setisOpen(!isOpen);

    return (
        <div className={classes.NotificationDropdown}>
        <IconButton onClick={toggleNotification}>
            <NotificationsOutlined />
        </IconButton>
        {isOpen && (
            <div className={classes.NotificationWrapper}>
                <h4>Notifications</h4>
                <NotificationList notifications={notifications} />
            </div>
        )}
        </div>
    )
}

export default NotificationDropdown
