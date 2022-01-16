import React, { useContext, useEffect } from 'react'
import Comment from './Comment/Comment'
import CreateComment from './CreateComment/CreateComment'
import classes from './Comments.module.css'
import { PostContext } from '../../Context/Post/PostContext';

const Comments = (props) => {

    const { comments, getComments, loadingComments, addComment } = useContext(PostContext);
    useEffect(() => {
        getComments();
      }, [])

      return !loadingComments ?  (
        <div className={classes.Comments}>
            {comments.map(comment => {
                return <Comment comment={comment.comment} img={comment.img} name={comment.name} userId={comment.userId} />
            })}
            <CreateComment addComment={addComment} postId={props.postId} />
        </div>
    ) : (<div className="empty">Loading ....</div>);
}

export default Comments
