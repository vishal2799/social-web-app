import axios from 'axios';
import React, { createContext, useState } from 'react';

export const PostContext = createContext();

const PostContextProvider = (props) => {

    const [isLoading, setIsLoading] = useState(false);

    const [addLikeLoading, setAddLikeLoading] = useState(false);

    const [loadingComments, setLoadingComments] = useState(false);

  const [posts, setPosts] = useState([]);

  const [comments, setComments] = useState([]);

  const [likes, setLikes] = useState([]);
  const [loadingLikes, setLoadingLikes] = useState(false);


  const getPosts = (id) => {
    setIsLoading(true);
    let userIds = [1, 3];
    userIds = userIds.join("&userId=");
    // let url = "http://localhost:3000/posts?userId=" + userIds;
    let url = "http://localhost:3000/posts"
    let token = localStorage.getItem('user');
    token = JSON.parse(token).accessToken;
    console.log(token + ' ' + 'getPost');
    axios.get(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(function (res) {
        setPosts(res.data);
        setIsLoading(false);
    })
    .catch(function(error) {
        console.log(error);
        setIsLoading(false);
    })
  }

  const getComments = (postId) => {
    setLoadingComments(true);
    let url = "http://localhost:3000/comments?postId=" + postId;
    let token = localStorage.getItem('user');
    token = JSON.parse(token).accessToken;
    axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(function (res) {
      setComments(res.data);
      setLoadingComments(false);
    })
    .catch(function(error) {
      console.log(error);
      setLoadingComments(false);
    })
  }

  const getLikes = (postId, callback) => {
    setLoadingLikes(true);
    let url = "http://localhost:3000/likes?postId=" + postId;
    let token = localStorage.getItem('user');
    token = JSON.parse(token).accessToken;
    axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(function (res) {
      setLikes(res.data);
      setLoadingLikes(false);
      callback(res.data);
    })
    .catch(function(error) {
      setLoadingLikes(false);
      console.log(error);
    })
  }

  const addPost = (title, author, userId) => {
    let url = "http://localhost:3000/posts";
    let token = localStorage.getItem('user');
    token = JSON.parse(token).accessToken;
    axios.post(url, { title, author, userId }, 
      { headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(function (response) {
        console.log(response);
        setPosts([...posts, {title, author, id: response.data.id, userId}])
        setIsLoading(false);
    })
      .catch(function (error) {
        setIsLoading(false);
      });  
  };

  const addComment = (comment, postId) => {
    let url = "http://localhost:3000/comments";
    let userId = localStorage.getItem('user');
      userId = JSON.parse(userId).user.id;
    let img = localStorage.getItem('user');
      img = JSON.parse(img).user.img;
    let name = localStorage.getItem('user');
    name = JSON.parse(name).user.name;
    let token = localStorage.getItem('user');
    token = JSON.parse(token).accessToken;
    axios.post(url, { comment, postId, userId, img, name }, 
      { headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(function (response) {
        console.log(response);
        setComments([...comments, {comment, id: response.data.id, userId, name, img}])
        setIsLoading(false);
    })
      .catch(function (error) {
        setIsLoading(false);
      });  
  };


   const addLike = (liked, likedId, postId) => {
    if(liked) {
      setAddLikeLoading(true);
      let url = "http://localhost:3000/likes/" + likedId;
      let token = localStorage.getItem('user');
      token = JSON.parse(token).accessToken;
      axios.delete(url, {
          headers: {
              'Authorization': `Bearer ${token}`
            }
      })
      .then((res) => {
          setLikes(prev => (prev.filter(like => like.id !== likedId)));
          setAddLikeLoading(false);
          console.log(res + 'addLike new delete');
      })
      .catch(err => {
          setAddLikeLoading(false);
      })
    } else {
      setAddLikeLoading(true);
    let url = "http://localhost:3000/likes";
    let userId = localStorage.getItem('user');
    userId = JSON.parse(userId).user.id;
    let img = localStorage.getItem('user');
    img = JSON.parse(img).user.img;
    let name = localStorage.getItem('user');
    name = JSON.parse(name).user.name;
    let token = localStorage.getItem('user');
    token = JSON.parse(token).accessToken;
    axios.post(url, { postId, userId, img, name }, 
      { headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(function (response) {
        console.log(response);
        setLikes(prev => ([...prev, {id: response.data.id, userId, name, img}]))
        setAddLikeLoading(false);
        console.log(response + 'addlike new like')
    })
      .catch(function (error) {
        setAddLikeLoading(false);
      });  
    }
   };

  const removeLike = (id) => {
    let url = "http://localhost:3000/likes" + id;
    let token = localStorage.getItem('user');
    token = JSON.parse(token).accessToken;
    axios.delete(url, {
        headers: {
            'Authorization': `Bearer ${token}`
          }
    })
    .then((res) => {
        setLikes(prev => (prev.filter(like => like.id !== id)));
    })
    .catch(err => {
        setIsLoading(false);
    })
  };

  const isLiked = (postId, id) => {
    let userid = localStorage.getItem('user');
      userid = JSON.parse(userid).user.id;
      for(let like of likes) {
        if(like.userId === userid) {
          removeLike(id);
          console.log('UnLiked');
        } else {
          addLike(postId);
          console.log('Liked');
        }
      }
  }

  const removePost = (id) => {
    let url = "http://localhost:3000/posts/" + id;
    let token = localStorage.getItem('user');
    token = JSON.parse(token).accessToken;
    axios.delete(url, {
        headers: {
            'Authorization': `Bearer ${token}`
          }
    })
    .then((res) => {
        setPosts(posts.filter(post => post.id !== id));
    })
    .catch(err => {
        setIsLoading(false);
    })
  }

  return (
    <PostContext.Provider value={{ posts, addPost, removePost, getPosts, isLoading, addComment, addLike, getComments, comments, loadingComments, getLikes, likes, loadingLikes, isLiked, addLikeLoading }}>
      {props.children}
    </PostContext.Provider>
  );
}
 
export default PostContextProvider;