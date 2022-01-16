import React from 'react'
import classes from './IconButton.module.css'
function IconButton({color, size, children, onClick, style1, mb}, props) {
    let button;
    if(color && !size){
        button = <button className={classes.IconBtn} style={{ color: color }} onClick={onClick} >{children}</button>
    } else if(size && !color){
        button = <button className={classes.IconBtn} style={{ fontSize: size }} onClick={onClick}>{children}</button>
    } else if(size && color) {
        button = <button className={classes.IconBtn} style={{ fontSize: size, color: color }} onClick={onClick}>{children}</button>
    } else if(style1) {
        button = <button className={classes.IconBtn} style={{background: '#eee', color: 'black'}} onClick={onClick}>{children}</button>
    } else {
        button = <button className={classes.IconBtn} onClick={onClick} style={{marginBottom: mb ? mb : ''}}>{children}</button>
    }
    return button
}

export default IconButton

