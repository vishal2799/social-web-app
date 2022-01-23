import React, { useState, useContext, useEffect } from 'react'
import classes from './Post.module.css'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import UserDetail from '../UI/UserDetail/UserDetail';
import Button from '../UI/Button/Button';
import Comments from '../Comments/Comments'
import Likes from '../Likes/Likes'
import MoreDropdown from '../UI/MoreDropdown/MoreDropdown';
import Modal2 from '../UI/Modal2/Modal2';
import { PostContext } from '../../Context/Post/PostContext';
import { AuthContext } from '../../Context/Auth/AuthContext';
import axios from 'axios'

// const comments = [
//     {comment: 'Comment 1', img: postPerson, name: 'Alicia Bunker'},
//     {comment: 'Comment 2', img: postPerson, name: 'Emma Stone'}
// ]

// const likes = [
//     {name: 'vixen ser', profile: '/user1', img: postPerson},
//     {name: 'xixen vir', profile: '/user2', img: postPerson}
// ]

const Post = ({ post }) => {
    const { removePost } = useContext(PostContext);
    const { user } = useContext(AuthContext);
    const [postComments, setPostComments] = useState(false);

    const [comments, setComments] = useState([]);
   
    const [mName, setMName] = useState('');
    const [modal, setModal] = useState(false);

    const [loading, setLoading] = useState(false);
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState([]);
    const [like, setLike] = useState();

    useEffect(() => {
      getPostData(post.id);
    }, [post.id]);
    

    const getPostData = (id) => {
        setLoading(true);
        let token = localStorage.getItem('user');
        token = JSON.parse(token).accessToken;
        let endpoints = [
          `http://localhost:3000/comments?postId=${id}`,
          `http://localhost:3000/likes?postId=${id}`
        ];

          Promise.all(endpoints.map((endpoint) => axios.get(endpoint, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }))).then(([{data: comments}, {data: likes}] )=> {
            // console.log({ user, followers, following });
            setComments(comments);
            setLikes(likes);
            isLiked(likes);
            setLoading(false);
      }); 

}

    const toggleLike = () => {
        if(!loading) {
        setLoading(true);
        let token = localStorage.getItem('user');
          token = JSON.parse(token).accessToken;
        if(liked){
          let id = like.id;
          let url = "http://localhost:3000/likes/" + id;
  
          axios.delete(url, { 
            headers: { 
              'Authorization': `Bearer ${token}`
             }
            })
            .then(function (response) {
              setLiked(prevState => !prevState);
              setLikes(likes.filter(like => like.id !== id));
              setLoading(false);
              console.log(response);
          })
            .catch(function (error) {
              setLoading(false);
              console.log(error);
            });  
  
        } else {
          let url = "http://localhost:3000/likes";
          let userId = localStorage.getItem('user');
          userId = JSON.parse(userId).user.id;
          let postId = post.id; 
          axios.post(url, {userId, postId}, 
            { headers: { 'Authorization': `Bearer ${token}` }
            })
            .then(function (response) {
              setLiked(prevState => !prevState);
              setLikes([...likes, response.data])
              setLike(response.data);
              setLoading(false);
              console.log(response);
          })
            .catch(function (error) {
              setLoading(false);
              console.log(error);
            });
  
        }
  
      }
      
      }
  
      const isLiked = (dataa) => {
          for(let data of dataa) {
              if(data.userId === user.user.id) {
                setLiked(true);
                setLike(data);
              } else {
                setLiked(false);
              }
            }
      }


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

    return (
        <>
        <Modal2 show={modal} modalClosed={hideModal}>
        {mName === 'like' ? <Likes postId={post.id} /> : <Comments postId={post.id} /> }
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
                            <Button variant="text" width="33%" onClick={toggleLike} startIcon={liked ? <FavoriteIcon /> : <FavoriteBorderIcon />} >{liked ? 'Liked' : 'Like'}</Button>
                            <Button variant="text" width="33%" borderLeft="1px solid #eee" borderRight="1px solid #eee" startIcon={<ChatBubbleOutlineOutlinedIcon />} onClick={() => showModal('comment')} >Comment</Button>
                            <Button variant="text" width="33%" startIcon={<ShareOutlinedIcon />}>Share</Button>
                </div>
                </div>
                    </>
    )
}

export default Post
