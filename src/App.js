import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Sports from './Sports';
import Home from './Home';

function App() {
  return (
      <Router>
        <div className="App">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/sports">Sport</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                {/*<Route path="/sports/:omfePath?" render={(routeProps) => <Sports routeProps={routeProps} />}>*/}
                <Route path="/sports/:omfePath*" component={Sports}>
                </Route>
                <Route path="/" render={(routeProps) => <Home routeProps={routeProps} />}>
                </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
