import React from 'react';
import {BrowserRouter, Switch, Route, HashRouter} from "react-router-dom";
import Login from "./pages/Log/Login";
import 'antd/dist/antd.min.css';
import Main from "./pages/main";

function App() {

  return (
      <>
          <BrowserRouter>
              <Switch>
                  <Route exact path='/' component={Login}/>
                  <Route path='/main/*' component={Main}/>
              </Switch>
          </BrowserRouter>
      </>
  );
}

export default App;
