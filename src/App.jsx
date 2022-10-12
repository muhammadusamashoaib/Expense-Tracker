import { Route, Switch } from 'react-router-dom';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import { Home } from './Pages/Home';
import { NavBar } from './components/NavBar';
import { Tracker1 } from './Pages/Tracker1';
import { Tracker2 } from './Pages/Tracker2';
import { Error } from './Pages/Error';

const App = () => {
  return (
    <GlobalProvider>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/tracker1' component={Tracker1}></Route>
        <Route exact path='/tracker2' component={Tracker2}></Route>
        <Route component={Error}></Route>
      </Switch>
    </GlobalProvider>
  );
}

export default App;
