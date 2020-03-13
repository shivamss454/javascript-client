/* eslint-disable react/prop-types */
import React from 'react';
import { Input } from './style';

export const Textfield = (props) => {
  const { onChange, value, error } = props;
  return (
    <>
      <Input type="text" value={value} onChange={onChange} />
      <p>{error}</p>
    </>


  );
};
