import React from 'react';
import classes from "./AppButton.module.css";

const AppButton = ({children, ...props}) => {
  return (
    <div>
      <button {...props} className={classes.appBtn}>
        {children}
      </button>
    </div>
  );
};

export default AppButton;