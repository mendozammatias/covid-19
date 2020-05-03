import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';

// TODO: access theme for color variables
const useStyles = makeStyles((theme) => ({
  checkbox: {
    fontFamily: 'Encode Sans',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    color: '#000',
    cursor: 'pointer',
    height: '65px',
    flex: '0.5',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5px',
    borderRadius: '3px',
    width: '100%',
    border: 'none',
    fontSize: '18px',
    textAlign: 'center',
  },
  checked: {
    backgroundColor: '#4bb7b1',
    color: '#fff',
  },
}));

const CheckBox = ({ title, checked, onPress, ...rest }) => {
  const classes = useStyles();

  return (
    <button
      {...rest}
      onClick={onPress}
      className={clsx({
        [classes.checkbox]: true,
        [classes.checked]: !!checked,
      })}
    >
      {title}
    </button>
  );
};

CheckBox.displayName = 'CheckBox';

export default CheckBox;
