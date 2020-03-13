import React from 'react';
import PropTypes from 'prop-types';
import Select from './style';

export const SelectField = (props) => {
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
SelectField.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  defaultoptions: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
SelectField.defaultProps = {
  options: [],
  defaultoptions: 'Select',
};
