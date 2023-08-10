import React from 'react';
import { string } from 'prop-types';

export const Label = ({ text, classes}) => {
  return (
    <label className={classes}>{text}</label>
  )
}

Label.propTypes = {
  text: string.required,
  classes: string,
}

Label.defaultProps = {
  classes: ''
};
