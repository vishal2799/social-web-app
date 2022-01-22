import axios from 'axios';
import Tabs from "../../components/UI/Tabs/Tabs";
import "../../components/UI/Tabs/Tabs.css"
import Accounts from '../../routes/Search/Accounts/Accounts';
import Posts from '../../routes/Search/Posts/Posts';
import Tags from '../../routes/Search/Tags/Tags';
import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"; 
import { AuthContext } from "../../Context/Auth/AuthContext";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import Button from '../../components/UI/Button/Button'
import classes from './User.module.css'
import IconButton from '../../components/UI/IconButton/IconButton';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import SlowMotionVideoOutlinedIcon from '@mui/icons-material/SlowMotionVideoOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function User() {

    let navigate = useNavigate();
    let params = useParams();
    const { user } = useContext(AuthContext)

    let [loading, setLoading] = useState(false);
    let [profile, setProfile] = useState();
    let [followings, setFollowings] = useState([]);
    let [followers, setFollowers] = useState([]);
    let [following, setFollowing] = useState(false);
    let [follower, setFollower] = useState();
    

    if(user.user.id == params.userId) {
        navigate("/profile")
    }

    const toggleFollow = () => {
      if(!loading) {
      setLoading(true);
      let token = localStorage.getItem('user');
        token = JSON.parse(token).accessToken;
      if(following){
        let id = follower.id;
        let url = "http://localhost:3000/followingRelationships/" + id;

        axios.delete(url, { 
          headers: { 
            'Authorization': `Bearer ${token}`
           }
          })
          .then(function (response) {
            setFollowing(prevState => !prevState);
            setFollowers(followers.filter(follower => follower.id !== id));
            setLoading(false);
            console.log(response);
        })
          .catch(function (error) {
            setLoading(false);
            console.log(error);
          });  

      } else {
        let url = "http://localhost:3000/followingRelationships";
        let userId = localStorage.getItem('user');
        userId = JSON.parse(userId).user.id;
        let followingId = +(params.userId)
        axios.post(url, {userId, followingId}, 
          { headers: { 'Authorization': `Bearer ${token}` }
          })
          .then(function (response) {
            setFollowing(prevState => !prevState);
            setFollowers([...followers, response.data])
            setFollower(response.data);
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

    const isFollowing = (dataa) => {
        for(let data of dataa) {
            if(data.userId === user.user.id) {
              setFollowing(true);
              setFollower(data);
            } else {
              setFollowing(false);
            }
          }
    }

    const getUserData = (id) => {
        setLoading(true);
        let token = localStorage.getItem('user');
        token = JSON.parse(token).accessToken;
        let endpoints = [
          `http://localhost:3000/userProfile?userId=${id}`,
          `http://localhost:3000/followingRelationships?followingId=${id}`,
          `http://localhost:3000/followingRelationships?userId=${id}`
        ];

          Promise.all(endpoints.map((endpoint) => axios.get(endpoint, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }))).then(([{data: user}, {data: followers}, {data: following}] )=> {
            // console.log({ user, followers, following });
            setFollowings(following);
            setProfile(user[0]);
            setFollowers(followers);
            isFollowing(followers);
            setLoading(false);
      }); 

}
    
useEffect(() => {
        getUserData(params.userId);
    }, [params.userId]);
    
   
    let followersofuser;
    let followingsofuser;
    if(loading){
     followersofuser = <div>Loading Followers...</div>;
     followingsofuser = <div>Loading Followings...</div>;
    } else {
     followersofuser = followers.map((follower) => 
         <div>Userss: {follower.followingId} followed by user {follower.userId}</div>
    )
    followingsofuser = followings.map((following) => 
         <li>Userss: {following.followingId} followed by user {following.userId}</li>
    )
   }

    return !loading ?  (
    <div className={classes.Container}>
         {/* <div>
        {params.userId} {following ? 'following' : 'follow'}
         </div>
         {followersofuser}
         <ul>{followingsofuser}</ul> */}

        <div style={{padding: '10px 15px'}}>
            <Button onClick={() => navigate(-1)} variant="text" startIcon={<ArrowBackIosOutlinedIcon />}>Back</Button>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className={classes.Profile}>
                <img src={profile && profile.img} />
                <h4>{profile && profile.name}</h4>
                <div className={classes.ProfileDetails}>
                    <div>
                        <h4>3</h4>
                        <p>Posts</p>
                    </div>
                    <div>
                        <h4>{followers.length}</h4>
                        <p>Followers</p>
                    </div>
                    <div>
                        <h4>{followings.length}</h4>
                        <p>Following</p>
                    </div>
                </div>
                <div className={classes.CTA}>
                    <Button variant="contained" onClick={toggleFollow}>{following ? 'Following' : 'Follow'}</Button>
                    <span><IconButton><EmailOutlinedIcon /></IconButton></span>
                    <span><IconButton><MoreHorizOutlinedIcon /></IconButton></span>
                </div>
            </div>
            <div className={classes.Post}>
            <Tabs>
          <div label={<GridOnOutlinedIcon />}>
          <Posts />
          </div>
          <div label={<SlowMotionVideoOutlinedIcon />}>
            <Accounts />
          </div>
          <div label={<PersonOutlineOutlinedIcon />}>
            <Tags />
          </div>
        </Tabs>
            </div>
        </div>
         </div> 
    ) : (<div>Loading...</div>)
}

export default User
