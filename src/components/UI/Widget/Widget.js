import React from 'react'
import '../../../common/css/global.css'
import { Link } from 'react-router-dom'
import classes from './Widget.module.css'
import TextOne from '../TextOne/TextOne'

const widget = (props) => {
    let cssClasses = [];
    cssClasses.push('widgetWrapper');
    cssClasses.push(classes.WidgetWrapper);
    const joinclasses = cssClasses.join(' ');
    
    const list = props.iconLinkList.map((il) => {
        return <Link to={'/' + il.linkName} className={classes.Link} style={{display: "flex",
        alignItems: "center",
        textDecoration: "none",
        padding: "12px 15px",
        fontWeight: "700",
        color: "#212529",
        fontSize: "12px"
        }}>
        <span style={{marginRight: '10px', background: il.background, padding: '8px 10px', borderRadius: '50%', color: 'white'}}>
            {il.icon}
        </span>{il.linkName}</Link>
    })
    
    return (
        <div className={joinclasses}>
            <TextOne color="#adb5bd" fw="600" ml="15px">{props.widgetTitle}</TextOne>
            {list}
    </div>
    )
}

export default widget
