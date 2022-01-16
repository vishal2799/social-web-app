import React from 'react'
import '../../../common/css/global.css'
import TextOne from '../TextOne/TextOne'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import classes from './Widget2.module.css'
import Button from '../Button/Button'
import UserDetail from '../UserDetail/UserDetail'

const widget2 = (props) => {
    let cssClasses = [];
    cssClasses.push('widgetWrapper2');
    cssClasses.push(classes.WidgetWrapper);
    const joinclasses = cssClasses.join(' ');
    let list;
    if(props.sPages){
        list = props.sPages.map((p) => {
            return (
                <div style={{padding: '1rem 0 0 0'}}>
                    <img src={p.pageImg} style={{width: '100%', marginBottom: '0.3rem', borderRadius: '20px'}}/>
                    <Button variant="contained" endIcon={<ThumbUpOutlinedIcon />} width="100%">Like Page</Button>
                </div>
            );
        })
    }
    if(props.fReq){
        list = props.fReq.map((f) => {
            return (
                <div style={{padding: '1rem 0 0 0'}}>
                <UserDetail name={f.pName} img={f.pImg} mutual={f.mutual} />
                    <div style={{marginTop: '1rem'}}>
                        <Button variant="contained" mr="10px">Confirm</Button>
                        <Button variant="contained">Delete</Button>
                    </div>
                    </div>
            )
        })
    } 
    return (
        <div className={joinclasses}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 1.5rem', borderBottom: '1px solid #eee'}}>
            <TextOne fw="600">{props.widgetTitle}</TextOne>
            <Button variant="text">See All</Button>
            </div>
            <div style={{padding: '0 1.5rem 1.5rem 1.5rem'}}>
                {list}
            </div>
    </div>
    )
}

export default widget2
