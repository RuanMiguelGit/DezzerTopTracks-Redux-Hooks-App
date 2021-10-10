import { useSelector } from "react-redux"
import Tracks from '../Components/Tracks'


export default function Favorites() {
  const state = useSelector((state) => state.account)
  return (
    <div>
        {state.favorites.map((data) => <Tracks tracks={data}/>)}
    </div>
  );
}
