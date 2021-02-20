import React from 'react';
import styled from "styled-components";
import {Switch, Route, Redirect, HashRouter as Router, Link} from 'react-router-dom';
import NoMatch from "./views/NoMatch";

import x from './icons/jizhang.svg';

console.log(x)

const AppWrapper = styled.div`
  color: #333;
`

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
    display:flex;
    > li{
      width: 33.3333%;
      text-align:center;
      display: flex;
      flex-direction: column;
      padding: 4px 0;
      justify-content: center;
      align-items: center;
      .icon {
        width: 24px;      
        height: 24px;
      }
    }
  }
`;

function App() {
  return (
    <AppWrapper>
        <Router>
            <Switch>
                <Route path="/tags">
                    <Tags />
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
            <NavWrapper>
                <ul>
                    <li>
                        <Link to="/tags">标签页</Link>
                    </li>
                    <li>
                        <Link to="/money">记账页</Link>
                    </li>
                    <li>
                        <Link to="/statistics">统计页</Link>
                    </li>
                </ul>
            </NavWrapper>
        </Router>
    </AppWrapper>
  );
}

function Tags() {
    return <div>tags</div>
}

function Money() {
    return <div>money</div>
}

function Statistics() {
    return <div>statistics</div>
}

export default App;
