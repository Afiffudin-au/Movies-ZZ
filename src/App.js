import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home/Home';
import MovieDetail from './MovieDetail/MovieDetail';
import ResultMultiSearch from './ResultMultiSearch/ResultMultiSearch'
import './ToolTip/ToolTip.scss'
function App() {
  return (
    <Router>
       <div className="App">
      <Switch>
        <Route path="/result_search">           
          <ResultMultiSearch/>
        </Route>
        <Route path="/detail">
          <MovieDetail/>
        </Route>
        <Route path="/">
         <Home/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
