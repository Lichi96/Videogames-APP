import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import CreateVideogame from './components/CreateVideogame/CreateVideogame';
import VideogameDetail from './components/VideogameDetail/VideogameDetail';
import Error404 from './components/Error404/Error404';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/home" component={Home} />
				<Route path="/detail/:id" component={VideogameDetail} />
				<Route path="/create" component={CreateVideogame} />
				<Route path="*" component={Error404} />
			</Switch>
		</div>
  	);
}

export default App;
