import React, { useEffect, useContext } from 'react'
import Post from '../Post'
import { PostContext } from '../../../Context/Post/PostContext';


const PostList = (props) => {
    const { posts, getPosts, isLoading } = useContext(PostContext);
    useEffect(() => {
        getPosts();
      }, [])

      return !isLoading ? (
        <div>
            {posts.map((p) => {
                return <Post post={p} key={p.id} />
            })}
        </div>
    ) : (
        <div className="empty">Loading ....</div>
      );
}

export default PostList
