import React, { useState, useContext, useEffect } from 'react'
import classes from './Post.module.css'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import postPerson from '../../assets/images/user-7.png'
import UserDetail from '../UI/UserDetail/UserDetail';
import Button from '../UI/Button/Button';
import Comments from '../Comments/Comments'
import Likes from '../Likes/Likes'
import MoreDropdown from '../UI/MoreDropdown/MoreDropdown';
import Modal2 from '../UI/Modal2/Modal2';
import { PostContext } from '../../Context/Post/PostContext';
import { AuthContext } from '../../Context/Auth/AuthContext';

// const comments = [
//     {comment: 'Comment 1', img: postPerson, name: 'Alicia Bunker'},
//     {comment: 'Comment 2', img: postPerson, name: 'Emma Stone'}
// ]

const likes = [
    {name: 'vixen ser', profile: '/user1', img: postPerson},
    {name: 'xixen vir', profile: '/user2', img: postPerson}
]

const Post = ({ post }) => {
    const { removePost, addLike, isLiked } = useContext(PostContext);
    const { user } = useContext(AuthContext);
    const [postComments, setPostComments] = useState(false);
    const [mName, setMName] = useState('');
    const [modal, setModal] = useState(false);

    const showModal = (mName) => {
        setMName(mName);
        setModal(true);
      };
    
    const hideModal = () => {
        setModal(false);
    };

    const commentsOpenHandler = () => {
        setPostComments(true);
    }

    const commentsCancelHandler = () => {
        setPostComments(false);
    }

    const clickLike = (postId, id) => {
        addLike(postId);
        isLiked(id);
    }

    return (
        <>
        <Modal2 show={modal} modalClosed={hideModal}>
        {mName === 'like' ? <Likes likes={likes} /> : <Comments postId={post.id} /> }
            </Modal2>                    
        <div className={classes.Post}>
                        <div className={classes.PostProfile}>
                           <UserDetail userId={post.userId} name={post.userName} img={post.userImg} time={post.time} />
                           <div>
                               <MoreDropdown />
                            </div> 
                        </div>
                        <p>{post.caption} See more</p>
                        <img src={post.postImg} />
                        {post.userId === user.user.id ? <button onClick={() => removePost(post.id)}>Delete</button> : ''}
                        <div className={classes.PostSocialDetails} style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee'}}>
                            <Button variant="text" startIcon={<ThumbUpOutlinedIcon />} onClick={() => showModal('like')}>{post.likesCount}</Button>
                            <div>
                                <Button variant="text" onClick={() => showModal('comment')}>{post.commentsCount} comments &middot; {post.sharesCount} shares</Button>
                            </div>
                        </div>
                        <div className={classes.PostSocial}>
                                {/* <Button variant="text" width="33%" startIcon={<ThumbUpOutlinedIcon />} onClick={() => clickLike(post.id, like.id)}>Like</Button> */}
                                <Button variant="text" width="33%" borderLeft="1px solid #eee" borderRight="1px solid #eee" startIcon={<ChatBubbleOutlineOutlinedIcon />} onClick={() => showModal('comment')} >Comment</Button>
                            <Button variant="text" width="33%" startIcon={<ShareOutlinedIcon />}>Share</Button>
                </div>
                </div>
                    </>
    )
}

export default Post