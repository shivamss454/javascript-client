/* eslint-disable react/prop-types */
import React from 'react';
import { Input } from './style';

const Textfield = (props) => {
  const {
    placeholder, disabled, error, bgcolor,
  } = props;
  return (

    <Input type="text" placeholder={placeholder} disabled={disabled} error={error} bgcolor={bgcolor} />

  );
};
export default Textfield;
