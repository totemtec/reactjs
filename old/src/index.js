import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Example from './hook/Example';
import Game from './tutorial/Game';
import ThemePage from './context/theme-page';
import ThemePage2 from './context2/theme-page';
import MultiContextPage from './context3';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={App} />
          <Route path="/react-game" component={Game} />
          <Route path="/hook/example" component={Example} />

          <Route path="/context/dynimac" component={ThemePage} />
          <Route path="/context/update" component={ThemePage2} />
          <Route path="/context/multi" component={MultiContextPage} />
        </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
