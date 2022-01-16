import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../UI/Button/Button'

const Like = ({like}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={like.img} />
                <Link to={'users/' + like.userId} style={{textDecoration: 'none', marginLeft: '10px', 
                color: 'black', textTransform: 'capitalize'}}>{like.name}</Link>
            </div>
            <Button variant="contained">Add Friend</Button>
        </div>
    )
}

export default Like
