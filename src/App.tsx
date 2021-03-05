import React from 'react';
import {Switch, Route, Redirect, HashRouter as Router} from 'react-router-dom';
import NoMatch from "./views/NoMatch";
import Money from "./views/Money/index";
import Statistics from "./views/Statistics/index";
import Tags from "./views/Tags/Tags";
import Tag from './views/Tag/Tag';

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/tags" exact={true}>
                <Tags />
              </Route>
              <Route path="/tags/:id" exact={true}>
                <Tag />
              </Route>
              <Route path="/money">
                <Money />
              </Route>
              <Route path="/statistics">
                <Statistics />
              </Route>
              <Redirect exact from="/" to="/money" />
              <Route path="/404">
                <NoMatch />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
