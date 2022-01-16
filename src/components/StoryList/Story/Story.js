import React from 'react'
import TextOne from '../../UI/TextOne/TextOne'
import classes from './Story.module.css'
const story = (props) => {
    return (
        <div className={classes.Story} style={{background: `url(${props.sImg})`, marginBottom: props.home ? '0' : ''}}>
                            <div>
                                <img src={props.sPerson} />
                                <TextOne color="white" margin="0">{props.sPName}</TextOne>
                            </div>
                        </div>
    )
}

export default story
