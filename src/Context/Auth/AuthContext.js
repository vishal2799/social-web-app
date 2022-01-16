import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    let navigate = useNavigate();
    let location = useLocation();

  let from = location.state?.from?.pathname || "/";

    const [isLoading, setIsLoading] = useState(true);

    const [followingLoading, setFollowingLoading] = useState(false);

    const [followings, setFollowings] = useState(null);

    const [following, setFollowing] = useState(false);

    const [followers, setFollowers] = useState(null);

    const [followersLoading, setFollowersLoading] = useState(null);

    const [loadingProfile, setLoadingProfile] = useState(false);

    const [profile, setProfile] = useState(null);

    const getUser = () => {
        const user = localStorage.getItem('user');
        const updatedUser = JSON.parse(user);
        return updatedUser
    }

    const getFollowings = (id) => {
      setFollowingLoading(true);
      let url = `http://localhost:3000/followingRelationships?userId=${user.user.id}` 
      let token = localStorage.getItem('user');
      token = JSON.parse(token).accessToken;
      axios.get(url, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      })
      .then(function (res) {
          setFollowings(res.data);
          console.log(res.data);
          setFollowingLoading(false);
          isFollowing(id);
      })
      .catch(function(error) {
          console.log(error);
      })
    }

    const getFollowers = () => {
      setFollowersLoading(true);
      let url = `http://localhost:3000/followingRelationships?followingId=${user.user.id}` 
      let token = localStorage.getItem('user');
      token = JSON.parse(token).accessToken;
      axios.get(url, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      })
      .then(function (res) {
          setFollowers(res.data);
          console.log(res.data);
          setFollowersLoading(false);
      })
      .catch(function(error) {
          console.log(error);
      })
    }

    const isFollowing = (id) => {
      if(followings) {
        for(let following of followings) {
          if(following.followingId === +id) {
            setFollowing(true);
          } else {
            setFollowing(false);
          }
        }
      }
    }

    const getProfile = () => {
      let id = localStorage.getItem('user');
      id = JSON.parse(id).user.id;
      setLoadingProfile(true);
      let url = "http://localhost:3000/userProfile?userId=" + id;
      let token = localStorage.getItem('user');
      token = JSON.parse(token).accessToken;
      axios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(function (res) {
        setProfile(res.data);
        setLoadingProfile(false);
      })
      .catch(function(error) {
        console.log(error);
      })
    }


    const [user, setUser] = useState(getUser());
  
    const saveUser = user => {
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
    };

  const loginUser = (email, password) => {
    let url = "http://localhost:3000/login";
    axios.post(url, {
        email,
        password
      })
      .then(function (response) {
        saveUser(response.data);
        setIsLoading(false);
         getFollowings();
        // getFollowers();
        <Navigate to="/" replace={true} />
    })
      .catch(function (error) {
        setIsLoading(false);
      });
  };


  const signupUser = (emails, passwords, names, imgs) => {
    let url = "http://localhost:3000/register";
    console.log(emails, passwords, names, imgs + 'register')
    axios.post(url, {
        email: emails,
        password: passwords,
        name: names,
        img: imgs
      })
      .then(function (response) {
        saveUser(response.data);
        const signupUserData = response.data.user;
        const accessToken = response.data.accessToken;
        // signupUserData.push(name, email, id, img, response.data.accessToken);
        setIsLoading(false);
        userProfile(signupUserData, accessToken);
          <Navigate to="/" replace={true} />
      })
      .catch(function (error) {
        setIsLoading(false);
      });
      // console.log(signupUserData);
  };

  const userProfile = (signupUserData, accessToken) => {
    const url = "http://localhost:3000/userProfile";
    const {name, email, img} = signupUserData;
    const userId = signupUserData.id;
    const headers = {
      'Authorization': `Bearer ${accessToken}`
    }
    console.log(name, email, img, userId, accessToken);
    axios.post(url, {
      name,
      userId,
      email,
      img
    },
    {
      headers: headers
    }
    )
    .then(res => {
      console.log(res.data);
    })
    .catch(error => {
      setIsLoading(false);
    })
  }

  const logoutUser = (id) => {
    localStorage.removeItem('user');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser, isLoading, getProfile, loadingProfile, signupUser, following, getFollowings, followingLoading, followings, followers }}>
      {props.children}
    </AuthContext.Provider>
  );
}
 
export default AuthContextProvider;