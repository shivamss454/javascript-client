/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import { Input, Select } from './style';

const Textfield = (props) => {
  const { onChange, value, error } = props;
  return (
    <>
      <Input type="text" value={value} onChange={onChange} />
      <p>{error}</p>
    </>


  );
};
const SelectField = (props) => {
  const { options, defaultoptions, onChange } = props;
  return (
    <Select onChange={onChange}>
      {defaultoptions && <option>{defaultoptions}</option>}
      {
        options && options.length && options.map(({ label, value }) => (
          <option key={label} value={value}>{label}</option>
        ))
      }
    </Select>
  );
};
const RadioField = (props) => {
  const { options, onChange } = props;
  return (
    <>
      {
        options && options.length && options.map(({ label, value }) => (
          <Fragment key={label}>
            {' '}
            <input type="radio" name="game" value={value} onChange={onChange} />
            {label}
            <br />
          </Fragment>
        ))
      }
    </>
  );
};
export { Textfield, SelectField, RadioField };
