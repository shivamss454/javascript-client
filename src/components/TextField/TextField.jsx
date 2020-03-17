/* eslint-disable react/prop-types */
import React from 'react';
import { Input, Para } from './style';

export const Textfield = (props) => {
  const {
    onChange, value, error, onBlur,
  } = props;
  return (
    <>
      <Input type="text" value={value} onChange={onChange} onBlur={onBlur} error={error} />
      <Para>{error}</Para>
    </>
  );
};
