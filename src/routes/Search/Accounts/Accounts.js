import React from 'react'
import Like from '../../../components/Likes/Like/Like'
import postPerson from '../../../assets/images/user-11.png'
import classes from './Accounts.module.css'
const likes = [
    {name: 'vixen ser', profile: '/user1', img: postPerson},
    {name: 'xixen vir', profile: '/user2', img: postPerson}
]

function Accounts() {
    return (
        <div className={classes.Accounts}>
            {likes.map(like => {
                return <Like like={like} />
            })}
        </div>
    )
}

export default Accounts
