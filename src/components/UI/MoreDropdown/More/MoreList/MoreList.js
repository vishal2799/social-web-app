import React from 'react'
import More from '../More'

function MoreList({notifications}) {
    const notification = notifications.map((notification) => {
        return <More details={notification} />
    })
    return notification
}

export default MoreList
