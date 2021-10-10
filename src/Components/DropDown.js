/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/TopTracks.css'
export default function DropDown({  value, change }) {

  return (
    <div className='dropDown'>  
    <select
      className='dropDown'
      value={ value }
      onChange={ (e) => change(e.target.value) }
    >
          <option key={ 'Titulo' } value={ 'Título' } className='dropDown'>
            {' '}
            Título
            {' '}
          </option>
          <option key={ 'Artista' } value={ 'Artista' } className='dropDown'>
            {' '}
            Artista
            {' '}
          </option>
          <option key={ 'Album' } value={ 'Album' } className='dropDown'>
            {' '}
            Album
            {' '}
          </option>
          ))

    </select>
    </div>
  );
}

DropDown.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,

};