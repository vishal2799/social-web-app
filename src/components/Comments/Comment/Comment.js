import React from 'react'
import UserDetail from '../../UI/UserDetail/UserDetail'

const Comment = (props) => {
    return (
        <div>
            <UserDetail name={props.name} img={props.img} comment={props.comment} userId={props.userId}/>
        </div>
    )
}

export default Comment
