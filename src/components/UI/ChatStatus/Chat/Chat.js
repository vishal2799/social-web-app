import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../Button/Button'
import classes from './Chat.module.css'

function Chat({chat}) {
    const navigate = useNavigate();
    const toggleChat = (link) => {
        navigate(link);
    }
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Button variant="text" onClick={() => toggleChat(chat.link)} img={<img src={chat.img} />}>{chat.name}</Button>
        <span className={classes.Dot}></span>
        </div>
    )
}

export default Chat
