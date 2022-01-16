import React from 'react'
import classes from './TextOne.module.css'
const textOne = (props) => {
    let color, fw, size, ml, mt, margin = null;
    if(props.color) {
        color = props.color;
    }
    if(props.fw) {
        fw = props.fw;
    }
    if(props.size) {
        size = props.size;
    }
    if(props.mt) {
        mt = props.mt;
    }
    if(props.margin){
        margin = props.margin
    }
    if(props.ml) {
        ml = props.ml
    }
    return (
        <h4 className={classes.TextOne} style={{margin: margin, marginTop: mt, color: color, fontWeight: fw, fontSize: size, marginLeft: ml}}>
           {props.children} 
        </h4>
    )
}

export default textOne
