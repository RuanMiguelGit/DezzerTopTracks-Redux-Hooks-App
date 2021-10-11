import { useSelector, useDispatch } from "react-redux"
import Tracks from '../Components/Tracks'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../State/index'


export default function Favorites() {
  const state = useSelector((state) => state.account)
  const dispatch = useDispatch()

  const { removeFavorite } = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
        {state.favorites.map((data) => <Tracks tracks={data} 
        favoriteFunc={removeFavorite}
        favoriteName={'Remover'}
        />)}
    </div>
  );
}
