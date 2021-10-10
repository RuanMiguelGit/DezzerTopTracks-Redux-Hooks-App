import React, { useState, useRef } from 'react'
import { useDispatch } from "react-redux"
import { bindActionCreators } from 'redux'
import { actionCreators } from '../State/index'
import Button from '../Components/Button'
import '../Styles/TopTracks.css'

export default function Tracks({ tracks }) {
  const { title, artist, preview, link, duration, album } = tracks
  const { name } = artist
  const { cover_medium } = album
  const [audioStatus, changeAudioStatus] = useState(false);
  const myRef = useRef();


  const dispatch = useDispatch()
  const { addFavorite } = bindActionCreators(actionCreators, dispatch)

  const startAudio = () => {
    myRef.current.play();
    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    myRef.current.pause();
    changeAudioStatus(false);
  };

  return (
    <div>
        <div className = "Holder"> 
          <h1 className='cardTitle'>{title}</h1>
          <h2 className='artistName'> {name}</h2>
          <img src={cover_medium} alt="cover"/>
          <h5 className='duration'>Duração : {duration} Segundos </h5>
          </div>
          <a href={link}>
          <Button 
          name="Dezzer"
          btnclass='button1'
          /> 
          </a>
          <audio
        ref={myRef}
        src={preview}
      />
      {audioStatus ? (
        <Button onClick={pauseAudio} 
        name= "Pause Preview"
        btnclass="pause"/>
      ) : (
        <Button onClick={startAudio} 
        name ="Start Preview"
        btnclass='start'
        />
      )}
      <Button onClick={()=> addFavorite({title, name, album, duration, link, preview, artist})}
      name='Favoritar'
      btnclass='favorited' />
    </div>
  );
}
