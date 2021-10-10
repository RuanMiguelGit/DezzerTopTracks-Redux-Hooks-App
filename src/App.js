import './App.css';
import { Route, Switch } from 'react-router-dom';
import TopTracks from '../src/Pages/TopTracks'
import Favorites from '../src/Pages/Favorites'

function App() {


  return (
    <div className="App">
      <Switch>
        <Route exact path="/topTracks" component={ TopTracks } />
        <Route exact path="/favorites" component={ Favorites } />
      </Switch>
    </div>
  );
}

export default App;
