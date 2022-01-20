import React from 'react'
import classes from './InputWithIcon.module.css'


function InputWithIcon({variant, placeholder,icon, radius, background, border, width, onClick, onChange, value, alignItems, mb}) {
    let input;
    switch (variant) {
        case 'text':
            input = (
            <div className={classes.InputContainer} style={{marginBottom: mb ? mb : '', 
            alignItems: alignItems ? alignItems : '',width: width ? width : '', 
            border: border ? border : '', backgroundColor: background ? background : '', 
            borderRadius: radius ? radius : ''}}>
            {icon}
            <input value={value} className={classes.InputField} 
            type="text" placeholder={placeholder} name="usrnm" onClick={onClick} 
            onChange={onChange}/></div>
            );
            break;
        case 'password':
                input = (
                <div className={classes.InputContainer} style={{marginBottom: mb ? mb : '', 
                alignItems: alignItems ? alignItems : '',width: width ? width : '', 
                border: border ? border : '', backgroundColor: background ? background : '', 
                borderRadius: radius ? radius : ''}}>
                {icon}
                <input value={value} className={classes.InputField} 
                type="password" placeholder={placeholder} name="usrnm" onClick={onClick} 
                onChange={onChange}/></div>
                );
                break;    
        case 'file':
            input = (
                <div className={classes.InputContainer} style={{marginBottom: mb ? mb : '', 
                alignItems: alignItems ? alignItems : '',width: width ? width : '', 
                border: border ? border : '', backgroundColor: background ? background : '', 
                borderRadius: radius ? radius : ''}}>
        {icon}
        <input value={value} className={classes.InputField} type="file" placeholder={placeholder} 
        name="usrnm" onClick={onClick} onChange={onChange}/></div>
            );
            break;
        default:
            input = (
                <div className={classes.InputContainer} style={{marginBottom: mb ? mb : '', 
                alignItems: alignItems ? alignItems : '',width: width ? width : '', 
                border: border ? border : '', backgroundColor: background ? background : '', 
                borderRadius: radius ? radius : ''}}>
        {icon}
        <input value={value} className={classes.InputField} type="text" placeholder={placeholder} 
        name="usrnm" onClick={onClick} onChange={onChange}/></div>
            );
            break;
    }
    return  input
}

export default InputWithIcon
