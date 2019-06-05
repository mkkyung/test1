import React from 'react';
import classes from './Button.module.scss';

const Button: React.FC = ({btnType, clicked, btnValue}) => {
  let attachedClassName = [classes.Button, classes[btnType]].join(' '); 
  return(
    <button
      className = {attachedClassName}
      onClick = {clicked}
    >{btnValue}</button>
  )
}

export default Button;