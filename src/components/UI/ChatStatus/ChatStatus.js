import React, { useState } from 'react'
import classes from './ChatStatus.module.css'
import userImg from '../../../assets/images/user-11.png'
import { MessageOutlined } from '@mui/icons-material';
import IconButton from '../IconButton/IconButton'
import ChatList from './Chat/ChatList/ChatList';


const chats = [
    {name: 'Vixen Ser', img: userImg, link: '/user1'},
    {name: 'Xixen Siri', img: userImg, link: '/user2'}
];

function ChatStatus() {

    const [isOpen, setisOpen] = useState(false);
    const toggleChat = () => setisOpen(!isOpen);

    const cssClasses = [
        classes.Modal,
        isOpen ? classes.ModalOpen : classes.ModalClosed
      ];

    return (
        <div className={classes.ChatStatusDropdown}>
        <IconButton onClick={toggleChat}>
            <MessageOutlined />
        </IconButton>
            <div className={cssClasses.join(' ')} >
                <h4>Chat Status</h4>
                <ChatList chats={chats} />
            </div>
        </div>
    )
}

export default ChatStatus
