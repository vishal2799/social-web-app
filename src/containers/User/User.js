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
import UserImg from '../../assets/images/user-11.png'
import UserDetail from '../../components/UI/UserDetail/UserDetail';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import PostList from '../../components/Post/PostList/PostList'
import PostContextProvider from '../../Context/Post/PostContext';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import SlowMotionVideoOutlinedIcon from '@mui/icons-material/SlowMotionVideoOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function User() {

    let [followings, setFollowings] = useState([]);
    let [followers, setFollowers] = useState([]);
    let [followingLoading, setFollowingLoading] = useState(false);
    let [following, setFollowing] = useState(false);

    let navigate = useNavigate();
    let params = useParams();
    const { user } = useContext(AuthContext)

    let [loading, setLoading] = useState(false);
    
    useEffect(() => {
        getFollowings(params.userId);
        //isFollowing(params.userId);
    }, [params.userId]);

    useEffect(() => {
        getFollowers(params.userId);
    }, [params.userId])


    const getFollowers = (id) => {
        setLoading(true);
        let url = `http://localhost:3000/followingRelationships?followingId=${id}` 
        let token = localStorage.getItem('user');
        token = JSON.parse(token).accessToken;
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log(res.data);
            setFollowers(res.data);
            for(let data of res.data) {
                if(data.userId === user.user.id) {
                  setFollowing(true);
                  console.log('following')
                  setLoading(false);
                } else {
                  setFollowing(false);
                  console.log('not following')
                  setLoading(false);
                }
              }
            setLoading(false);
        })
        .catch(function(error) {
            console.log(error);
            setLoading(false);
        })
    }

    const getFollowings = (id) => {
            setLoading(true);
            let url = `http://localhost:3000/followingRelationships?userId=${id}` 
            let token = localStorage.getItem('user');
            token = JSON.parse(token).accessToken;
            axios.get(url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(function (res) {
                setFollowings(res.data);
                setLoading(false);
            })
            .catch(function(error) {
                console.log(error);
                setLoading(false);
            })
        }

    // const getFollowings = (id) => {
    //     setLoading(true);
    //     let url = `http://localhost:3000/followingRelationships?userId=${user.user.id}` 
    //     let token = localStorage.getItem('user');
    //     token = JSON.parse(token).accessToken;
    //     axios.get(url, {
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         }
    //     })
    //     .then(function (res) {
    //         setFollowings(res.data);
    //         for(let following of res.data) {
    //             if(following.followingId === +id) {
    //               setFollowing(true);
    //               console.log('following')
    //               setLoading(false);
    //             } else {
    //               setFollowing(false);
    //               console.log('not following')
    //               setLoading(false);
    //             }
    //           }
    //         setLoading(false);
    //     })
    //     .catch(function(error) {
    //         console.log(error);
    //         setLoading(false);
    //     })
    // }
     
  
    let followersofuser;
    let followingsofuser
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
                <img src={UserImg} />
                <h4>Alicia Bunker</h4>
                <div className={classes.ProfileDetails}>
                    <div>
                        <h4>3</h4>
                        <p>Posts</p>
                    </div>
                    <div>
                        <h4>92</h4>
                        <p>Followers</p>
                    </div>
                    <div>
                        <h4>121</h4>
                        <p>Following</p>
                    </div>
                </div>
                <div className={classes.CTA}>
                    <Button variant="contained">Follow</Button>
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
