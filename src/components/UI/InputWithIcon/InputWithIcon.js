import React from 'react'
import classes from './InputWithIcon.module.css'


function InputWithIcon({placeholder,icon, radius, background, border, width, onClick, onChange, value, alignItems, mb}) {
    return (
        <div className={classes.InputContainer} style={{marginBottom: mb ? mb : '', alignItems: alignItems ? alignItems : '',width: width ? width : '', border: border ? border : '', backgroundColor: background ? background : '', borderRadius: radius ? radius : ''}}>
        {icon}
        <input value={value} className={classes.InputField} type="text" placeholder={placeholder} name="usrnm" onClick={onClick} onChange={onChange}/>
        </div>
    )
}

export default InputWithIcon
