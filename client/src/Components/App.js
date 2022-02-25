import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Home from "./Home";
import '../App.css';

function App() {

  const [currentUser, setCurrentUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  
  
  return (
    <div>
      <Switch>
      <Route exact path="/">
      <LoginForm/>
      </Route>  
      <Route exact path="/sign">
      <SignUpForm />
      </Route>
      <Route exact path="/home">
      <Home/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;



