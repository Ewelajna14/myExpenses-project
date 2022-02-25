import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Home from "./Home";
import '../App.css';

function App() {
  let history = useHistory()
  const [user, setUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  
  function onLogin(newUser){
    console.log(newUser)
   if (newUser && user) {
    history.push("/")
   }
  }

  
  return (
    <div>
      <Switch>
      <Route exact path="/login">
      <LoginForm onLogin={onLogin}/>
      </Route>  
      <Route exact path="/sign">
      <SignUpForm />
      </Route>
      <Route exact path="/">
      <Home/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;



