import React from 'react';
import classes from "./AppButton.module.css";

const AppButton = ({children, ...props}) => {
  return (
    <button {...props} className={[props.className, classes.appBtn].join(' ')}>
      {children}
    </button>
  );
};

export default AppButton;