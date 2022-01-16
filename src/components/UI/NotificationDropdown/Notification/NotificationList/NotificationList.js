import React from 'react'
import Notification from '../Notifcation'

function NotificationList({notifications}) {
    const notification = notifications.map((notification) => {
        return <Notification details={notification} />
    })
    return notification
}

export default NotificationList
