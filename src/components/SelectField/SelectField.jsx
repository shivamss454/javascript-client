import React from 'react';
import PropTypes from 'prop-types';
import { Select, P } from './style';

export const SelectField = (props) => {
  const {
    options, defaultoptions, onChange, error, onBlur,
  } = props;
  console.log('yyyy', error);
  return (
    <>
      <Select onChange={onChange} onBlur={onBlur} error>
        {defaultoptions && <option>{defaultoptions}</option>}
        {
          options && options.length && options.map(({ label, value }) => (
            <option key={label} value={value}>{label}</option>
          ))
        }
      </Select>
      <P>{error}</P>
    </>
  );
};
SelectField.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  defaultoptions: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
};
SelectField.defaultProps = {
  options: [],
  defaultoptions: 'Select',
};
