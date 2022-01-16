import React from 'react'
import { Link } from 'react-router-dom'
import TextOne from '../TextOne/TextOne'
import classes from './UserDetail.module.css'

const userDetail = (props) => {
    let text, mb;
    if(props.mb){
         mb = props.mb;
    }
    if(props.mutual){
        text = props.mutual + " mutual friends";
    }
    if(props.time){
        text = props.time + " mins ago";
    }
    if(props.comment){
        text = props.comment
    }
    if(props.notification){
        text = props.notification
    }
    return (
        <div className={classes.UserDetail} style={{marginBottom: mb}}>
        <Link to={'users/' + props.userId}>
        <img src={props.img} style={{width: '50px'}} />
        </Link>
        <div>
            <Link to={'users/' + props.userId} style={{margin: '0', padding: '0', textDecoration: 'none', fontWeight: 700, fontSize: '12px', color: '#212529'}}>{props.name}</Link>
            <TextOne comment mt="5px"> {text}</TextOne>
        </div>
    </div>
    )
}

export default userDetail
