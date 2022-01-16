import React from 'react'
import InputWithIcon from '../../UI/InputWithIcon/InputWithIcon'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useState } from 'react';
import IconButton from '../../UI/IconButton/IconButton';
import SendIcon from '@mui/icons-material/Send';

const CreateComment = ({addComment, postId}) => {
    const [input, setInput] = useState('');
    const creatingComment = () => {
        addComment(input, postId);
        setInput('');
    }
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <InputWithIcon onChange={(e) => setInput(e.target.value)} value={input} alignItems="center" mb="0" icon={<EmojiEmotionsIcon />} border="none" background="#eee" width="100%" />
        <IconButton onClick={creatingComment}>
            <SendIcon />
        </IconButton>
        </div>
    )
}

export default CreateComment
