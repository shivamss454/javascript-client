import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const RadioGroup = (props) => {
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
RadioGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
};
RadioGroup.defaultProps = {
  options: [],
};
