/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name, btnclass, disable, onClick }) {
  return (
    <button
      type="button"
      className={ btnclass }
      disabled={ disable }
      onClick={ onClick }
    >
      {' '}
      {name}
      {' '}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  btnclass: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};