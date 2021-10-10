import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux"
import { useHistory } from 'react-router';
import { bindActionCreators } from 'redux'
import { actionCreators } from '../State/index'
import { getDataFromApi } from '../State/services/ApiRequest';
import Loading from '../Components/Loading'
import Tracks from '../Components/Tracks';
import Input from '../Components/Input'
import DropDown from '../Components/DropDown';
import '../Styles/TopTracks.css'
import Button from '../Components/Button';


export default function TopTracks() {

  const dispatch = useDispatch()
  const { apiResponse } = bindActionCreators(actionCreators, dispatch)
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([])
  const [dropDown, setDropDown] = useState('Título')
  const [query, setQuery] = useState('');
  let history = useHistory()
  const searchOn = () => {
    let searchTerm =  query.charAt(0).toUpperCase() + query.slice(1)

    if (searchTerm === ''){
      return apiData
    }

    if(searchTerm !== '' && dropDown === 'Título'){

     return apiData.filter(item => item.title.includes(searchTerm))
    }

    if(searchTerm !== '' && dropDown === 'Artista'){

      return Object.values(apiData).flat().filter(item => item.artist.name.includes(searchTerm))
    }
       
    if(searchTerm !== '' && dropDown === 'Album'){

    return Object.values(apiData).flat().filter(item => item.album.title.includes(searchTerm) )
    }

  }

   useEffect(() =>  {
    setLoading(true)
     getDataFromApi("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
    .then((res) => {
        apiResponse(res.tracks.data)
        setApiData(res.tracks.data)
      })
       setLoading(false)
  }, []);




  return (
    <div>
      <Button onClick={() => history.push('/favorites')}
      name='Favoritos'
      btnclass='favoritesBtn' />
      <Input 
      name="Search"
      type="input"
      value={ query }
      change={ setQuery }
      inputclass="input-back"
      />
      <DropDown 
        value={dropDown}
        change={setDropDown}     
      />
      {loading ?  <Loading /> : searchOn().map((data) => <Tracks tracks={data}/>)}
      
    </div>
  );
}
