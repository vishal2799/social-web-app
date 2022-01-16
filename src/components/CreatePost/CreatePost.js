import React from 'react'
import classes from './CreatePost.module.css'
import '../../common/css/global.css'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import userImg from '../../assets/images/user-7.png'
import Button from '../UI/Button/Button';
import IconButton from '../UI/IconButton/IconButton';

const createPost = (props) => {
    
    return (
        <div className="widgetWrapper">
            <Button variant="text" textColor="lightgrey" iconColor="dodgerblue" iconBackgroundColor="#eee" startIcon={<BorderColorOutlinedIcon />} onClick={props.handleSubmit}>Create Post</Button>
            <div style={{display: 'flex'}}>
                <img src={userImg} className={classes.Img} />
                <textarea className={classes.Textarea} name="caption" placeholder="What's on your mind?" value={props.caption} onChange={props.handleChange} />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: 'flex'}}>
                
            <Button variant="text" textColor="black" iconColor="red" startIcon={<VideocamOutlinedIcon />}>Live Video</Button>
            <Button variant="text" textColor="black" iconColor="green" startIcon={<InsertPhotoOutlinedIcon />}>Photo/Video</Button>
            <Button variant="text" textColor="black" iconColor="orange" startIcon={<PhotoCameraOutlinedIcon />}>Feeling/Activity</Button>
                </div>
            <IconButton>
                <MoreHorizOutlinedIcon />
            </IconButton>
            </div>
        </div>
    )
    }

export default createPost
