import React, { useEffect, useState } from 'react'
import PostList from '../../components/Post/PostList/PostList'
const Profile = () => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);


    const getPosts = async () => {
        const accessToken = JSON.parse(localStorage.getItem("token"));
       const res = await fetch(`http://localhost:3000/posts?userId=3`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
        });
        if(res.status === 200){
         return await res.json();   
        }
        return Promise.reject(res);
    }

    useEffect(() => {
        getPosts().then((data) => setPosts(data)).catch(e => {
            if(e.status === 401){
                console.log('Un-authorized');
                this.props.Logout();
            }
            console.log('Profile getPosts catch')
        })
      }, [])

    return (
        
        <div>
         { loading ? <div>Loading...</div> : posts ? <PostList postDetails={posts} /> : <div>Loading Posts...</div> }
        </div>
    )
}

export default Profile
