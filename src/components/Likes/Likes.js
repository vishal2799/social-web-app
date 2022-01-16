import React, { useEffect, useContext } from 'react'
import Like from './Like/Like'
import CreateLike from './CreateLike/CreateLike'
import { PostContext } from '../../Context/Post/PostContext';

const Likes = (props) => {
    const { likes, getLikes, loadingLikes } = useContext(PostContext);
    
    useEffect(() => {
        getLikes();
      }, [])

      return !loadingLikes ? (
        <div>
            {likes.map(like => {
                return <Like like={like} />
            })}
        </div>
    ) : (<div className="empty">Loading ....</div>);
}

export default Likes
