import React, { useState, useEffect } from 'react'
import PostList from '../../../components/Post/PostList/PostList'

function Posts() {

    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState(null);

    const getPosts = () => {
        const accessToken = JSON.parse(localStorage.getItem("token"));
        setIsLoading(true);
                fetch("http://localhost:3000/posts", {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
                })
                .then(res => {
                   if(res.status === 200) {
                       return res.json();
                   } 
                   return Promise.reject(res);
                })
                .then(result => {
                    setIsLoading(false);
                    setPosts(result);
                })
                .catch(e => {
                    if(e.status === 401){
                        console.log('Un-authorized');
                        this.props.Logout();
                    }
                })
            }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div>
            { isLoading ? <div>Loading...</div> : <PostList postDetails={posts} /> }
        </div>
    )
}

export default Posts
