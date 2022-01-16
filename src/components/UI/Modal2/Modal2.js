// Modal.js

import React from "react";
import classes from "./Modal2.module.css"
import Backdrop from '../BackDrop/Backdrop'

const Modal2 = (props) => {
   return( 
       <>
       <Backdrop show={props.show} clicked={props.modalClosed} />
   <div
    className={classes.Modal}
    style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
    }}>
    {props.children}
</div>
</>
   );
}

export default Modal2;