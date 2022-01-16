import React from 'react'
import Chat from '../Chat'

function ChatList({chats}) {
    const chat = chats.map((chat) => {
        return <Chat chat={chat} />
    })
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {chat}
        </div>
    )
}

export default ChatList
