import React from 'react'
import { Link } from 'react-router-dom'
import UserDetail from '../../UserDetail/UserDetail'
function Notification({details}) {

    return (
        <Link to={details.to} style={{textDecoration: 'none'}} >
        <UserDetail name={details.name} img={details.img} notification={details.notification} mb="10px" />
        </Link>
    )
}

export default Notification
