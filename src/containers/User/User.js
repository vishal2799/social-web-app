import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"; 
import { AuthContext } from "../../Context/Auth/AuthContext";

function User() {

    let navigate = useNavigate();
    let params = useParams();
    const { user, getFollowings, followingLoading, following } = useContext(AuthContext)

    let [loading, setLoading] = useState(false);
    
    // let  { getUser, user, userLoading } = useContext(UserContext);

    useEffect(() => {
        getFollowings(params.userId);
        //isFollowing(params.userId);
    }, [])

    // return !userLoading ? (
    //     <div>{user.name}</div>
    // ) : (<div>Loading User....</div>);

    return !followingLoading ?  (<div className='userContainer'>{params.userId} {following ? 'following' : 'follow'} </div>) : (<div>Loading...</div>)
}

export default User
