import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Tui from './pages/trainerUI/index'
import Trn from './pages/trainings/trainings';
import Ts from './pages/transcribed/index';
import Test from './pages/test/test'
import * as serviceWorker from './serviceWorker';

function soon() {
  return(
    <center>
      <h2>
        This part is still in development
      </h2>
    </center>

  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <div>
      <aside>
        <Link to={`/`}></Link>
        <Link to={`/select`}></Link>
        <Link to={`/browse`}></Link>

      </aside>
      <main id="mid">
      
        <Route exact path="/" component={App} />
        <Route path="/test" component={Test} />
        <Route path="/trainings" component={Trn} />
        <Route path="/ts" component={Ts} />
        <Route path="/trainer" component={Tui} />




      </main>
    </div>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
