import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Stock from './pages/Stock';
import Nav from './components/Nav';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/stock/:symbol" render={(props) => <Stock {...props} />} />
      </Switch>
    </div>
  );
}

export default App;