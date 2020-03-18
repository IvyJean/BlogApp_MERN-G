import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { Container } from "semantic-ui-react";

import { AuthProvider } from './context/auth'
import AuthRoute from "./utils/AuthRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MenuBar from "./components/MenuBar";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Container>
            <MenuBar />
            <Route exact path="/" component={Home} />
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/register" component={Register} />
          </Container>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
