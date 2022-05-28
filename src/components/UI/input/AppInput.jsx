import React from 'react';
import classes from "./AppInput.module.css";

const AppInput = (props) => {
  return (
    <input {...props} className={classes.appInput} type="text" />
  )
};

export default AppInput;