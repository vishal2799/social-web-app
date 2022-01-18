import React from 'react'
import classes from './Button.module.css'

function Button({textColor, iconColor, iconBackgroundColor,variant, children, disabled, onClick, size, startIcon, endIcon, color, img, mr, width, borderRight, borderLeft}) {
    let button;
    switch (variant) {
        case 'text': 
            if(startIcon){
            button = <button className={classes.TextWithStartIcon} onClick={onClick} style={{color: textColor ? textColor : '', width: width ? width : '', borderLeft: borderLeft ? borderLeft : '', borderRight: borderRight ? borderRight : ''}}>
                     {iconBackgroundColor ? <span style={{color: iconColor ? iconColor : '', background: iconBackgroundColor, padding: '6px', borderRadius: '50%'}}>{startIcon}</span> : <span style={{color: iconColor ? iconColor : ''}}>{startIcon}</span>} 
                     {children}
                     </button>
            } else if(endIcon){

            } else if(img){
                button = <button className={classes.TextWithStartIcon} onClick={onClick}>
                    <span>{img}</span>
                    {children}
                </button>
            } else {
            button = <button className={classes.Text} onClick={onClick}>{children}</button>
            }
            break;
        case 'outlined':
            if(startIcon){
                button = <button className={classes.OutlinedWithStartIcon} onClick={onClick}>
                    <span>{startIcon}</span>
                    {children}
                    </button>
            } else if(endIcon){
                button = <button className={classes.OutlinedWithEndIcon} onClick={onClick}>
                    {children}
                    <span>{endIcon}</span>
                    </button>
            } else {
                button = <button className={classes.Outlined} onClick={onClick}>{children}</button>
            }
            break;
        case 'contained':
            if(endIcon){
                button = <button className={classes.ContainedWithEndIcon} onClick={onClick} style={{width: width ? width : ''}}>
                    {children}
                    <span>{endIcon}</span>
                    </button>
            } else if(startIcon){
                button = <button className={classes.ContainedWithEndIcon} onClick={onClick}
                style={{width: width ? width : ''}}>
                    <span>{startIcon}</span>
                    {children}
                    </button>
            } else {
            button = <button className={classes.Contained} onClick={onClick} style={{marginRight: mr ? mr : '', width: width ? width : ''}}>{children}</button>
            }
            break;
        default:
            button = <button onClick={onClick}>{children}</button>
            break;
    }

    return button
}

export default Button
