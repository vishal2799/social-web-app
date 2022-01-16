import React, { useState } from 'react'
import IconButton from '../IconButton/IconButton'
import MoreList from './More/MoreList/MoreList';
import classes from './MoreDropdown.module.css'
import userImg from '../../../assets/images/user-11.png'
import MoreHorizOutlined from '@mui/icons-material/MoreHorizOutlined';

const notifications = [
    {to: '/user1', name: 'Niks Yelena', img: userImg, notification: 'Added a New Post'},
    {to: '/user2', name: 'Yeena khan', img: userImg, notification: 'Commented on your photo'}
]

function MoreDropdown() {
    const [isOpen, setisOpen] = useState(false);
    
    const toggleMore = () => setisOpen(!isOpen);

    return (
        <div className={classes.MoreDropdown}>
        <IconButton onClick={toggleMore} style1={true} iconStyle={{background: 'aqua', padding: '5px'}}>
            <MoreHorizOutlined />
        </IconButton>
        {isOpen && (
            <div className={classes.MoreWrapper}>
                <h4>Notifications</h4>
                <MoreList notifications={notifications} />
            </div>
        )}
        </div>
    )
}

export default MoreDropdown
