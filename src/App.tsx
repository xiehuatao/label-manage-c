import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./pages/Log/Login";
import 'antd/dist/antd.min.css';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
