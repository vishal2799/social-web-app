import React from 'react'
import Story from './Story/Story'
import classes from './StoryList.module.css'



const storyList = (props) => {
    return (
        <div className={classes.StoryList} style={{flexWrap: props.home ? 'nowrap' : ''}}>
            {props.sList?.map((s) => {
                return <Story sImg={s.storyImg} sPerson={s.personImage} sPName={s.name} home={props.home}/>
            })}
        </div>
    )
}

export default storyList
