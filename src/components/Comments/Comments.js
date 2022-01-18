import React, { useContext, useState, useEffect } from 'react'
import Comment from './Comment/Comment'
import CreateComment from './CreateComment/CreateComment'
import classes from './Comments.module.css'
import { PostContext } from '../../Context/Post/PostContext';
import axios from 'axios';
const Comments = (props) => {

    const [commentss, setCommentss] = useState([]);
    const [loadingCommentss, setLoadingCommentss] = useState(false);

    const getCommentss = (postId) => {
        setLoadingCommentss(true);
        let url = "http://localhost:3000/comments?postId=" + postId;
        let token = localStorage.getItem('user');
        token = JSON.parse(token).accessToken;
        axios.get(url, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(function (res) {
          setCommentss(res.data);
          setLoadingCommentss(false);
        })
        .catch(function(error) {
          console.log(error);
          setLoadingCommentss(false);
        })
      }

    const { comments, getComments, loadingComments, addComment } = useContext(PostContext);
    useEffect(() => {
        getCommentss(props.postId);
      }, [])

      return !loadingCommentss ?  (
        <div className={classes.Comments}>
            {commentss.map(comment => {
                return <Comment comment={comment.comment} img={comment.img} name={comment.name} userId={comment.userId} />
            })}
            <CreateComment addComment={addComment} postId={props.postId} />
        </div>
    ) : (<div className="empty">Loading ....</div>);
}

export default Comments
